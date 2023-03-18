<script lang="ts">
    import Card from '$components/card/Card.svelte';
  
    export let cards:any[] = [];
  </script>
  
  <div class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-gap-2">
    {#each cards as { title, imageUrl, description, postUrl }}
      <Card
        title={title}
        imageUrl={imageUrl}
        description={description}
        postUrl={postUrl}
      />
    {/each}
  </div>