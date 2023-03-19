<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const firstMsgArr:string[] = ["web","deveoper"];
  

  onMount(() => {
    const firstUlEl: HTMLElement | null = document.getElementById('firstUl');
    const seViewEl: HTMLElement | null = document.getElementById('seView');
    const typingPEl: HTMLElement | null = document.getElementById('typingP');

    
    let msgCnt:number = 0;
    let firstMsgArrCnt:number =firstMsgArr.length;

    msgSet();
    const myTimer = setInterval(function():void {
      msgSet();
    }, 150);

    function msgSet():void{
      const newLi : HTMLElement = document.createElement("li"); // 새로운 li 요소 생성
      newLi.textContent = firstMsgArr[msgCnt]; // li 요소 내용 추가
      if(firstUlEl){
        firstUlEl.appendChild(newLi); // ul 요소에 새로운 li 요소 추가
      }
      msgCnt++;
      if(firstMsgArrCnt === msgCnt){
        clearInterval(myTimer);

        setTimeout(() => {
          resetView();
        }, 500);
       
      }
    }

    // 2페이즈 오픈
    function resetView():void{
      if(seViewEl){
        seViewEl.style.right = "0px";
        seViewEl.style.transitionDuration = "1s";
        seViewEl.style.transform = `translateX(-0px)`;

        setTimeout(() => {
          stratTyping();
        }, 500);
      }
    }


    function stratTyping():void{
      console.log("타이핑 시작");

      // 글자 모음 - 개행문자(\n)로 줄바꿈
      const letters:string[] = [
        "The \n CREATIVE!",
        "DEVEOPER \n IN CHEESU"
      ];

      // 글자 입력 속도
      const speed:number = 50;
      let i:number = 0;
      // 줄바꿈을 위한 <br> 치환
      const changeLineBreak = (letter:string[]) => {
        return letter.map(text => text === "\n" ? "<br>" : text);
      }

      // 타이핑 효과
      const typing = async () => {  
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));
        while (letter.length) {
          await wait(speed);
          if(typingPEl){
            typingPEl.innerHTML += letter.shift(); 
          }
        }
        
        // 잠시 대기
        await wait(800);
        // 지우는 효과
        remove();
      }

      // 글자 지우는 효과
      const remove = async() => {
        // 기존코드에서 개행치환코드 추가
        const letter = changeLineBreak(letters[i].split(""));
        
        while (letter.length) {
          await wait(speed);
          letter.pop();
          if(typingPEl){
            typingPEl.innerHTML = letter.join(""); 
          }
        }
        
        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i+1] ? 0 : i + 1;
        typing();
      }

      // 딜레이 기능 ( 마이크로초 )
      function wait(ms:number) {
        return new Promise(res => setTimeout(res, ms))
      }
      // 초기 실행
      setTimeout(typing, 1500);
    }
    
    

  });

  


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


    .first-animate {
    animation-name: blankani; 
    animation-duration: 0.1s;
    animation-iteration-count: 12;
    animation-delay: 0s;
    }
    @keyframes blankani {
        from {background-color:#FFFFFF;}
        to {background-color:#000000;}
    }

  </style>

  <div >

    <div id="mainView" class="h-screen w-full">
      <div class="h-full w-full bg-dark flex first-animate">
        <ul id="firstUl" class="m-auto text-6xl font-nanumb font-bold text-white md:text-9xl" >
          <li>I'm</li>
        </ul>


        <div id="seView" class="absolute right-full h-full w-full bg-dark flex">
          <p id="typingP" class="m-auto text-6xl font-nanumb font-bold  bg-gradient-to-r from-red-400 to-white via-blue-500 text-transparent bg-clip-text animate-gradient-x  md:text-9xl"></p>
        </div>
      </div>


    </div>
    

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

      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>

      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>

      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>
      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>
      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>
      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>
      <div class="mt-10 md:mt-0">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src="https://t1.daumcdn.net/brunch/service/user/8tUw/image/k5FnN2MO6Oo6IpAthlDotbzNg3c.jpg"> 
      </div>


  
      
    </div>

    
    



  </div>
  
