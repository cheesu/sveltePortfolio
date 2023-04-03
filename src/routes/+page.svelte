<script lang="ts">
  import { writable } from "svelte/store";
  import MainView from '$components/main/MainView.svelte';
  import ColorBox from '$components/main/ColorBox.svelte';
  import LangView from '$components/main/LangView.svelte';
  import PersonalPrj from '$components/main/PersonalPrj.svelte';
  import Parallax from '$components/main/parallax.svelte';
  import CareerView from '$components/main/CareerView.svelte';
</script>

  <div>
    <MainView></MainView>
    <ColorBox></ColorBox>
    <LangView></LangView>
    <Parallax></Parallax>
    <CareerView></CareerView>
  </div>
  
