<script lang="ts">
    export let title:string;
    export let imageUrl:string;
    export let description:string;
    export let postUrl:string;


    function hrefLink() {
	    
      window.open(postUrl)
    }
  </script>
  
  <div class="bg-white hover:cursor-pointer rounded-lg overflow-hidden shadow-md w-1/2" on:click={hrefLink} on:keydown={hrefLink} >
    <img class="w-full h-40 object-cover" src={imageUrl} alt={title} />
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  </div>