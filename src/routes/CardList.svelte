<script lang="ts">
    import Card from './Card.svelte';
  
    export let cards:any[] = [];
  </script>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-gap-2">
    {#each cards as { title, imageUrl, description }}
      <Card
        title={title}
        imageUrl={imageUrl}
        description={description}
      />
    {/each}
  </div>