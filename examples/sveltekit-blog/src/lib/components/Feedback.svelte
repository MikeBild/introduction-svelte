<script>
	export let count = 0;
	export let onFeedback = () => {};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</svelte:head>

<button on:click={onFeedback}>
	<div class="material-icons">thumb_up</div>
	<div class="icon-caption">{count}</div>
</button>
