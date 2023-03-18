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
// /<h1 class="h-1/2 text-4xl font-nanumb font-bold  bg-gradient md:text-7xl w-full block ">

  </script>

  <style>
    @keyframes gradient-x {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 100%;
      }
    }

    .animate-gradient-x {
      background-size: 300% 300%;
      animation: gradient-x 5s ease-in-out infinite;
    }

  </style>

  <div >
    

    <div class="grid justify-items-center grid-cols-1  md:grid-cols-2">
      <div>
        <h1 class="text-6xl font-bold bg-gradient-to-r from-red-400 to-white via-blue-500 text-transparent bg-clip-text animate-gradient-x">
          I<span class="text-red-500">'</span>m
        <br>
        web developer<span class="text-red-500">.</span>
        </h1>
        <div class="mt-10 h-1/2 flex items-center justify-center ">
          <p class="font-nanum text-l w-full pr-10">
            안녕하세요 개발자 인치수 입니다. JavaScript, HTML, CSS를 주력으로 사용하여 웹사이트를 개발합니다. 협업을 중요하게 생각하며, 함께 일하는 동료와의 소통을 잘합니다.
            <br>
            <br>
              이 사이트는 svelteKit, tailwind Css, gitAction, docker, ec2 를 활용하여 제작되었습니다.
          </p>
         
        </div>
      </div>
      
      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>

  
      
    </div>

    
    



  </div>
  
