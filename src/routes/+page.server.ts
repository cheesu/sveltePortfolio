import { CLIENT_ID } from '$env/static/private';

import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = async function () {
	const test:string = CLIENT_ID;
	return {
		test: test
	};
};

