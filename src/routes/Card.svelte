<script lang="ts">
    export let title:string;
    export let imageUrl:string;
    export let description:string;
  </script>
  
  <div class="bg-white rounded-lg overflow-hidden shadow-md w-1/2">
    <img class="w-full h-40 object-cover" src={imageUrl} alt={title} />
    <div class="p-4">
      <h3 class="text-lg font-medium mb-2">{title}</h3>
      <p class="text-gray-600">{description}</p>
    </div>
  </div>