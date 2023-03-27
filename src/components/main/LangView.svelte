<script lang="ts">
    const path = "icon/"

    const feIconArr:string[] = ["svelte.svg","react.svg","typescript.svg","html5.png" ,"javascript.png","css3.png",
                            "jquery.png", 
                            "oracle.png","mysql.svg","mongo.png","mssql.png", "maria.png",
                            "java.png", "spring.png","springboot.png",
                            "node.png", "tailwind.png", "materialize.png", 

                            "git.svg","github.svg","docker.svg","aws.svg",
                            ];
</script>


<div class="my-20">
    <h2 class="m-10  break-keep text-4xl text-center font-nanumb md:text-5xl"> 프로젝트 스타일별 맞춤화된 개발 능력 </h2>

    <div class="w-full">
      <ul class="grid justify-items-center my-20 grid-cols-2 grid-gap-2 md:grid-cols-6 ">
        {#each feIconArr as item}
          <li class="my-10" style="width: 120px;"><img  class="w-full h-full" src={path+item} alt="test"></li>
        {/each}
      </ul>
    </div>
  </div>