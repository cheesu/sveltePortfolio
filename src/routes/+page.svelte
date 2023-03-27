<script lang="ts">
  import { writable } from "svelte/store";
  import MainView from '$components/main/MainView.svelte';
  import ColorBox from '$components/main/ColorBox.svelte';
  import LangView from '$components/main/LangView.svelte';
  import PersonalPrj from '$components/main/PersonalPrj.svelte';
  import CareerView from '$components/main/CareerView.svelte';
  import Parallax from '$components/main/Parallax.svelte';
	

</script>

  

  <div>
    <MainView></MainView>
    <Parallax></Parallax>

    <ColorBox></ColorBox>
    <LangView></LangView>
    <PersonalPrj></PersonalPrj>
    <CareerView></CareerView>


  </div>
  
