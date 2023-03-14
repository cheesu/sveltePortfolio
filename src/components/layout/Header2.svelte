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
      { title: "About", url: "#", subMenuItems: [
        { title: 'About us', url: '#' },
        { title: 'Our team', url: '#' },
        { title: 'Our story', url: '#' }
      ] },
      { title: "Contact", url: "/contact" },
    ];
  
    const isMenuOpen = writable(false);
  
    function handleClick() {
      isMenuOpen.update((value) => !value);
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

  
<header class="bg-gray-800 text-white">
    <div class="container mx-auto py-4 px-6 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold">Logo</a>
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
      <nav class="hidden md:block">
        <ul class="flex">
          {#each menuItems as item}
            {#if item.subMenuItems}
              <li
                class="relative mr-6"
                on:mouseenter={handleMouseEnter}
                on:mouseleave={handleMouseLeave}
              >
                <a href="/" class="hover:text-gray-400">{item.title}</a>
                <ul
                  class={
                    `absolute top-full left-0 bg-gray-800 text-white py-2 px-4 mt-2 rounded shadow-md transition-all duration-300 ${
                      $isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`
                  }
                >
                  {#each item.subMenuItems as subItem}
                    <li>
                      <a href={subItem.url} class="hover:text-gray-400">{subItem.title}</a>
                    </li>
                  {/each}
                </ul>
              </li>
            {:else}
              <li class="mr-6">
                <a href={item.url} class="hover:text-gray-400">{item.title}</a>
              </li>
            {/if}
          {/each}
        </ul>
      </nav>
      </div>
      </header>
      