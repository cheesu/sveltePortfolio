<script lang="ts">
  
  import { onMount } from "svelte";

    interface careerBox {
        prjName?: string;
        date?: string;
        summary?: string;
        projectList?: project[];
    }
    
    interface project {
        date?: string;
        projectName?: string;
        projectStack?: string;
        area?: string;
    }
    
    //개인 플젝
    const careerArr:careerBox[] = [
        {
            prjName : "In Studio",
        },{
            prjName : "The Pirates",
        },{
            prjName : "Spap",
        },{
            prjName : "mobile game",
        }
       
    ];

    onMount(() => {
        
    
    });

    
</script>

<style>
 
</style>

  

    
    
<div class="my-20 bg-black text-white">
    <h2 class="m-10 break-keep text-4xl text-center font-nanumb md:text-5xl">Personal Project</h2>
    <div class="flex items-center justify-center">
        <div class="md:w-2/3 text-center">
            <ul class="">
                {#each careerArr as item , index}
                    <li class="w-full h-screen">
                        <p class="font-nanum">{item.prjName}</p>
                    </li>
                {/each}
            </ul>
        
        
        </div>
    </div>  


</div>