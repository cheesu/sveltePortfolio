<script lang="ts">
    import "../app.css";
    import Header from '$components/layout/Header.svelte';


</script>
  
  <div class="min-h-full" >
    <Header/>
    
    <main>
      <div class="mx-auto">
        <!-- Replace with your content -->
        <div>
          <div class="h-auto">
            <slot />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
    
  </div>


  <style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    </style>