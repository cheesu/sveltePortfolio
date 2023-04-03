<script lang="ts">
    import { onMount } from "svelte";
    const clickPirates = ()=>{
        window.open("https://play.google.com/store/apps/details?id=com.instudio.thepirates_corrupt");
    }

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

    // 스크롤링 이벤트가 계속 일어나는것을 막기 위해 쓰로틀을 걸어준다
    function throttle<T extends (...args: any[]) => any>(func: T, delay: number): T {
        let timer: number | null = null;
        return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
            if (!timer) {
            timer = window.setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, delay) as unknown as number;
            }
        } as T;
    }

    let ticking = false; // requestAnimationFrame을 위한 플래그 변수

    onMount(() => {
        window.scroll({top : 0, behavior: 'smooth'});

        //throttling을 적용
        const throttledScrollHandler = throttle(scrollHandler, 10);
       

        // 뷰포트 옵저버
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // entry 객체를 이용해 요소가 보이는지 여부를 판단하고 필요한 작업을 수행합니다.
                if (entry.isIntersecting) {
                // 요소가 뷰포트 내에서 보이는 경우
                // 필요한 작업을 수행합니다.
                console.log("보인다");
                document.addEventListener('scroll', throttledScrollHandler);
                } else {
                // 요소가 뷰포트 내에서 보이지 않는 경우
                // 필요한 작업을 수행합니다.
                console.log("안보인다");
                document.removeEventListener('scroll', throttledScrollHandler);
               
                }
            });
        });
        
        
        const title: HTMLElement | null = document.getElementById('personalTitle'); // 상단 타이틀
        const pernonalPrjWrapper: HTMLElement | null = document.getElementById('personalPrjContainer'); // 컨테이너

        const sec1El: HTMLElement | null = document.getElementById('sec1');
        const sec2El: HTMLElement | null = document.getElementById('sec2');
        const sec3El: HTMLElement | null = document.getElementById('sec3');
        const sec4El: HTMLElement | null = document.getElementById('sec4');

        const inTitle: HTMLElement | null = document.getElementById('inTitle');
        const piratesTitle: HTMLElement | null = document.getElementById('piratesTitle');
        const sec3Title: HTMLElement | null = document.getElementById('sec3Title');
        const sec4Title: HTMLElement | null = document.getElementById('sec4Title');


        // 섹션2 인스튜디오 컨텐츠 아이템
        const monitorContainer: HTMLElement | null = document.getElementById('monitorContainer');
        const inScreenWrapper: HTMLElement | null = document.getElementById('inScreenWrapper');
        const inText1: HTMLElement | null = document.getElementById('inText1');
        const inText2: HTMLElement | null = document.getElementById('inText2');
        const inText3: HTMLElement | null = document.getElementById('inText3');
        
        //섹션3 해적 컨텐츠 아이템
        const phoneContainer: HTMLElement | null = document.getElementById('phoneContainer');
        const piratesScreenWrapper: HTMLElement | null = document.getElementById('piratesScreenWrapper');
        
        
        
        
        const img1: HTMLElement | null = document.getElementById('img1');
        const img2: HTMLElement | null = document.getElementById('img2');

        
        const textBox1: HTMLElement | null = document.getElementById('textBox1');
        const textBox2: HTMLElement | null = document.getElementById('textBox2');

        const piratesImg1: HTMLElement | null = document.getElementById('piratesImg1');
        const piratesImg2: HTMLElement | null = document.getElementById('piratesImg2');
        const piratesImg3: HTMLElement | null = document.getElementById('piratesImg3');
        const piratesImg4: HTMLElement | null = document.getElementById('piratesImg4');


        //엘리먼트 체크
        if(title === null || pernonalPrjWrapper === null || sec1El === null 
            || sec2El === null || sec3El === null|| sec4El === null){
            return;
        }

        const wrapperTop:number = pernonalPrjWrapper.offsetTop;
        const wrapperBottom:number = pernonalPrjWrapper.offsetHeight+wrapperTop;

        const titleH:number = title.offsetHeight;

        const sec1H:number = sec1El.offsetHeight;
        const sec2H:number = sec2El.offsetHeight;
        const sec3H:number = sec3El.offsetHeight;
        const sec4H:number = sec4El.offsetHeight;

        const sec1Top:number = wrapperTop;
        const sec2Top:number = sec1Top + sec1H;
        const sec3Top:number = sec2Top + sec2H;
        const sec4Top:number = sec3Top + sec3H;

        
        

        observer.observe(pernonalPrjWrapper);

        // console.log(sec1El);
        // console.log("sec1Top:"+sec1Top);
        // console.log("sec1El.offsetHeight:"+sec1El.offsetHeight);

        // scroll 이벤트 핸들러
        function scrollHandler(e: Event) {
            if (!ticking) {
                // //엘리먼트 체크
                // if(title === null || pernonalPrjWrapper === null || sec1El === null 
                //     || sec2El === null || sec3El === null|| sec4El === null){
                //     return;
                // }

                // //타이틀 엘리먼트 체크
                // if(sec1Title === null || sec2Title === null || sec3Title === null 
                //     || sec4Title === null ){
                //     return;
                // }

                // // 인 스튜디오 컨텐츠 엘리먼트 체크 
                // if(img1 === null || img2 === null || textBox1 === null 
                //     || textBox2 === null ){
                //     return;
                // }

                // // the pirates 엘리먼트 체크 
                // if(piratesImg1 === null || piratesImg2 === null || piratesImg3 === null 
                //     || piratesImg4 === null ){
                //     return;
                // }

                window.requestAnimationFrame(() => {
                    let top:number = document.documentElement.scrollTop;
                    let bottom:number = top + screen.availHeight;

                    // 섹션1 타이틀
                    if(top > sec1Top && top < sec1Top+sec1El.offsetHeight){
                        let secProgress:number = top - sec1Top;
                        title.style.position = "fixed";
                        let opacity:number = secProgress/1000;
                        let bottom:string = (secProgress/2)+"px";
                        if(opacity > 1){
                            // 투명도 1이상부터 잠시 위치 고정
                            bottom = "50%";
                        }
                        if(secProgress > 1500){
                            //페이드 아웃
                            opacity = 2-opacity;
                            bottom = ((secProgress-1500)/10)+50+"%";
                        }
                        title.style.opacity = opacity;
                        title.style.bottom = bottom;
                    }else{
                        title.style.opacity = "0";
                    }


                    // 섹션2 포폴사이트
                    if(top > sec2Top && top < sec2Top+sec2El.offsetHeight){
                        let secProgress:number = top - sec2Top;
                        let opacity:number = secProgress/1000;
                        inTitle.style.top = "10%";
                        monitorContainer.style.top = "20%";

                        if(secProgress > 1500){
                            let transY:number = (secProgress-1500)/50*-1;
                            let transformY : string = "translateY("+transY+"%)";
                            inScreenWrapper.style.transform = transformY;
                        }else{
                            inScreenWrapper.style.transform ="translateY(0%)";
                        }

                        if(bottom > sec2Top+sec2El.offsetHeight){
                            opacity = 1 - (bottom -sec2Top+sec2El.offsetHeight-10000)/1000;
                        }

                        if(secProgress > 1500){
                            inText1.style.opacity = 1;
                            inText1.style.bottom = "10%";

                            inText2.style.opacity = 0;
                            inText2.style.bottom = "-50%";
                        }

                        if(secProgress > 2500 ){
                            inText1.style.opacity = 0;
                            inText1.style.bottom = "-50%";
                            inText3.style.opacity = 0;
                            inText3.style.bottom = "-50%";

                            inText2.style.opacity = 1;
                            inText2.style.bottom = "10%";
                        }

                        if(secProgress > 3500 ){
                            inText2.style.opacity = 0;
                            inText2.style.bottom = "-50%";

                            inText3.style.opacity = 1;
                            inText3.style.bottom = "10%";
                        }

                        monitorContainer.style.opacity = opacity;
                        inTitle.style.opacity = opacity;
                    }else{
                        // 위치 초기화
                        inTitle.style.top = "-100%";
                        monitorContainer.style.top = "-100%";

                        monitorContainer.style.opacity = 0;
                        inTitle.style.opacity = 0;

                        inText1.style.opacity = 0;
                        inText1.style.bottom = "-50%";
                        inText2.style.opacity = 0;
                        inText2.style.bottom = "-50%";
                        inText3.style.opacity = 0;
                        inText3.style.bottom = "-50%";
                    }

                    // 섹션3 해적
                    if(top > sec3Top && top < sec3Top+sec3El.offsetHeight){
                        let secProgress:number = top - sec3Top;
                        let opacity:number = secProgress/1000;
                        piratesTitle.style.top = "10%";
                        phoneContainer.style.top = "20%";

                        if(secProgress > 1500){
                            let transY:number = (secProgress-1500)/50*-1;
                            let transformY : string = "translateY("+transY+"%)";
                            piratesScreenWrapper.style.transform = transformY;
                        }else{
                            piratesScreenWrapper.style.transform ="translateY(0%)";
                        }

                        if(bottom > sec3Top+sec3El.offsetHeight){
                            opacity = 1 - (bottom -sec3Top+sec3El.offsetHeight-1000)/1000;
                        }
                        
                        
                        piratesTitle.style.opacity = opacity;
                        phoneContainer.style.opacity  = opacity;

                    }else{
                        piratesTitle.style.opacity = 0;
                        phoneContainer.style.opacity  = 0;
                        piratesTitle.style.top = "-50%";
                        phoneContainer.style.top = "-100%";
                    }

                    
                    



                ticking = false;
                });

                ticking = true;
            }
        }


        function showTitle(el:HTMLElement):void{
                el.style.position =  "fixed";
                el.style.top = titleH+"px";
                el.style.left = "20%";
        }
        function hideTitle(el:HTMLElement):void{
            el.style.position =  "absolute";
            el.style.top = titleH+"px";
            el.style.left = "-50%";
        }
    
    });

    
</script>

<style>
    .poersonal-title{
        transition: 0.2s ease;
        will-change: transform, left;
    }
    .monitor-container{
        top:20%;
    }

    .sec1-wrapper{
        height : 2500px;
    }
    .sec2-wrapper{
        height : 5000px;
    }
    .sec3-wrapper{
        height : 8000px;
    }
    .sec4-wrapper{
        height : 2000px;
    }

    .monitor-img{
        z-index: 2;
    }
    .in-screen-container{
        width: 100%;
        height: 80%;
        top : 7%;
    }
    .in-screen-wrapper{
        width: 66%;
    }
    .in-text {
        transition: 0.4s ease;
        bottom : -50%;
        will-change: transform, bottom;
    }

    .sea-bg{
        /* background-image: url("img/sea.jpg"); */
    }

    .pirates-screen-container{
        width: 100%;
        height: 89%;
        top : 5%;
    }
    .pirates-screen-wrapper{
        width: 45%;
    }

</style>

<!-- 컨테이너 -->
<div id="personalPrjContainer" class="my-20 relative bg-black text-white">
    <section id="sec1" class="sec1-wrapper flex justify-center items-center">
        <div id = "personalTitle" class="poersonal-title opacity-0">
            <h2  class="w-full  top-0 w-full  break-keep text-4xl text-center font-nanumb md:text-5xl">Personal Project</h2>
            <p class="text-right">Introducing my side project</p>
        <div>
    </section>

    <section id="sec2" class="sec2-wrapper flex justify-center items-center ">
        <!--프로젝트 제목-->
        <div id="inTitle" class="fixed opacity-0">
            <a  href="/" class="text-2xl font-nanumb font-bold w-120 mx-5 md:mx-10">In <span class="text-red-500">S</span>tudio</a>
        </div>
        <!-- 모니터 컨테이너 -->
        <div id = "monitorContainer" class="monitor-container opacity-0  fixed ">
            <img src="img/laptopFrame.png" class="monitor-img relative" alt="In Studio Screen shoot4"/>
            <div class="in-screen-container absolute flex justify-center items-center overflow-hidden">
                <div id="inScreenWrapper" class="in-screen-wrapper absolute top-0">
                    <img src="img/instudio1.PNG" class="relative" alt="In Studio Screen shoot1"/>
                    <img src="img/instudio2.PNG" class="relative" alt="In Studio Screen shoot2"/>
                    <img src="img/instudio3.PNG" class="relative" alt="In Studio Screen shoot3"/>
                    <img src="img/instudio4.PNG" class="relative" alt="In Studio Screen shoot4"/>
                </div>
            </div>
        </div>
            <!-- 소개글 -->
            <div class="text-2xl font-nanumb font-bold w-full mx-5 md:mx-10">
                <div id="inText1" class="in-text fixed w-full flex justify-center items-center opacity-0">
                    <p class="w-full md:w-1/2">현재 개발중인 자기 소개 및 포트폴리오 소개 사이트 입니다.</p>
                </div>
                <div id="inText2" class="in-text fixed w-full flex justify-center items-center opacity-0">
                    <p class="w-full md:w-1/2">SvelteKit, TypeScript, Tailwind CSS를 사용 하였습니다.</p>
                </div>
                <div id="inText3" class="in-text fixed w-full flex justify-center items-center opacity-0">
                    <p class="w-full md:w-1/2">Github actions, docker, EC2, ECR을 활용해 CI/CD를 구성 하였습니다.</p>
                </div>
            </div>

            
    </section>

    <section id="sec3" class="sec3-wrapper flex justify-center items-center">
        <div class="sea-bg w-full h-screen fixed">

        </div>
        <!--프로젝트 제목-->
        <div id="piratesTitle" class="pirates-title fixed opacity-0">
            <h3 class="text-2xl font-nanumb font-bold mx-5 md:mx-10">The Pirates</h3>
            <!-- <img src="img/pirates_icon.png" class=" w-1/4" alt="the Pirates icon"/> -->
        </div>
        <!-- 모바일 컨테이너 -->
        <div id = "phoneContainer" class="monitor-container w-1/3  opacity-0  fixed ">
            <img src="img/phoneFrame.png" class="monitor-img relative" alt="In Studio Screen shoot4"/>
            <div class="pirates-screen-container absolute flex justify-center items-center overflow-hidden">
                <div id="piratesScreenWrapper" class="pirates-screen-wrapper absolute top-0">
                    <img src="img/thePirates1.webp" class="relative" alt="In Studio Screen shoot1"/>
                    <img src="img/thePirates2.webp" class="relative" alt="In Studio Screen shoot1"/>
                    <img src="img/thePirates3.webp" class="relative" alt="In Studio Screen shoot1"/>
                    <img src="img/thePirates4.webp" class="relative" alt="In Studio Screen shoot1"/>
                </div>
            </div>
        </div>
        

    </section>

    <section id="sec4" class="sec4-wrapper flex justify-center items-center bg-red-900">
        
    </section>
</div>