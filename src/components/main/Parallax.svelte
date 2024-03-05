<script lang="ts">
	import { onMount } from 'svelte';
	const clickPirates = () => {
		window.open('https://play.google.com/store/apps/details?id=com.instudio.thepirates_corrupt');
	};

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
		window.scroll({ top: 0, behavior: 'smooth' });
		const screenW: number = screen.availWidth;
		const screenH: number = screen.availHeight;
		//throttling을 적용
		const throttledScrollHandler = throttle(scrollHandler, 10);

		// 뷰포트 옵저버
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				// entry 객체를 이용해 요소가 보이는지 여부를 판단하고 필요한 작업을 수행합니다.
				if (entry.isIntersecting) {
					// 요소가 뷰포트 내에서 보이는 경우
					// 필요한 작업을 수행합니다.
					document.addEventListener('scroll', throttledScrollHandler);
				} else {
					// 요소가 뷰포트 내에서 보이지 않는 경우
					// 필요한 작업을 수행합니다.
					document.removeEventListener('scroll', throttledScrollHandler);
				}
			});
		});

		// 인트로 컨텐츠 아이템
		const title: HTMLElement | null = document.getElementById('personalTitle'); // 상단 타이틀
		const pernonalPrjWrapper: HTMLElement | null = document.getElementById('personalPrjContainer'); // 컨테이너
		const sec1El: HTMLElement | null = document.getElementById('sec1');

		// 섹션2 인스튜디오 컨텐츠 아이템
		const sec2El: HTMLElement | null = document.getElementById('sec2');
		const inTitle: HTMLElement | null = document.getElementById('inTitle');
		const monitorContainer: HTMLElement | null = document.getElementById('monitorContainer');
		const inScreenWrapper: HTMLElement | null = document.getElementById('inScreenWrapper');
		const inText1: HTMLElement | null = document.getElementById('inText1');
		const inText2: HTMLElement | null = document.getElementById('inText2');
		const inText3: HTMLElement | null = document.getElementById('inText3');

		//섹션3 해적 컨텐츠 아이템
		const sec3El: HTMLElement | null = document.getElementById('sec3');
		const piratesTitle: HTMLElement | null = document.getElementById('piratesTitle');
		const phoneContainer: HTMLElement | null = document.getElementById('phoneContainer');
		const piratesScreenWrapper: HTMLElement | null =
			document.getElementById('piratesScreenWrapper');
		const piratesImgs: HTMLCollectionOf<HTMLImageElement> =
			piratesScreenWrapper?.children as HTMLCollectionOf<HTMLImageElement>;
		const piratesTextContainer: HTMLElement | null =
			document.getElementById('piratesTextContainer');
		const piratesTxt1: HTMLElement | null = document.getElementById('piratesTxt1');
		const piratesTxt2: HTMLElement | null = document.getElementById('piratesTxt2');
		const piratesTxt3: HTMLElement | null = document.getElementById('piratesTxt3');

		//섹션4 해적 0.5
		const sec4El: HTMLElement | null = document.getElementById('sec4');
		const piratesTitle2: HTMLElement | null = document.getElementById('piratesTitle2');
		const phoneContainer2: HTMLElement | null = document.getElementById('phoneContainer2');
		const piratesMScreenWrapper: HTMLElement | null =
			document.getElementById('piratesMScreenWrapper');
		const piratesMTextContainer: HTMLElement | null =
			document.getElementById('piratesMTextContainer');
		const piratesMImgs: HTMLCollectionOf<HTMLImageElement> =
			piratesMScreenWrapper?.children as HTMLCollectionOf<HTMLImageElement>;
		const piratesMTxt1: HTMLElement | null = document.getElementById('piratesMTxt1');
		const piratesMTxt2: HTMLElement | null = document.getElementById('piratesMTxt2');
		const piratesMTxt3: HTMLElement | null = document.getElementById('piratesMTxt3');

		//엘리먼트 체크
		if (
			title === null ||
			pernonalPrjWrapper === null ||
			sec1El === null ||
			sec2El === null ||
			sec3El === null ||
			sec4El === null
		) {
			return;
		}

		const wrapperTop: number = pernonalPrjWrapper.offsetTop;
		const wrapperBottom: number = pernonalPrjWrapper.offsetHeight + wrapperTop;

		const titleH: number = title.offsetHeight;

		const sec1H: number = sec1El.offsetHeight;
		const sec2H: number = sec2El.offsetHeight;
		const sec3H: number = sec3El.offsetHeight;
		const sec4H: number = sec4El.offsetHeight;

		const sec1Top: number = wrapperTop;
		const sec2Top: number = sec1Top + sec1H;
		const sec3Top: number = sec2Top + sec2H;
		const sec4Top: number = sec3Top + sec3H;
		observer.observe(pernonalPrjWrapper);

		// scroll 이벤트 핸들러
		function scrollHandler(e: Event) {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					let top: number = document.documentElement.scrollTop;
					const windowHeight = window.innerHeight;
					let bottom: number = top + screenH;

					// 섹션1 타이틀
					if (top > sec1Top && top < sec1Top + sec1H) {
						//엘리먼트 체크
						if (title === null || pernonalPrjWrapper === null || sec1El === null) {
							return;
						}
						let secProgress: number = top - sec1Top;
						title.style.position = 'fixed';
						let opacity: number = secProgress / 1000;
						let bottom: string = secProgress / 2 + 'px';
						if (opacity > 1) {
							// 투명도 1이상부터 잠시 위치 고정
							bottom = '50%';
						}
						if (secProgress > 1500) {
							//페이드 아웃
							opacity = 2 - opacity;
							bottom = (secProgress - 1500) / 10 + 50 + '%';
						}
						title.style.opacity = opacity + '';
						title.style.bottom = bottom;
					} else {
						if (title !== null) {
							title.style.opacity = '0';
						}
					}

					// 섹션2 포폴사이트
					if (top > sec2Top && top < sec2Top + sec2H) {
						// 앨리먼트 체크
						if (
							sec2El === null ||
							inTitle === null ||
							monitorContainer === null ||
							inScreenWrapper === null ||
							inText1 === null ||
							inText2 === null ||
							inText3 === null
						) {
							return;
						}

						let secProgress: number = top - sec2Top;
						let opacity: number = secProgress / 1000;
						inTitle.style.top = '10%';
						monitorContainer.style.top = '30%';

						if (secProgress > 1500) {
							let transY: number = ((secProgress - 1500) / 50) * -1;
							let transformY: string = 'translateY(' + transY + '%)';
							inScreenWrapper.style.transform = transformY;
						} else {
							inScreenWrapper.style.transform = 'translateY(0%)';
						}

						if (bottom > sec2Top + sec2H) {
							opacity = 1 - (bottom - sec2Top + sec2H - 10000) / 1000;
						}

						if (secProgress > 1500) {
							inText1.style.opacity = '1';
							inText1.style.bottom = '20%';

							piratesTextHide(inText2);
						}

						if (secProgress > 2500) {
							piratesTextHide(inText1);
							piratesTextHide(inText3);

							inText2.style.opacity = '1';
							inText2.style.bottom = '20%';
						}

						if (secProgress > 3500) {
							piratesTextHide(inText2);

							inText3.style.opacity = '1';
							inText3.style.bottom = '20%';
						}

						monitorContainer.style.opacity = opacity + '';
						inTitle.style.opacity = opacity + '';
					} else {
						// 위치 초기화
						// 앨리먼트 체크
						if (
							inTitle !== null &&
							monitorContainer !== null &&
							inText1 !== null &&
							inText2 !== null &&
							inText3 !== null
						) {
							inTitle.style.top = '-100%';
							monitorContainer.style.top = '-100%';
							monitorContainer.style.opacity = '0';
							inTitle.style.opacity = '0';
							piratesTextHide(inText1);
							piratesTextHide(inText2);
							piratesTextHide(inText3);
						}
					}

					// 섹션3 해적
					if (top > sec3Top && top < sec3Top + sec3H) {
						//엘리먼트 체크
						if (
							sec3El === null ||
							piratesTitle === null ||
							phoneContainer === null ||
							piratesScreenWrapper === null ||
							piratesTextContainer === null ||
							piratesImgs === null ||
							piratesTxt1 === null ||
							piratesTxt2 === null ||
							piratesTxt3 === null
						) {
							return;
						}
						let secProgress: number = top - sec3Top;
						let opacity: number = secProgress / 1000;
						piratesTextContainer.style.display = 'block';
						piratesTitle.style.top = '10%';
						phoneContainer.style.top = '20%';

						if (bottom > sec3Top + sec3H) {
							opacity = (sec3Top + sec3H - top) / screenH / 2;
						}

						if (secProgress > 1500) {
							piratesImgs[0].style.width = '100%';
							piratesImgs[1].style.width = '0%';
							piratesImgs[2].style.width = '0%';
							piratesImgs[3].style.width = '0%';

							piratesTextShow(piratesTxt1);
							piratesTextHide(piratesTxt2);
						}
						if (secProgress > 2500) {
							piratesImgs[0].style.width = '0%';
							piratesImgs[1].style.width = '100%';
							piratesImgs[2].style.width = '0%';
							piratesImgs[3].style.width = '0%';
							piratesTextHide(piratesTxt1);
							piratesTextHide(piratesTxt3);

							piratesTextShow(piratesTxt2);
						}
						if (secProgress > 3500) {
							piratesImgs[0].style.width = '0%';
							piratesImgs[1].style.width = '0%';
							piratesImgs[2].style.width = '100%';
							piratesImgs[3].style.width = '0%';
							piratesTextHide(piratesTxt2);
							piratesTextShow(piratesTxt3);
						}

						if (secProgress > 4500) {
							piratesImgs[0].style.width = '0%';
							piratesImgs[1].style.width = '0%';
							piratesImgs[2].style.width = '0%';
							piratesImgs[3].style.width = '100%';
						}

						piratesTitle.style.opacity = opacity + '';
						phoneContainer.style.opacity = opacity + '';
						piratesTextContainer.style.opacity = opacity + '';
					} else {
						//엘리먼트 체크
						if (
							sec3El === null ||
							piratesTitle === null ||
							phoneContainer === null ||
							piratesScreenWrapper === null ||
							piratesTextContainer === null ||
							piratesImgs === null ||
							piratesTxt1 === null ||
							piratesTxt2 === null ||
							piratesTxt3 === null
						) {
							return;
						}
						piratesTextContainer.style.display = 'none';
						piratesTitle.style.opacity = '0';
						phoneContainer.style.opacity = '0';
						piratesTxt1.style.opacity = '0';
						piratesTxt2.style.opacity = '0';
						piratesTxt3.style.opacity = '0';
						piratesTitle.style.top = '-50%';
						phoneContainer.style.top = '-100%';
					}

					// 섹션4 해적 0.5
					console.log(
						'top',
						top,
						'sec4Top:',
						sec4Top,
						'sec4H:',
						sec4H,
						'windowHeight',
						windowHeight
					);
					if (top > sec4Top && top < sec4Top + sec4H - windowHeight / 2) {
						//엘리먼트 체크
						if (
							sec4El === null ||
							piratesTitle2 === null ||
							phoneContainer2 === null ||
							piratesMScreenWrapper === null ||
							piratesMTextContainer === null ||
							piratesMImgs === null ||
							piratesMTxt1 === null ||
							piratesMTxt2 === null ||
							piratesMTxt3 === null
						) {
							return;
						}
						piratesMTextContainer.style.display = 'block';
						let secProgress: number = top - sec4Top;
						let opacity: number = secProgress / 1000;
						piratesTitle2.style.top = '10%';
						phoneContainer2.style.top = '20%';

						if (bottom > sec4Top + sec4H) {
							opacity = (sec4Top + sec4H - top) / screenH / 2;
						}

						if (secProgress > 1500) {
							piratesMImgs[0].style.width = '100%';
							piratesMImgs[1].style.width = '0%';
							piratesMImgs[2].style.width = '0%';

							piratesTextShow(piratesMTxt1);
							piratesTextHide(piratesMTxt2);
						}
						if (secProgress > 2500) {
							piratesMImgs[0].style.width = '0%';
							piratesMImgs[1].style.width = '100%';
							piratesMImgs[2].style.width = '0%';

							piratesTextHide(piratesMTxt1);
							piratesTextHide(piratesMTxt3);

							piratesTextShow(piratesMTxt2);
						}
						if (secProgress > 3500) {
							piratesMImgs[0].style.width = '0%';
							piratesMImgs[1].style.width = '0%';
							piratesMImgs[2].style.width = '100%';
							piratesTextHide(piratesMTxt2);
							piratesTextShow(piratesMTxt3);
						}
						piratesTitle2.style.opacity = opacity + '';
						phoneContainer2.style.opacity = opacity + '';
						piratesMTextContainer.style.opacity = opacity + '';
					} else {
						//엘리먼트 체크
						if (
							sec4El === null ||
							piratesTitle2 === null ||
							phoneContainer2 === null ||
							piratesMScreenWrapper === null ||
							piratesMTextContainer === null ||
							piratesMImgs === null ||
							piratesMTxt1 === null ||
							piratesMTxt2 === null ||
							piratesMTxt3 === null
						) {
							return;
						}
						piratesMTextContainer.style.display = 'none';
						piratesTitle2.style.opacity = '0';
						phoneContainer2.style.opacity = '0';
						piratesTextHide(piratesMTxt1);
						piratesTextHide(piratesMTxt2);
						piratesTextHide(piratesMTxt3);
						piratesTitle2.style.top = '-50%';
						phoneContainer2.style.top = '-100%';
					}

					ticking = false;
				});

				ticking = true;
			}
		}

		const piratesTextShow = (el: HTMLElement): void => {
			// md: 768
			if (screenW > 768) {
				el.style.position = 'absolute';
				el.style.opacity = '1';
				el.style.bottom = '50%';
			} else {
				el.style.position = 'fixed';
				el.style.opacity = '1';
				el.style.bottom = '10%';
			}
		};

		const piratesTextHide = (el: HTMLElement): void => {
			el.style.opacity = '0';
			el.style.bottom = '-50%';
		};

		function showTitle(el: HTMLElement): void {
			el.style.opacity = '1';
			el.style.top = '20%';
		}
		function hideTitle(el: HTMLElement): void {
			el.style.position = 'absolute';
			el.style.top = titleH + 'px';
			el.style.left = '-50%';
		}
	});
</script>

<!-- 컨테이너 -->
<div id="personalPrjContainer" class="my-20 relative bg-black text-white">
	<!--인트로 타이틀 -->
	<section id="sec1" class="sec1-wrapper flex justify-center items-center">
		<div id="personalTitle" class="poersonal-title opacity-0">
			<h2 class="w-full  top-0 w-full  break-keep text-4xl text-center font-nanumb md:text-5xl">
				Personal Project
			</h2>
			<p class="text-right">Introducing my side project</p>
			<div />
		</div>
	</section>

	<!-- in Studio -->
	<section id="sec2" class="sec2-wrapper flex justify-center items-center ">
		<!--프로젝트 제목-->
		<div id="inTitle" class="fixed opacity-0">
			<a href="/" class="text-2xl font-nanumb font-bold w-120 mx-5 md:mx-10"
				>In <span class="text-red-500">S</span>tudio</a
			>
		</div>
		<!-- 모니터 컨테이너 -->
		<div id="monitorContainer" class="monitor-container opacity-0  fixed ">
			<img src="img/laptopFrame.png" class="monitor-img relative" alt="In Studio Screen shoot4" />
			<div class="in-screen-container absolute flex justify-center items-center overflow-hidden">
				<div id="inScreenWrapper" class="in-screen-wrapper absolute top-0">
					<img src="img/instudio1.PNG" class="relative" alt="In Studio Screen shoot1" />
					<img src="img/instudio2.PNG" class="relative" alt="In Studio Screen shoot2" />
					<img src="img/instudio3.PNG" class="relative" alt="In Studio Screen shoot3" />
					<img src="img/instudio4.PNG" class="relative" alt="In Studio Screen shoot4" />
				</div>
			</div>
		</div>
		<!-- 소개글 -->
		<div class="text-2xl font-nanumb text-center font-bold w-full">
			<div id="inText1" class="in-text fixed w-full flex justify-center items-center opacity-0">
				<p class="w-full md:w-1/2">제작기간 2023-04 ~ 개발중</p>
			</div>
			<div id="inText2" class="in-text fixed w-full flex justify-center items-center opacity-0">
				<p class="w-full md:w-1/2">SvelteKit, TypeScript, Tailwind CSS를 사용 하였습니다.</p>
			</div>
			<div id="inText3" class="in-text fixed w-full flex justify-center items-center opacity-0">
				<p class="w-full md:w-1/2">
					Github actions, docker, EC2, ECR을 활용해 CI/CD를 구성 하였습니다.
				</p>
			</div>
		</div>
	</section>

	<!-- the Pirates -->
	<section id="sec3" class="sec3-wrapper flex justify-center items-center">
		<div class="sea-bg w-full h-screen fixed" />
		<!--프로젝트 제목-->
		<div id="piratesTitle" class="pirates-title fixed opacity-0">
			<h3
				on:click={clickPirates}
				on:keydown={clickPirates}
				class="text-2xl font-nanumb font-bold mx-5 md:mx-10"
			>
				The Pirates
			</h3>
			<!-- <img src="img/pirates_icon.png" class=" w-1/4" alt="the Pirates icon"/> -->
		</div>
		<!-- 모바일 컨테이너 -->
		<div
			id="phoneContainer"
			class="monitor-container flex justify-center items-center w-1/2 md:w-1/6  md:right-1/2 opacity-0  fixed "
		>
			<img
				src="img/phoneFrame.png"
				class="monitor-img w-full relative"
				alt="In Studio Screen shoot4"
			/>
			<div
				class="pirates-screen-container absolute flex justify-center items-center overflow-hidden md:text-left"
			>
				<div id="piratesScreenWrapper" class="pirates-screen-wrapper absolute top-0 w-full">
					<img
						src="img/thePirates1.webp"
						class="prj-screen absolute w-full"
						alt="In Studio Screen shoot1"
					/>
					<img
						src="img/thePirates2.webp"
						class="prj-screen absolute w-0"
						alt="In Studio Screen shoot1"
					/>
					<img
						src="img/thePirates3.webp"
						class="prj-screen absolute w-0"
						alt="In Studio Screen shoot1"
					/>
					<img
						src="img/thePirates4.webp"
						class="prj-screen absolute w-0"
						alt="In Studio Screen shoot1"
					/>
				</div>
			</div>
		</div>

		<!-- 소개글 -->
		<div
			id="piratesTextContainer"
			class="text-2xl fixed font-nanumb font-bold w-full h-full text-center md:w-1/2 top-2/3 md:top-0 md:right-0"
		>
			<div id="piratesTxt1" class="pirates-text">
				<p class="w-full md:w-1/2">Html 온라인 텍스트 RPG 게임 입니다.</p>
			</div>
			<div id="piratesTxt2" class="pirates-text">
				<p class="w-full md:w-1/2">
					채팅, 직업별스킬, 실시간 전투, 펫, 상점, 무기강화, 파티 사냥등이 구현 되어 있습니다.
				</p>
			</div>
			<div id="piratesTxt3" class="pirates-text">
				<p class="w-full md:w-1/2">React, NodeJS, MongoDB 기반으로 만들어져 있습니다.</p>
			</div>
		</div>
	</section>

	<!-- Pirates 0.5 -->
	<section id="sec4" class="sec4-wrapper flex justify-center items-center">
		<!--프로젝트 제목-->
		<div id="piratesTitle2" class="pirates-title fixed opacity-0">
			<h3 class="text-2xl font-nanumb font-bold mx-5 md:mx-10">The Pirates 0.5</h3>
			<!-- <img src="img/pirates_icon.png" class=" w-1/4" alt="the Pirates icon"/> -->
		</div>
		<!-- 모바일 컨테이너 -->
		<div
			id="phoneContainer2"
			class="monitor-container w-full md:w-1/3  md:right-1/2 opacity-0  fixed "
		>
			<img src="img/phoneFrame2.png" class="monitor-img relative" alt="In Studio Screen shoot4" />
			<div
				class="piratesM-screen-container absolute flex justify-center items-center overflow-hidden"
			>
				<div id="piratesMScreenWrapper" class="piratesM-screen-wrapper absolute top-0">
					<img
						src="img/shooting.png"
						class="prj-screen absolute w-full"
						alt="Pirates shooting Game Screen shoot"
					/>
					<img
						src="img/rhythm.png"
						class="prj-screen absolute w-0"
						alt="Pirates rhythm Game Screen shoot"
					/>
					<img
						src="img/textGame.png"
						class="prj-screen absolute w-0"
						alt="Pirates text Game Screen shoot"
					/>
				</div>
			</div>
		</div>

		<!-- 소개글 -->
		<div
			id="piratesMTextContainer"
			class="text-2xl fixed font-nanumb font-bold w-full h-full text-center  md:w-1/2 md:top-0 md:right-0"
		>
			<div id="piratesMTxt1" class="pirates-text">
				<p class="w-full md:w-1/2">The Pirates의 모바일 싱글 버전 입니다.</p>
			</div>
			<div id="piratesMTxt2" class="pirates-text">
				<p class="w-full md:w-1/2">슈팅게임 , 리듬게임, 텍스트게임으로 이루어져 있습니다.</p>
			</div>
			<div id="piratesMTxt3" class="pirates-text">
				<p class="w-full md:w-1/2">
					Java로 만들었으며 3가지 게임이 하나의 캐릭터를 사용하여 경험치가 공유 됩니다.
				</p>
			</div>
		</div>
	</section>
</div>

<style>
	.poersonal-title {
		transition: 0.2s ease;
		will-change: transform, left;
	}
	.monitor-container {
		top: 20%;
	}

	.sec1-wrapper {
		height: 2500px;
	}
	.sec2-wrapper {
		height: 5000px;
	}
	.sec3-wrapper {
		height: 7000px;
	}
	.sec4-wrapper {
		height: 6000px;
	}

	.monitor-img {
		z-index: 2;
	}
	.in-screen-container {
		width: 100%;
		height: 80%;
		top: 7%;
	}
	.in-screen-wrapper {
		width: 66%;
	}
	.in-text {
		transition: 0.4s ease;
		bottom: -50%;
		will-change: transform, bottom;
	}

	.sea-bg {
		/* background-image: url("img/sea.jpg"); */
	}

	.pirates-screen-container {
		width: 94%;
		height: 89%;
		top: 5%;
	}
	.pirates-screen-wrapper {
	}
	.pirates-text {
		position: relative;
		width: 100%;
		padding: 5%;
		word-break: keep-all;
		opacity: 0;
		transition: 0.4s ease;
		will-change: transform, bottom, top, right;
	}

	.piratesM-screen-wrapper {
		width: 100%;
	}
	.piratesM-screen-wrapper > img {
		/* height: 457px; */
	}

	.piratesM-screen-container {
		width: 41%;
		height: 97%;
		top: -16.5%;
		border-radius: 28px;
		transform: translate3d(65.5%, 15.1%, 0px) scale(1.1) rotate(79deg) rotateX(-3deg) rotateY(56deg)
			rotateZ(-31deg);
	}

	.prj-screen {
		transition: 0.4s ease;
		will-change: transform, bottom, top, right, auto;
	}
</style>
