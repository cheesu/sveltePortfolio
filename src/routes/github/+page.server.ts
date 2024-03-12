import * as http from 'http';
import * as https from 'https';
import axios from 'axios';
import { load as cheerioLoad } from 'cheerio';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const responseUserInfo = await fetch('https://api.github.com/users/cheesu');
	const responseRepoInfo = await fetch('https://api.github.com/users/cheesu/repos');
	const userInfo = await responseUserInfo.json();
	const repoInfo = await responseRepoInfo.json();

	return {
		githubInfo: userInfo,
		gitrepoList: repoInfo
	};
};
