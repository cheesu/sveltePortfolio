<script lang="ts">
  

    interface careerBox {
        prjName: string;
        date: string;
        summary: string;
        projectList: project[];
    }
    
    interface project {
        date: string;
        projectName: string;
        projectStack: string;
        area: string;
    }
    
    //개인 플젝
    const careerArr:careerBox[] = [

       
    ];
    
</script>
    
    
<div class="my-20">
    <h2 class="m-10 break-keep text-4xl text-center font-nanumb md:text-5xl">Personal Project</h2>
    <div class="flex items-center justify-center">
        <div class="md:w-2/3 text-center">
            <ul class=" ">
                {#each careerArr as item , index}
                    <li class="w-full float-right"></li>
                {/each}

                    <li>
                        In Studio
                    </li>
                    <li>
                        해적
                    </li>
                    <li>
                        쇼핑몰
                    </li>
                    <li>
                        안드로이드겜
                    </li>
            </ul>
        
        
        </div>
    </div>  


</div>