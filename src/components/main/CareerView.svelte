<script lang="ts">
  

interface careerBox {
    compony: string;
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

//경력 사항
const careerArr:careerBox[] = [
    {
      compony : "산타데이",
      date : "2022.01~2023.04",
      summary : "외부 협력사 API 연동을 통한 컨텐츠 구현 및 블록체인 네트워크 DID, SSI 연구 분석",
      projectList : [{
        date: "2022.02 ~ 2022.03",
        projectName: "블록체인 네트워크를 사용한 DID SSI 연구분석",
        projectStack: "JAVA, GETH, Solidity, Web3j",
        area: "이더리움 네트워크상의 탈중앙 ID 자기주권신원 증명 프로젝트 연구분석및 구현"
      },{
        date: "2022.11 ~ 2023.02",
        projectName: "현대 모비스 Ionic Care +",
        projectStack: "JAVA Spring Boot, React, MariaDB",
        area: "Ionic Care + 어플리케이션 관리자 페이지 구현"
      },{
        date: "2022.07 ~ 2023.02",
        projectName: "현대 모비스 Ionic Care +",
        projectStack: "JAVA Spring Boot, MariaDB",
        area: "Ionic Care + 어플리케이션  싱가포르 현지 보험사 API 연동"
      },{
        date: "2022.01 ~ 2022.06",
        projectName: "마이현대  E-Pit 2.0 고도화 (현대 모비스 어플리케이션)",
        projectStack: "JAVA Spring Boot, Oracle, JavaScript",
        area: "전기차 충전소 조회, 대기표 발급 및 충전 모니터링 구현"
      },]

    },
    {
      compony : "삼원씨앤지",
      date : "2018.01~2021.06",
      summary : "모니터링 시스템 및 EMS, FMS 데이터 시각화 ",
      projectList : [{
        date: "2022.01 ~ 2021.04",
        projectName: "FMS(시설물 관리 시스템)",
        projectStack: "JAVA Spring, Java Script Jqurey, Ms-sql",
        area: "시설물 관리 시스템 데이터 시각화 (차트, 그리드), 관리자 페이지"
      },{
        date: "2019.09 ~ 2021.01",
        projectName: "에너지 관리 시스템",
        projectStack: "JAVA Spring, Java Script Jqurey, Ms-sql",
        area: "에너지 관리 공단 인증 요구사항 변경에 따른 에너지 관리 시스템 수정"
      },{
        date: "2019.04 ~ 2019.08",
        projectName: "EMS GS 인증",
        projectStack: "JAVA Spring, Java Script Jqurey, Ms-sql",
        area: "EMS(에너지 관리 시스템) TTA GS인증을 위한 시스템 보안 및 UX 고도화"
      },{
        date: "2018.01 ~ 2018.12",
        projectName: "GSM BEMS",
        projectStack: "JAVA Spring, Java Script Jqurey, Ms-sql",
        area: "GSM BEMS(빌딩 에너지 관리 시스템) 설계 및 전자정부 기반 프로젝트 빌드, 에너지 관리 데이터 시각화(차트, 그리드)"
      },]
    },
    {
      compony : "POIS",
      date : "2017.03~2017.10",
      summary : "안드로이드 카메라 여권인식, POS 기기 무선통신, 전문통신 API 어플리케이션",
      projectList : [{
        date: "2017.09 ~ 2017.10",
        projectName: "MTRS",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle",
        area: "MTRS(모바일 환급 서비스 관리자 웹관리 시스템) 환급조회, 관리자 등급별 서비스 분할 ,전문통신"
      },{
        date: "2017.08 ~ 2017.10",
        projectName: "MTRS",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle, android",
        area: "MTRS(모바일 환급 서비스)  웹뷰를 활용한 모바일 환급 시스템 안드로이드 어플 제작, 모바일 환급서비스 구현, 여권인식 모듈 연동, "
          +"superTap 모듈 연동,, 디바이스DB 연동 소켓통신을 이용한 전문 통신, 여권리딩 기능 구현(모바일 카메라 "
          +"텍스트 인식), QR코드 리딩 , pos기기 무선 통신"
      },{
        date: "2017.07 ~ 2017.08",
        projectName: "PEMS MOBILE",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle, android, fireBase",
        area: "PEMS MOBILE(모바일 편의점 에너지 관리 시스템) 에너지 관리 시스템 모바일 서비스 연동 및 push알림 서비스 구현"
      },{
        date: "2017.05 ~ 2017.08",
        projectName: "PEMS",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle, android, fireBase",
        area: "PEMS(편의점 에너지 관리 시스템)웹개발 환경 구축,  메인대쉬보드 및 조회화면, 사용자,메뉴관리등 웹 전반 구현 및 서비스, SQL 구현,"
      },{
        date: "2017.04 ~ 2017.05",
        projectName: "인터넷 번호 관리 시스템 고도화",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle",
        area: "kendo ui를 적용한 grid구현 및 엑셀다운로드 , 업무편의 UI 구현"
      },
    
    ]
    },
    {
      compony : "주인정보 시스템",
      date : "2014.12~2017.2",
      summary : "실시간 모니터링시스템 및 에너지 소비 데이터 시각화 , 사용자 UI/UX",
      projectList : [{
        date: "2016.11 ~ 2017.02",
        projectName: "현대 파워텍 EMS",
        projectStack: "JAVA Spring, Java Script Jqurey, Oracle",
        area: "모니터링 대쉬보드, 위그윅기반 위젯 개인화 구현및 에너지 소비 데이터 시각화"
      },{
        date: "2016.06 ~ 2016.11",
        projectName: "EasyBems 2.0",
        projectStack: "JAVA Spring, Java Script Jqurey, MS-SQL,",
        area: "레이아웃 UI 구현, 웹개발 환경 구축, 웹개발 인원관리, 메인대쉬보드 및 조회화면, 사용자,메뉴관리등 웹 전반 구현 및 서 비스, SQL 구현, 웹서비스 개별 모듈화(Platform, EMS, FMS, Layout,common 서버 컨텍스트 분리) 속도 개선 SQL 튜닝"
      },{
        date: "2016.01 ~ 2016.05",
        projectName: "금호 아시아나 BEMS",
        projectStack: "JAVA Spring, Java Script Jqurey, MS-SQL",
        area: "레이아웃 UI구현, 사내 표준 개발 지침 작성, 웹개발 환경 구축, 웹개발 인원관리, 메인대쉬보드 및 조회화면, "
          +"사용자,메뉴관리, webcam CCTV 연동, CAD Viewer 연동, 위그윅 기반 위젯 개인화 등 웹 전반 구현 및 "
          +"서비스, SQL 구현 "
      },{
        date: "2015.09 ~ 2016.01",
        projectName: "Easy FMS 2.0",
        projectStack: "JAVA Spring, Java Script Jqurey, MS-SQL",
        area: "레이아웃 UI구현, 사내 표준 개발 지침 작성, 웹개발 환경 구축, 웹개발 인원관리, 메인대쉬보드 및 조회화면, "
          +"사용자,메뉴관리, webcam CCTV 연동, CAD Viewer 연동, 위그윅 기반 위젯 개인화 등 웹 전반 구현 및 "
          +"서비스, SQL 구현 "
      },{
        date: "2015.05 ~ 2015.09",
        projectName: "유진그룹 이토텍 (MBMS) 배터리 모니터링 시스템",
        projectStack: "JAVA Spring, Java Script Jqurey, MS-SQL, ",
        area: "레이아웃 UI구현, 사내 표준 개발 지침 작성, 웹개발 환경 구축, 웹개발 인원관리, 메인대쉬보드 및 조회화면, "
          +"사용자,메뉴관리, webcam CCTV 연동, CAD Viewer 연동, 위그윅 기반 위젯 개인화 등 웹 전반 구현 및 "
          +"서비스, SQL 구현 "
      },{
        date: "2014.12 ~ 2015.03",
        projectName: "현대위아 에너지 온실가스 시스템 구축 2차",
        projectStack: "JAVA Spring, Action Script, FLEX, Oracle",
        area: "대쉬보드 화면, 에너지 조회화면 구현 및 서비스 구현"
      },
    
    ]
    }

  ];


    //경력 상세 토글
    function clickMore(e:any):void{
      const button = e.target as HTMLButtonElement;
      const content = button.parentElement?.nextElementSibling as HTMLElement | null;
      if (content) {
        if (content.classList.contains('h-0')) {
          content.style.height = content.scrollHeight + 'px';
          content.style.transitionDuration = "0.5s";
          content.classList.remove('h-0');
        } else {
          content.style.height = '0';
          content.style.transitionDuration = "0.5s";
          content.classList.add('h-0');
        }
      }
    }
 
  
</script>


<div class="my-20">
    <h2 class="m-10 break-keep text-4xl text-center font-nanumb md:text-5xl">경력 사항(작업중)</h2>
    <div class="flex items-center justify-center">
        <div class="md:w-2/3 text-center">
            <ul class=" ">
                {#each careerArr as item , index}
                  <li class="w-full md:w-1/2 p-10  text-left  {index%2 == 0? 'md:float-right' : 'md:float-left'}">
                    <div>
                        <div class="font-nanumb {index%2 == 0? 'md:float-left' : 'md:float-right md:text-right'}">
                          <h4>{item.compony}</h4>
                          <p class="font-nanum">{item.date}</p>
                          <p>{item.summary}</p>
                          <button class="shadow bg-blue-200 hover:bg-blue-500 transition duration-500 ease-in-out text-white font-bold py-1 px-2 rounded" on:click={clickMore}>More Info</button>
                        </div>
                        <div class="detail-box w-full overflow-hidden h-0 transition-height">
                          <ul class="{index%2 == 0? 'md:text-left' : 'md:text-right'}">
                            {#each item.projectList as prj}
                              <li class="mt-10">
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

                    </div>
                  </li>
                  <li class="w-full float-right"></li>
                {/each}
              </ul>
        
        
        </div>
    </div>  


    

    

  </div>