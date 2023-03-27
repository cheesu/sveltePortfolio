<script lang="ts">
    import "../app.css";
    import Header from '$components/layout/Header.svelte';
    import Footer from '$components/layout/Footer.svelte';


</script>
  
  <div class="min-h-full" >
    <Header/>
    
    <main>
      <div class="mx-auto">
        <!-- Replace with your content -->
          <div class="h-auto">
            <slot />
          </div>
        <!-- /End replace -->
      </div>
    </main>

    <Footer></Footer>
    
  </div>


  <style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    </style>