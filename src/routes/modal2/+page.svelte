<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import Modal from '../../components/popup/Modal.svelte';

	let showModal = false;
</script>


<h1> 스벨트 </h1>


<h2> tailwind test </h2>

<button on:click={() => (showModal = true)}>
	show modal
</button>

<Modal bind:showModal>
	

	<ol class="definition-list">

		<li>of or relating to modality in logic</li>
		<li>
			containing provisions as to the mode of procedure or the manner of taking effect —used of a contract or legacy
		</li>
		<li>of or relating to a musical mode</li>
		<li>of or relating to structure as opposed to substance</li>
		<li>of, relating to, or constituting a grammatical form or category characteristically indicating predication</li>
		<li>of or relating to a statistical mode</li>

	</ol>
</Modal>




