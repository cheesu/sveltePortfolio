<script lang="ts">
    import "../app.css";
    import DropDownMenu from '../components/DropDownMenu.svelte';

let topToggle : Boolean = false;

interface MenuItem {
    title: string;
    url: string;
    subMenuItems?: MenuItem[];
  }

  // 메뉴 아이템
  const menuItems: MenuItem[] = [
    { title: 'Home', url: '/' },
    { title: 'modal', url: '/modal' },
    {
      title: 'About',
      url: '#',
      subMenuItems: [
        { title: 'About us', url: '#' },
        { title: 'Our team', url: '#' },
        { title: 'Our story', url: '#' },
      ],
    },
    
  ];


interface MenuItem {
    title: string;
    url: string;
  }

  // 메뉴 아이템
  const userMenuList: MenuItem[] = [
      { title: 'my blog', url: 'https://yamea-guide.tistory.com/' },
        { title: 'Our team', url: '#' },
        { title: 'Our story', url: '#' }
  ];


</script>
  
  <div class="min-h-full" >
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                <!--
                <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

                <a href="modal" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Modal</a>
                <a href="modal2" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >Modal2</a>
  
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
  
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
  
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
  
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>

                -->

                <!-- 메뉴 -->
                <ul class="flex">
                  {#each menuItems as item}
                    <li class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative">
                      {#if item.subMenuItems}
                        <DropDownMenu subMenuItems={item.subMenuItems} menuTitle = {item.title}/>
                      {:else}
                        <a href={item.url}>{item.title}</a>
                      {/if}
                    </li>
                  {/each}
                </ul>
              
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>
  
              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button"
                  on:click={()=>{topToggle = !topToggle}}
                  class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="data:image/jpeg;base64,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" alt="">
                  </button>
                </div>
              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              
             
              <!--{#if topToggle}
                <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="https://yamea-guide.tistory.com/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">my blog</a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>

                  <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              {/if}-->
  
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
          <a href="modal" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Modal</a>
          <a href="modal2" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Modal2</a>
  
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
  
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
  
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
  
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div class="border-t border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</a>
  
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</a>
  
            <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="h-96 rounded-lg border-4 border-dashed border-gray-200">
            <slot />

          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    
  </div>


  <style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    </style>