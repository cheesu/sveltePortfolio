<script lang="ts">
	import CardList from '$components/card/CardList.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const blogDataArray = Array.isArray(data?.blogData) ? data.blogData : [];
	const blogInfo: blogInfo = blogDataArray[0] || {};
	console.log('blogInfo', blogInfo);

	interface blogInfo {
		name: string;
		url: string;
		secondaryUrl: string;
		nickname: string;
		title: string;
		description: string;
		default: string;
		blogIconUrl: string;
		faviconUrl: string;
		profileThumbnailImageUrl: string;
		profileImageUrl: string;
		role: string;
		blogId: string;
		isEmpty: string;
		statistics: statistics;
	}

	interface statistics {
		comment: string;
		guestbook: string;
		post: string;
		trackback: string;
	}

	interface postItem {
		title: string;
		postUrl: string;
		description: string;
		imageUrl: string;
	}

	let cards: postItem[];

	cards = data.postArr.map((item: any) => {
		console.log(item.title);
		let postData: postItem = {
			title: '',
			postUrl: item.postUrl,
			description: item.title,
			imageUrl: item.image
		};
		return postData;
	});

	function hrefLink(): void {
		window.open(blogInfo?.url);
	}
</script>

<h2 class="mt-20 w-full text-center font-nanumb font-bold">블로그 소개</h2>

<div class="w-full md:flex justify-center items-center">
	<div
		class="block m-10 md:flex rounded-lg overflow-hidden shadow-md  justify-center items-center  md:w-1/2"
	>
		<div
			class="bg-white  hover:cursor-pointer rounded-lg overflow-hidden shadow-md w-full md:w-1/3"
		>
			{#if blogInfo && Object.keys(blogInfo).length !== 0}
				<img
					class="object-cover"
					src={blogInfo?.profileImageUrl}
					alt="Blog profileImage"
					on:click={hrefLink}
					on:keydown={hrefLink}
				/>
			{/if}
		</div>
		<div class="p-4 block">
			{#if blogInfo && Object.keys(blogInfo).length === 0}
				<h3 class="text-lg font-medium mb-2">티스토리 API 운영이 종료되었습니다.</h3>
			{:else}
				<h3 class="text-lg font-medium mb-2">{blogInfo.name}</h3>
				{blogInfo.description}<br />
				<span>post : </span>{blogInfo.statistics.post} <br />
				<span>comment : </span>{blogInfo.statistics.comment} <br />
				<span>guestbook : </span>{blogInfo.statistics.guestbook} <br />
				<span>trackback : </span>{blogInfo.statistics.trackback} <br />
			{/if}
		</div>
	</div>
</div>

<div class="min-h-screen">
	<h1 class="text-20 p-10">최근 포스팅한 게시물</h1>
	<CardList {cards} />
</div>
