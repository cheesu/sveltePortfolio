<script lang="ts">

import { onMount } from "svelte";

onMount(() => {
    const mainEl: HTMLElement | null = document.getElementById('mainView');
    const wrapperEl: HTMLElement | null = document.getElementById('parallaxWrapper');
    console.log(wrapperEl);
    //메인뷰 높이 감지
    let mainViewH:number = 0;
    if (mainEl) {
        mainViewH = mainEl.offsetHeight / 2;
        console.log("메인 높이"+mainViewH);
    }

    let wrapperH:number = 0;
    let wrapperW:number = 0;
    if (wrapperEl) {
        wrapperH = wrapperEl.offsetHeight;
        wrapperW = wrapperEl.offsetWidth;
        console.log("래퍼 높이"+wrapperH);
    }

    

    const p_ex1_wrapper = document.querySelector(".parallax_ex");
    const p_ex1 = document.querySelector(".parallax_txt1");
    const p_ex2 = document.querySelector(".parallax_txt2");
    const p_ex3 = document.querySelector(".parallax_txt3");
    const p_ex4 = document.querySelector(".parallax_txt4");
    const p_ex5 = document.querySelector(".parallax_txt5");
    let timer:any;

    window.scroll({top : 0, behavior: 'smooth'});


    document.addEventListener('scroll', (e) =>{
                timer = null;
                let top = document.documentElement.scrollTop;
                let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
                let clientHeight = document.documentElement.clientHeight || window.innerHeight;
                
                //console.log(top)
                if(window.scrollY < mainViewH){
                    p_ex1.style.fontSize = '50px';
                    p_ex1_wrapper.style.opacity = '0';
                    
                }
                if(window.scrollY > mainViewH){
                    p_ex1.style.fontSize = '70px';
                    p_ex1_wrapper.style.opacity = '1';
                }
                if(window.scrollY > mainViewH+130){
                    p_ex1.style.fontSize = '90px';
                }
                if(window.scrollY > mainViewH+250){
                    p_ex1.style.fontSize = '110px';
                }
                if(window.scrollY > mainViewH+390){
                    p_ex1.style.fontSize = '130px';
                    p_ex1.style.transform = 'translate(-50%, -50%) rotate(0deg)';
                    p_ex1.style.top = '50%';
                    p_ex1.style.left = '50%';
                }

                
                if(window.scrollY < mainViewH+600){
                    p_ex2.style.left = '-100%';
                }
                if(window.scrollY > mainViewH+600){
                    p_ex2.style.left = '10%';
                }
                if(window.scrollY > mainViewH+500){
                    p_ex1.style.transition = '0.2s ease';
                    p_ex1.style.fontSize = '80px';
                    p_ex1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
                    p_ex1.style.top = '60%';
                    p_ex1.style.left = '50%';
                }
                if(window.scrollY < mainViewH+1400){
                    p_ex3.style.right = '-70%';
                }
                if(window.scrollY > mainViewH+1200){
                    p_ex3.style.right = '10%';
                }
                if(window.scrollY > mainViewH+1300){
                    p_ex1.style.transition = '0.7s ease';
                    p_ex1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
                    p_ex1.style.left = '5%';
                }
                if(window.scrollY < mainViewH+2100){
                    p_ex4.style.opacity = '0';
                    p_ex4.style.left = '65%';
                }
                if(window.scrollY > mainViewH+2100){
                    p_ex4.style.opacity = '1';
                    p_ex4.style.left = '50%';
                }
                if(window.scrollY > mainViewH+2600){
                    p_ex5.style.opacity = '1';
                    p_ex5.style.top = '50%';
                    
                }
                if(window.scrollY < mainViewH+2600){
                    p_ex5.style.opacity = '0';
                    p_ex5.style.top = '100%';
                }

                if(window.scrollY +clientHeight > mainViewH+wrapperH){
                   // p_ex1_wrapper.style.position = 'relative';
                   // p_ex1_wrapper.style.opacity = '0';
                }
                if(window.scrollY +scrollHeight < mainViewH+wrapperH){
                   // p_ex1_wrapper.style.position = 'relative';
                   // p_ex1_wrapper.style.opacity = '1';
                }
                

    });
        
});




</script>


<style>
    @charset "utf8";

*{  box-sizing: border-box; margin: 0 auto; }

.wrap{
    position: relative;
    max-width: 1440px;
    background-color: #fff;
    padding-top: 100vh;
}


.parallax_ex{
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    z-index: 1;
    transition: 0.22s; 
}

.parallax_txt1{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    font-size: 50px;
    white-space: nowrap;
    transition: 0.22s; 
}

.main{
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #F0D9E7;
    z-index: 5;
}

section{
    position: relative;
    width: 100%;
    height: 700px;
    z-index: 99;
    font-size: 0;
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
}
</style>
<div id="parallaxWrapper" class="overflow-hidden">
    <div class="parallax_ex">
        <h1 class="parallax_txt1 ">아직 끝나지 않았다</h1>
    </div>
    
    <div class="wrap">
        <main class="main">
            <section class="sec1">
                <h2 class="parallax_txt2">열심히!</h2>
            </section>
            <section class="sec2">
                <h2 class="parallax_txt3">최선을 다 해서</h2>
            </section>
            <section class="sec3">
                <h2 class="parallax_txt4">사이트를 제작중에 있습니다.</h2>
            </section>
            <section class="sec4">
                <h2 class="parallax_txt5">조만간 완성이 됩니다.</h2>
            </section>
        </main>
    </div>
</div>
