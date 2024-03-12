<script lang="ts">
	import CardList from '$components/card/CardList.svelte';
	import dayjs from 'dayjs';
	import type { PageData } from './$types';

	export let data: PageData;

	const githubInfo: GithubUser = data.githubInfo;
	const gitRepoArray = Array.isArray(data?.gitrepoList) ? data?.gitrepoList : [];

	console.log(githubInfo);

	interface GithubUser {
		login: string;
		id: number;
		node_id: string;
		avatar_url: string;
		gravatar_id: string;
		url: string;
		html_url: string;
		followers_url: string;
		following_url: string;
		gists_url: string;
		starred_url: string;
		subscriptions_url: string;
		organizations_url: string;
		repos_url: string;
		events_url: string;
		received_events_url: string;
		type: string;
		site_admin: boolean;
		name: string | null;
		company: string | null;
		blog: string;
		location: string;
		email: string | null;
		hireable: boolean;
		bio: string;
		twitter_username: string | null;
		public_repos: number;
		public_gists: number;
		followers: number;
		following: number;
		created_at: string;
		updated_at: string;
	}

	interface postItem {
		title: string;
		postUrl: string;
		description: string;
		imageUrl: string;
	}

	let cards: postItem[];

	cards = gitRepoArray.map((item: any) => {
		console.log(item.title);
		let postData: postItem = {
			title: item.name,
			postUrl: item.postUrl,
			description: item.description,
			imageUrl:
				'https://velog.velcdn.com/images/www_1216/post/9a190c41-3655-4feb-ba6c-da532ae88a98/ba9a7cbd.png'
		};
		return postData;
	});

	function hrefLink(): void {
		window.open(githubInfo?.html_url);
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
			{#if githubInfo && Object.keys(githubInfo).length !== 0}
				<img
					class="object-cover"
					src={githubInfo?.avatar_url}
					alt="Blog profileImage"
					on:click={hrefLink}
					on:keydown={hrefLink}
				/>
			{/if}
		</div>
		<div class="p-4 block">
			{#if githubInfo && Object.keys(githubInfo).length === 0}
				<h3 class="text-lg font-medium mb-2">github 정보를 불러오지 못했습니다.</h3>
			{:else}
				<h3 class="text-lg font-medium mb-2">{githubInfo.name}</h3>
				{githubInfo.html_url}<br />
				{githubInfo.blog}<br />
				<span>public repos : </span>{githubInfo.public_repos} <br />
				<span>followers : </span>{githubInfo.followers} <br />
				<span>following : </span>{githubInfo.following} <br />
				<span>created : </span>{dayjs(githubInfo.created_at).format('YYYY-MM-DD HH:mm:ss')}
				<br />
				<span>updated : </span>{dayjs(githubInfo.updated_at).format('YYYY-MM-DD HH:mm:ss')}
				<br />
			{/if}
		</div>
	</div>
</div>

<div class="h-screen">
	<h1 class="text-20 p-10">repo list</h1>
	<CardList {cards} />
</div>
