<script lang="ts">
     import { onMount } from 'svelte';

  interface SubMenuItem {
    title: string;
    url: string;
  }

  export let subMenuItems: SubMenuItem[] = [];
  export let menuTitle: string;
  

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
  }

  function handleClickOutside(event: MouseEvent) {
    if (isOpen && !(event.target as HTMLElement).closest('.dropdown-menu')) {
      isOpen = false;
    }
  }

 
  $: {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
        onMount(() => {
            document.removeEventListener('click', handleClickOutside);
        });
    }
  }
</script>

<div class="dropdown-menu">

    
  <button
    class="block w-full text-left py-2 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
    on:click={toggle}
  >
    {menuTitle}
  </button>

  {#if isOpen}
    <div class="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg z-10">
      {#each subMenuItems as subMenuItem}
        <a
          href={subMenuItem.url}
          class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
        >
          {subMenuItem.title}
        </a>
      {/each}
    </div>
  {/if}
</div>