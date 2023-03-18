<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
  
    interface MenuItem {
      title: string;
      url: string;
      subMenuItems?: MenuItem[];
    }
  
    const menuItems: MenuItem[] = [
      { title: "Home", url: "/" },
      { title: "Blog", url: "/blog" },
      { title: "Youtube", url: "/" },
      { title: "SNS", url: "/" },
      { title: "Contact", url: "/contact" },
    ];
  
    const isMenuOpen = writable(false);
    const isMobileMenuOpen = writable(false);
  
    function handleClick() {
      isMobileMenuOpen.update((value) => !value);

        if(isMobileMenuOpen){
          console.log("testsetsetsertset");
          const parentElement:any = document.querySelector('#headerNav');
          let parentHeight:string = parentElement.offsetHeight+"px";
          const topN:any =  document.querySelector('#topNav');
          topN.style.top = parentHeight;

          console.log(topN);
        }

    }
  
    function handleMouseEnter() {
      isMenuOpen.set(true);
    }
  
    function handleMouseLeave() {
      isMenuOpen.set(false);
    }
  
    onMount(() => {
      // 클릭 이벤트가 발생했을 때 메뉴가 닫히도록 처리
      window.addEventListener("click", () => {
        isMenuOpen.set(false);
      });
      
    });

     

  </script>

  
<header id="headerNav" class="sticky top-0 w-full bg-gray-800 text-white">
    <div class="container mx-auto py-4 px-6 flex justify-between items-center mx-auto max-w-7xl  sm:px-6 lg:px-8 s-7IPF32Wcq3s8">
      <a href="/" class="text-2xl font-bold">In-studio</a>
      <button
        class="md:hidden"
        on:click={handleClick}
      >
        <svg
          class="fill-current text-white h-8 w-8"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
        </svg>
      </button>
      <nav id="topNav" class={
        ` ${
          $isMobileMenuOpen ? "fixed bg-gray-800 left-0 h-full w-full pt-5 md:block" : "hidden md:block"
        }`
      }>
        <ul class="text-center md:flex">
          {#each menuItems as item}
              <li class="mt-7 pl-4 pr-4 md:pl-4 pr-4 md:mt-0">
                <a href={item.url} class=" hover:text-gray-400 ">{item.title}</a>
              </li>
          {/each}
        </ul>
      </nav>
      </div>
      </header>
      