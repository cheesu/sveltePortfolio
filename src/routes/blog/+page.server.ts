import { CLIENT_ID , SC_KEY, TISTORY_ACTK} from '$env/static/private';
import axios from 'axios';
import { load as cheerioLoad } from 'cheerio';
import type { PageServerLoad } from './$types';

 
export const load: PageServerLoad = async function () {
	//const test:string = CLIENT_ID;
    //const key:string = SC_KEY;
      const response = await fetch('https://www.tistory.com/apis/post/list?access_token='+TISTORY_ACTK+'&output=json&blogName=yamea-guide&page=1');
      const responseBlogInfo = await fetch('https://www.tistory.com/apis/blog/info?access_token='+TISTORY_ACTK+'&output=json');
      let data = await response.json();
      let postArr = data.tistory.item.posts;

      
      let blogData = await responseBlogInfo.json();
      let blogInfo = blogData.tistory.item;

      console.log(blogInfo[0])
      //console.log(Object.keys(blogInfo[0]));

      

      // 발행상태인 포스트만 공개 한다.
      postArr = postArr.filter((item:any)=>{
        return item.visibility === "20"
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
        postArr:postArrWithImages,
        blogData: blogInfo
	};
};

