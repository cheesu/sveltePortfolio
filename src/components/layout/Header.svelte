<script lang="ts">
    import { onMount } from 'svelte';
	let topToggle: Boolean = false;

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
				{ title: 'Our story', url: '#' }
			]
		}
	];

	function handleClick(event: MouseEvent) {
		event.preventDefault();
	}

    let menuClass : String = "hidden";
    let isOpen:boolean = false;
    function toggle() {
        isOpen = !isOpen;

        if(menuClass){
            menuClass = "";
        }else{
            menuClass = "hidden";
        }
    }

    

    // function handleClickOutside(event: MouseEvent) {
    //     if (isOpen && !(event.target as HTMLElement).closest('.dropdown-menu')) {
    //     isOpen = false;
    //     }
    // }

    
    // $: {
    //     if (isOpen) {
    //     document.addEventListener('click', handleClickOutside);
    //     } else {
    //         onMount(() => {
    //             document.removeEventListener('click', handleClickOutside);
    //         });
    //     }
    // }
</script>

<!-- 상단 헤더 영역 -->
<header class="bg-gray-800 text-white">
	<div class="container mx-auto py-4 px-6 flex justify-between items-center">
		<!-- 로고 -->
		<a href="/" class="text-2xl font-bold">Logo</a>
        <div class = "w-full flex justify-center">
            <!-- 네비게이션 메뉴 -->
            <nav class="flex items-center {menuClass} md:block">
                <ul class="absolute md:flex">
                    {#each menuItems as item}
                        {#if item.subMenuItems}
                            <li class="relative mr-6">
                                <a href="/" class="hover:text-gray-400" on:click={handleClick}>{item.title}</a>
                                <!-- 2뎁스 메뉴 -->
                                <ul
                                    class="absolute top-full left-0 bg-gray-800 text-white py-2 px-4 mt-2 rounded shadow-md hidden"
                                >
                                    {#each item.subMenuItems as subItem}
                                        <a href={subItem.url} class="hover:text-gray-400">{subItem.title}</a>
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
		

		<!-- 햄버거 버튼 -->
		<button class="md:hidden" on:click={toggle}>
			<svg
				class="fill-current text-white h-8 w-8"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Menu</title>
				<path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
			</svg>
		</button>
	</div>
</header>
