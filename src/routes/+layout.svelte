<script lang="ts">
    import "../app.css";
    import Header from '$components/layout/Header2.svelte';


</script>
  
  <div class="min-h-full" >
    <Header/>
    
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="h-auto p-10 rounded-lg border-4 border-dashed border-black">
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