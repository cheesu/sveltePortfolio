<script lang="ts">
    const colorBoxArr:colorBox[] = [
      {
      value : "8 years",
      title : "total career"
      },
      {
      value : "24 Project",
      title : "total Project"
      },
      {
      value : "13",
      title : "Digtal Content"
      }
  
    ];
  
    interface colorBox {
      value: string;
      title: string;
    }
    
    const path = "icon/"
  
    const feIconArr:string[] = ["svelte.svg","react.svg","typescript.svg","html5.png" ,"javascript.png","css3.png",
                                "jquery.png", 
                                "oracle.png","mysql.svg","mongo.png","mssql.png", "maria.png",
                                "java.png", "spring.png","springboot.png",
                                "node.png", "tailwind.png", "materialize.png", 
  
                                "git.svg","github.svg","docker.svg","aws.svg",
                                ];
    
  
  
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
  
  </script>
  

  <div class="w-full">
    <p class="m-10 text-2xl font-nanum font-bold text-black whitespace-pre-wrap break-keep md:text-4xl md:mt-20">
      변화하는 미디어 시대에 가장 최적화된 개발자
    </p>
    <p class="m-10 text-4xl font-nanumb font-bold text-black whitespace-pre-wrap break-keep md:text-6xl">
      Global No.1 <br>Personal Digital Content Studio
    </p>
  </div>

  <div class="w-full grid justify-items-center my-20 grid-cols-1 bg-gradient-to-br from-blue-400 to-yellow-300 via-green-500 md:grid-cols-3">
    {#each colorBoxArr as item}
      <div class="m-10  md:md-20 md:my-40">
        <p class="text-white text-center text-5xl font-nanumb md:text-7xl">{item.value}</p>
        <p class="text-gray-200 text-center text-2xl font-nanum mt-5 md:text-xl">{item.title}</p>
      </div>
    {/each}
  </div>