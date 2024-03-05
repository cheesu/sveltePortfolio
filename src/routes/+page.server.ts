import { CLIENT_ID, SC_KEY, TISTORY_ACTK } from '$env/static/private';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	//const test:string = CLIENT_ID;
	//const key:string = SC_KEY;
	const response = await fetch(
		'https://www.tistory.com/apis/post/list?access_token=' +
			TISTORY_ACTK +
			'&output=json&blogName=yamea-guide&page=1'
	);

	let data = await response.json();

	let postArr = data.tistory.item.posts;

	// 발행상태인 포스트만 공개 한다.
	postArr = postArr.filter((item: any) => {
		return item.visibility === '20';
	});

	return {
		postArr: postArr
	};
};
