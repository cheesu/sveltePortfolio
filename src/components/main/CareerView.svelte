<script lang="ts">

interface careerBox {
    compony: string;
    date: string;
    projectList: project[];
  }

  interface project {
    date: string;
    projectName: string;
    projectStack: string;
    area: string;
  }

//경력 사항
const careerArr:careerBox[] = [
    {
      compony : "회사명1",
      date : "2022.01~2023.04",
      projectList : [{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },]

    },
    {
      compony : "회사명2",
      date : "2022.01~2023.04",
      projectList : [{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },]
    },
    {
      compony : "회사명3",
      date : "2022.01~2023.04",
      projectList : [{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },{
        date: "2022.01 ~ 2022.07",
        projectName: "프로젝트 네임1",
        projectStack: "react,sprign,mssql, 기타 등등등등등",
        area: "보험 api 개발 및 이것저것 하고 저것도 하고 이것도 하고 암튼 쥰내 많이 함"
      },]
    }

  ];

  
</script>

<div class="my-20">
    <h2 class="m-10 break-keep text-4xl text-center font-nanumb md:text-5xl">경력 사항(작업중)</h2>
    <div class="flex items-center justify-center">
        <div class="md:w-2/3 text-center">
            <ul class=" ">
                {#each careerArr as item , index}
                  <li class="w-full md:w-1/2 p-10 text-left  {index%2 == 0? 'md:float-right' : 'md:float-left'}">
                    <div>
                        {item.date}
                        <br>
                        {item.compony}
                        <br>
                        <ul class="">
                          {#each item.projectList as prj}
                            <li>
                                <p>
                                    {prj.projectName}
                                </p>
                                <p>
                                    {prj.date}
                                </p>
                                <p>
                                    {prj.projectStack}
                                </p>
                                <p>
                                    {prj.area}
                                </p>
                            </li>
                          {/each}
                        </ul>
                    </div>
                  </li>
                  <li class="w-full float-right"></li>
                {/each}
              </ul>
        
        
        </div>
    </div>  


    

    

  </div>