<script lang="ts">
  

    import CardList from '$components/card/CardList.svelte';
    import type { PageData } from './$types';
	  export let data: PageData;
    

  console.log(data.postArr);
  console.log(data.blogData.blogs[0]);

  const blogInfo:blogInfo = data.blogData.blogs[0];

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

  interface statistics{
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


  let cards:postItem[];

  cards = data.postArr.map((item:any)=>{
      console.log(item.title);
       let postData : postItem = {
        title : "",
        postUrl: item.postUrl,
        description: item.title,
        imageUrl: item.image,
       }
       return postData;
  });

  </script>

  <h2 class="mt-20 w-full text-center ">블로그 소개</h2>
    
  <div>
    <div class=" w-1/4">
      <img class="object-cover" src={blogInfo.profileImageUrl} alt="Blog profileImage" />
    </div>
    {blogInfo.name}<br>
    {blogInfo.description}<br>
    <span>post : </span>{blogInfo.statistics.post} <br>
    <span>comment : </span>{blogInfo.statistics.comment} <br>
    <span>guestbook : </span>{blogInfo.statistics.guestbook} <br>
    <span>trackback : </span>{blogInfo.statistics.trackback} <br>
  </div>

  <div class="h-screen">
    <h1 class="text-20 p-10">최근 포스팅한 게시물</h1>
    <CardList cards={cards} />
  </div>
  
