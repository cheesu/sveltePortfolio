<script lang="ts">
	import CardList from '$components/card/CardList.svelte';
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	export let data: PageData;

	const chanalInfo: YouTubeChannel = data.chanalInfo;
	const videoArray = Array.isArray(data?.videoList) ? data?.videoList : [];
	interface YouTubeChannel {
		kind: string;
		etag: string;
		id: string;
		snippet: {
			title: string;
			description: string;
			customUrl: string;
			publishedAt: string;
			thumbnails: {
				default: Thumbnail;
				medium: Thumbnail;
				high: Thumbnail;
			};
			localized: {
				title: string;
				description: string;
			};
		};
		contentDetails: {
			relatedPlaylists: {
				likes: string;
				uploads: string;
			};
		};
		statistics: {
			viewCount: string;
			subscriberCount: string;
			hiddenSubscriberCount: boolean;
			videoCount: string;
		};
	}

	interface Thumbnail {
		url: string;
		width: number;
		height: number;
	}

	interface postItem {
		title: string;
		postUrl: string;
		description: string;
		imageUrl: string;
	}

	let cards: postItem[];

	cards = videoArray.map((item: any) => {
		console.log(item.title);
		let postData: postItem = {
			title: item.snippet.title,
			postUrl: 'https://www.youtube.com/watch?v=' + item.id.videoId,
			description: item.snippet.description,
			imageUrl: item.snippet.thumbnails.high.url
		};
		return postData;
	});

	function hrefLink(): void {
		window.open('https://www.youtube.com/' + chanalInfo?.snippet?.customUrl);
	}
</script>

<h2 class="mt-20 w-full text-center font-nanumb font-bold">github 소개</h2>

<div class="w-full md:flex justify-center items-center">
	<div
		class="block m-10 md:flex rounded-lg overflow-hidden shadow-md  justify-center items-center  md:w-1/2"
	>
		<div
			class="bg-white  hover:cursor-pointer rounded-lg overflow-hidden shadow-md w-full md:w-1/3"
		>
			{#if chanalInfo && Object.keys(chanalInfo).length !== 0}
				<img
					class="object-cover"
					src={chanalInfo?.snippet?.thumbnails?.medium?.url}
					alt="Blog profileImage"
					on:click={hrefLink}
					on:keydown={hrefLink}
				/>
			{/if}
		</div>
		<div class="p-4 block">
			{#if chanalInfo && Object.keys(chanalInfo).length === 0}
				<h3 class="text-lg font-medium mb-2">YOUTUBE 채널 정보를 불러오지 못했습니다.</h3>
			{:else}
				<h3 class="text-lg font-medium mb-2">{chanalInfo.snippet.title}</h3>
				{chanalInfo.snippet?.description}<br />
				<span>subscriberCount : </span>{chanalInfo.statistics.subscriberCount} <br />
				<span>videoCount : </span>{chanalInfo.statistics.videoCount} <br />
				<span>viewCount : </span>{chanalInfo.statistics.viewCount} <br />
				<span>created : </span>{dayjs(chanalInfo.snippet.publishedAt).format('YYYY-MM-DD HH:mm:ss')}
				<br />
			{/if}
		</div>
	</div>
</div>

<div class="min-h-screen">
	<h1 class="text-20 p-10">repo list</h1>
	<CardList {cards} />
</div>
