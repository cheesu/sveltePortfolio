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

    const isHeaderStatus = writable("tw"); // hide : 안보임, view:보임, wb: 흰배경 검은글씨, tw : 투명 흰글씨
  
    function handleClick() {
      isMobileMenuOpen.update((value) => !value);
        if(isMobileMenuOpen){
          // console.log("testsetsetsertset");
          // const parentElement:any = document.querySelector('#headerNav');
          // let parentHeight:string = parentElement.offsetHeight+"px";
          // const topN:any =  document.querySelector('#topNav');
          // topN.style.top = parentHeight;
          // console.log(topN);
        }

    }

    function mobileMenuClose():void{
      isMobileMenuOpen.set(false);
    }
  
    function handleMouseEnter():void {
      isMenuOpen.set(true);
    }
  
    function handleMouseLeave():void {
      isMenuOpen.set(false);
    }
  
    onMount(() => {
      // 마운트되고 잡아놓을 놈들 미리 잡아놓기
      const headerEl: HTMLElement | null = document.getElementById('headerNav');
      const bugerEl: HTMLElement | null = document.getElementById('bugerBar');
      const mainEl: HTMLElement | null = document.getElementById('mainView');


      // 메뉴 가리기
      function headerHide():void {
        if(headerEl && bugerEl){
            headerEl.style.transition = "top 0.5s ease, color 0.5s ease";
            headerEl.style.top = "-"+headerEl.offsetHeight + "px";
            isHeaderStatus.set("hide");
        }
        
      }

      // 메뉴 보이기
      function headerView():void {
        if(headerEl && bugerEl){
            headerEl.style.transition = "top 0.5s ease, color 0.5s ease";
            headerEl.style.top = "0px";
            isHeaderStatus.set("view");
        }
        
      }

      // 흰배경 검은글씨
      function headerWhite():void {
        console.log("// 흰배경 검은글씨");
        if(headerEl && bugerEl){
            headerEl.style.transition = "background-color 0.5s ease, color 0.5s ease";
            headerEl.style.backgroundColor = "#FFFFFF";
            headerEl.style.color = "#000";

            bugerEl.style.color = "#000";
            isHeaderStatus.set("wb");
        }
      }

      // 투명배경 흰글씨
      function headerTrans():void {
        console.log("// 투명배경 흰글씨");
        if(headerEl && bugerEl){
            headerEl.style.transition = "background-color 0.5s ease, color 0.5s ease";
            headerEl.style.backgroundColor = "transparent";
            headerEl.style.color = "#FFFFFF"
            bugerEl.style.color = "#FFFFFF";
            isHeaderStatus.set("tw");
        }
      }

      // 클릭 이벤트가 발생했을 때 메뉴가 닫히도록 처리
      window.addEventListener("click", () => {
        isMenuOpen.set(false);
      });

      //메인뷰 높이 감지
      let mainViewH:number = 0;
      if (mainEl) {
        mainViewH = mainEl.offsetHeight;
        console.log(mainViewH);
      }

      // 윈도우 스크롤 감지
      let lastScrollTop:number = 0;
      let currentScrollTop:number = 0;
      window.addEventListener("scroll", function() {
        currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // 스크롤 다운
          if(mainViewH < currentScrollTop){
            if(headerEl && bugerEl){
              // 흰배경 검은글씨
              headerWhite();
              headerHide();
            }
          }
        } else {
          // 스크롤 업
          headerView();
          if(mainViewH > currentScrollTop){
            headerTrans();
          }
        }
        lastScrollTop = currentScrollTop;
      });


      if(headerEl && bugerEl){
        headerEl.addEventListener("mouseover", () => {
          // 마우스 오버 되었을 때 실행할 코드 작성
          headerWhite();
        });

        headerEl.addEventListener("mouseleave", () => {
          // 마우스 아웃 되었을때 코드
          if(mainViewH < currentScrollTop){
            //메인뷰 아래
            headerWhite();
          }else{
            //메인뷰 위
            headerTrans();
          }
        });

      }
    });
  </script>

  
<header id="headerNav" class="fixed top-0 w-full text-white ">
  <div class="mx-auto py-4 flex justify-between items-center mx-aut w-full  sm: lg: s-7IPF32Wcq3s8">
    <a id="headerLogo" href="/" class="text-2xl font-nanumb font-bold w-120 mx-5 md:mx-10">In <span class="text-red-500">S</span>tudio</a>
    <button
      class="mr-5 md:hidden"
      on:click={handleClick}
    >
      <svg 
        id = "bugerBar"
        class="fill-current text-white h-8 w-8"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
      </svg>
    </button>

    <nav id="topNav" class={
      `transform transition-transform duration-500  fixed bg-dark h-full w-full top-0  text-4xl  mx-auto space-x-4  md:text-xl md:w-auto md:static md:bg-transparent ${
        $isMobileMenuOpen ? "translate-x-0 text-white" : "translate-x-full  md:block md:translate-x-0"
      }`
    }>
      <div class="block mt-5 mr-10 text-right text-md md:hidden">
        <button on:click={handleClick}><i>X</i></button>
      </div>
      
      <ul class="text-center md:flex">
        {#each menuItems as item}
            <li class="mt-7 pl-4 pr-4 md:pl-4 pr-4 md:mt-0">
              <a on:click={mobileMenuClose} href={item.url} class="font-bold hover:text-red-500 ">{item.title}</a>
            </li>
        {/each}
      </ul>
    </nav>
     <div class="hidden w-120 mx-10 md:block">
     </div>

  </div>

</header>
      