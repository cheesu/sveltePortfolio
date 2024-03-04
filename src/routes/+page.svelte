<script lang="ts">
	import { writable } from 'svelte/store';
	import MainView from '$components/main/MainView.svelte';
	import ColorBox from '$components/main/ColorBox.svelte';
	import LangView from '$components/main/LangView.svelte';
	import PersonalPrj from '$components/main/PersonalPrj.svelte';
	import Parallax from '$components/main/Parallax.svelte';
	import CareerView from '$components/main/CareerView.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		var color = {
			brown: 'color:#CC0000;font-size:11px;',
			red: 'color:#d83128;font-size:11px;',
			yellow: 'color:#ea991b;font-size:11px;',
			green: 'color:#93ba2f;font-size:11px;',
			blue: 'color:#4da4e0;font-size:11px;'
		};

		function isUA(userAgent: any): any {
			return navigator.userAgent.toLowerCase().indexOf(userAgent) > -1;
		}

		if (typeof console === 'object' && console.log && typeof console.log === 'function') {
			if (isUA('chrome') && !isUA('edge')) {
				console.log(
					'%c      ██╗███╗   ██╗    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ \
            \n%c%c      ██║████╗  ██║    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗\
            \n%c      ██║██╔██╗ ██║    ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║\
            \n%c      ██║██║╚██╗██║    ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║\
            \n%c      ██║██║ ╚████║    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝\
            \n%c      ╚═╝╚═╝  ╚═══╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ \
            \n      %c%c   %cWell Come, My Site %cIN %cS%ct%cu%cd%ci%co.\n',
					color.brown,
					color.brown,
					color.red,
					color.yellow,
					color.green,
					color.blue,
					color.brown,
					color.red,
					color.yellow,
					color.green,
					color.blue,
					color.brown,
					color.red,
					color.yellow,
					color.green,
					color.blue,
					color.brown
				);
			} else {
				console.log(
					'%c   ____                                    \
            \n%c  /$$$$$$                  /$$$$$$   /$$                     /$$ /$$          \
            \n%c |_  $$_/                 /$$__  $$ | $$                    | $$|__/          \
            \n%c   | $$   /$$$$$$$       | $$  __//$$$$$$   /$$   /$$  /$$$$$$$ /$$  /$$$$$$ \
            \n%c   | $$  | $$__  $$      |  $$$$$$|_  $$_/  | $$  | $$ /$$__  $$| $$ /$$__  $$\
            \n%c   | $$  | $$   $$       ____  $$ | $$    | $$  | $$| $$  | $$| $$| $$   $$\
            \n%c   | $$  | $$  | $$       /$$   $$ | $$ /$$| $$  | $$| $$  | $$| $$| $$  | $$\
            \n%c  /$$$$$$| $$  | $$      |  $$$$$$/ |  $$$$/|  $$$$$$/|  $$$$$$$| $$|  $$$$$$/\
            \n%c |______/|__/  |__/       ______/   ___/   ______/  _______/|__/ ______/ \
            \n      %cLife is too short, you need cou%cp%ca%cn%cg.\
            \n      %cTEST 2024 u%cp%ca%cn%cg.\n'
				);
			}
			console.log('\x3e \x3e \x3e https://cheesu.com\n');
		}
	});
</script>

<div>
	<MainView />
	<ColorBox />
	<LangView />
	<Parallax />
	<CareerView />
</div>
