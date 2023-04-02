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
        const throttledScrollHandler = throttle(scrollHandler, 100);
       

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
        
        
        const title: HTMLElement | null = document.getElementById('persnalTitle'); // 상단 타이틀
        const pernonalPrjWrapper: HTMLElement | null = document.getElementById('personalPrjContainer'); // 컨테이너

        const sec1El: HTMLElement | null = document.getElementById('sec1');
        const sec2El: HTMLElement | null = document.getElementById('sec2');
        const sec3El: HTMLElement | null = document.getElementById('sec3');
        const sec4El: HTMLElement | null = document.getElementById('sec4');

        const sec1Title: HTMLElement | null = document.getElementById('sec1Title');
        const sec2Title: HTMLElement | null = document.getElementById('sec2Title');
        const sec3Title: HTMLElement | null = document.getElementById('sec3Title');
        const sec4Title: HTMLElement | null = document.getElementById('sec4Title');

        
        
        const img1: HTMLElement | null = document.getElementById('img1');
        const img2: HTMLElement | null = document.getElementById('img2');

        
        const textBox1: HTMLElement | null = document.getElementById('textBox1');
        const textBox2: HTMLElement | null = document.getElementById('textBox2');

        
        
        
        //엘리먼트 체크
        if(title === null || pernonalPrjWrapper === null || sec1El === null 
            || sec2El === null || sec3El === null|| sec4El === null){
            return;
        }

        //타이틀 엘리먼트 체크
        if(sec1Title === null || sec2Title === null || sec3Title === null 
            || sec4Title === null ){
            return;
        }


        //이미지 앨리먼트 체크
        // if(img1===null){
        //     return;
        // }
        
        const wrapperTop:number = pernonalPrjWrapper.offsetTop;
        const wrapperBottom:number = pernonalPrjWrapper.offsetHeight+wrapperTop;

        const titleH:number = title.offsetHeight;
        const sec1Top:number = wrapperTop + titleH;
        const sec2Top:number = sec1Top + sec1El.offsetHeight;
        const sec3Top:number = sec2Top + sec2El.offsetHeight;
        const sec4Top:number = sec3Top + sec3El.offsetHeight;

        
        

        observer.observe(pernonalPrjWrapper);

        // console.log(sec1El);
        // console.log("sec1Top:"+sec1Top);
        // console.log("sec1El.offsetHeight:"+sec1El.offsetHeight);

        // scroll 이벤트 핸들러
        function scrollHandler(e: Event) {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    
                    let top:number = document.documentElement.scrollTop;
                    let bottom:number = top + screen.availHeight;
                    //console.log("top:"+top+" bottom:"+bottom + "wrapperTop: "+wrapperTop+" wrapperBottom :"+wrapperBottom);
                    // 상단 타이틀
                    if(top > wrapperTop && bottom < wrapperBottom){
                        title.style.position = "fixed";
                        title.style.top = "0%";
                    }
                    if(top < wrapperTop || bottom > wrapperBottom){
                        title.style.position = "relative";
                    }

                    //prj title
                    if(top  > sec1Top){
                        showTitle(sec1Title);
                    }
                    if(top  < sec1Top || top > sec1Top + sec1El.offsetHeight){
                        hideTitle(sec1Title);
                    }

                    if(top  > sec2Top){
                        showTitle(sec2Title);
                    }
                    if(top  < sec2Top || top > sec2Top + sec2El.offsetHeight){
                        hideTitle(sec2Title);
                    }

                    if(top  > sec3Top){
                        showTitle(sec3Title);
                    }
                    if(top  < sec3Top || top > sec3Top + sec3El.offsetHeight){
                        hideTitle(sec3Title);
                    }

                    if(top  > sec4Top){
                        showTitle(sec4Title);
                    }
                    if(top  < sec4Top || top > sec4Top + sec4El.offsetHeight){
                        hideTitle(sec4Title);
                    }


                    // In Studio action
                    if(top  > sec1Top){
                         img1.style.position =  "fixed";
                         img1.style.top = titleH+sec1Title?.offsetHeight+"px";
                         img1.style.right = "25%";

                         textBox1.style.position =  "fixed";
                         textBox1.style.bottom = "10%";
                         textBox1.style.right = "25%";
                         textBox1.style.opacity = "1";
                         

                    }
                    if(top  < sec1Top || top > sec1Top + sec1El.offsetHeight){
                        img1.style.right = "-100%";
                        textBox1.style.bottom = "-100%";
                        textBox1.style.opacity = "0";
                    }

                    if(top  > sec1Top+800){
                        img2.style.position =  "fixed";
                        img2.style.top = titleH+sec1Title?.offsetHeight+"px";
                        img2.style.right = "25%";

                        textBox1.style.bottom = "-100%";
                        textBox1.style.opacity = "0";

                        textBox2.style.position =  "fixed";
                        textBox2.style.bottom = "10%";
                        textBox2.style.right = "25%";
                        textBox2.style.opacity = "1";

                    }
                    if(top  < sec1Top+800 || top > sec1Top + sec1El.offsetHeight){
                        img2.style.right = "-100%";
                        textBox2.style.bottom = "-100%";
                        textBox2.style.opacity = "0";
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
.prj-title {
  position: absolute;
  display: inline-block;
  font-size: 40px;
  transition: 0.5s ease;
  left: -50%;
  will-change: transform, top, left;
}

.init-item{
    position: absolute;
    display: inline-block;
}

.init-left{
  font-size: 40px;
  transition: 0.5s ease;
  left: -50%;
  will-change: transform, top, left;

}

.init-right{
    font-size: 40px;
    transition: 0.2s ease;
    right: -100%;
    will-change: transform, top, right;
}
.init-top{
    font-size: 40px;
    transition: 0.2s ease;
    top: -100%;
    will-change: transform, top;
}
.init-bottom{
    font-size: 40px;
    transition: 0.5s ease;
    bottom: -100%;
    opacity: 0;
    will-change: transform,  bottom;
}



section{
    position: relative;
    width: 100%;
    height: 1200px;
    z-index: 99;
    font-size: 0;
}

.sec-1{
    height: 2200px;
}

/* 

.parallax_txt1{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    font-size: 50px;
    white-space: nowrap;
    transition: 0.22s; 
}
.parallax_txt2, .parallax_txt3, .parallax_txt4, .parallax_txt5{
    position: absolute;
    display: inline-block;
    font-size: 40px;
    transition: 0.5s ease;
}

.parallax_txt2{ top: 35%; left: -70%; }
.parallax_txt3{ top: 35%; right: -70%; }
.parallax_txt4{ top: 35%; left: 65%; 
    opacity: 0; transform: translate(-50%, -50%); }
.parallax_txt5{ top: 100%;
  left: 50%; 
  transform: translate(-50%, 0);
  opacity: 0;
} */
 
</style>
  
<!-- 컨테이너 -->
<div id="personalPrjContainer" class="my-20 relative bg-black  text-white">
    <h2 id = "persnalTitle" class="w-full relative top-0 w-full  break-keep text-4xl text-center font-nanumb md:text-5xl">Personal Project</h2>
    <!-- 내용 -->
    <div id="personalWrapper" class="relative">
        <!-- In Studio-->
        <section id="sec1" class="sec-1">
            <div id="sec1Title" class="prj-title"> 
                <a id="headerLogo" href="/" class="text-2xl font-nanumb font-bold w-120 mx-5 md:mx-10">In <span class="text-red-500">S</span>tudio</a>
            </div>

            <div id="img1" class="init-item init-right w-1/2">
                <img src="img/instudio1.PNG" alt="In Studio Screen shoot1"/>
            </div>
            <div id="img2" class="init-item init-right w-1/2">
                <img src="img/instudio2.PNG" alt="In Studio Screen shoot2"/>
            </div>
          
            <div id="textBox1" class="init-item init-bottom">
                <p> 자기 소개 및 포트폴리오 소개 사이트 </p>
                <p> 현재 개발중인 사이트 입니다. </p>
            </div>

            <div id="textBox2" class="init-item init-bottom">
                <p> Svelte, typescript, Tailwind Css </p>
            </div>

            
        </section>

        <!-- 해적 -->
        <section id="sec2">
            <div id="sec2Title" class="prj-title"> 
                <h2 >The Pirates </h2>
            </div>
            <h2 class="parallax_txt2">열심히!</h2>
        </section>

        <!-- Spap -->
        <section id="sec3">
            <div id="sec3Title" class="prj-title"> 
                <h2>Spap</h2>
            </div>
            <h2 class="parallax_txt2">열심히!</h2>
        </section>

        <!-- 안드로이드 게임 -->
        <section id="sec4">
            <div id="sec4Title" class="prj-title"> 
                <h2>android </h2>
            </div>
            <h2 class="parallax_txt2">열심히!</h2>
        </section>
    </div>
</div>