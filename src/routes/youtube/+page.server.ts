import { YOUTUBE, CHANAL } from '$env/static/private';
import * as http from 'http';
import * as https from 'https';
import axios from 'axios';
import { load as cheerioLoad } from 'cheerio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const responseChanalInfo = await fetch(
		'https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=' +
			CHANAL +
			'&key=' +
			YOUTUBE
	);
	const responseVideo = await fetch(
		'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=' +
			CHANAL +
			'&type=video&key=' +
			YOUTUBE
	);
	const chanalInfo = await responseChanalInfo.json();
	const videoList = await responseVideo.json();

	return {
		chanalInfo: chanalInfo?.items[0],
		videoList: videoList?.items
	};
};
