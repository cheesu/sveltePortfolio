import { CLIENT_ID, SC_KEY, TISTORY_ACTK } from '$env/static/private';
import * as http from 'http';
import * as https from 'https';
import axios from 'axios';
import { load as cheerioLoad } from 'cheerio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const response = await fetch(
		'https://www.tistory.com/apis/post/list?access_token=' +
			TISTORY_ACTK +
			'&output=json&blogName=yamea-guide&page=1'
	);
	const responseBlogInfo = await fetch(
		'https://www.tistory.com/apis/blog/info?access_token=' + TISTORY_ACTK + '&output=json'
	);
	const data = await response.json();
	if (data?.tistory?.status !== 200) {
		return {
			postArr: [],
			blogData: {}
		};
	}
	let postArr = data?.tistory?.item?.posts;

	const blogData = await responseBlogInfo.json();

	const blogInfo = await Promise.all(
		blogData.tistory.item.blogs.map(async (item: any) => {
			let base64Image = '';
			const imageUrl = item.profileImageUrl;
			try {
				base64Image = await convertImageToBase64(imageUrl);
			} catch (error) {
				console.error('Error converting image to base64:', error);
			}
			item.profileImageUrl = base64Image;
			return item;
		})
	);

	// 발행상태인 포스트만 공개 한다.
	postArr = postArr.filter((item: any) => {
		return item.visibility === '20';
	});

	// 발행상태인 포스트의 오픈그래프 이미지 메타태그를 찾는다.
	const postArrWithImages = await Promise.all(
		postArr.map(async (item: any) => {
			const response = await axios.get(item.postUrl);
			const $ = cheerioLoad(response.data);
			// 오픈그래프 이미지 메타 태그를 찾습니다.
			const previewImage = $('meta[property="og:image"]').attr('content');
			return { ...item, image: previewImage };
		})
	);

	postArrWithImages;

	return {
		postArr: postArrWithImages,
		blogData: blogInfo
	};
};

// http 이미지를 받아 base64로 인코딩 한다.
async function convertImageToBase64(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		const client = url.startsWith('https:') ? https : http;

		client
			.get(url, (response) => {
				if (response.statusCode !== 200) {
					reject(new Error(`Failed to load image: ${response.statusCode}`));
					return;
				}
				const chunks: any[] = [];
				response.on('data', (chunk) => {
					chunks.push(chunk);
				});
				response.on('end', () => {
					const buffer = Buffer.concat(chunks);
					resolve(`data:${response.headers['content-type']};base64,${buffer.toString('base64')}`);
				});
			})
			.on('error', reject);
	});
}
