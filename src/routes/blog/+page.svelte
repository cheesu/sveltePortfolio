<script lang="ts">
    import CardList from '$components/card/CardList.svelte';
    import type { PageData } from './$types';
	  export let data: PageData;
    $: ({ postArr} = data);

  console.log(data.postArr);

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
        imageUrl: 'https://picsum.photos/id/1/300/200',
       }
       return postData;
  });

  </script>


  <div class="h-screen">
    <h1 class="text-20 p-10">최근 포스팅한 게시물</h1>
    <CardList cards={cards} />
  </div>
  
