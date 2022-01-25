<script lang="ts">
	import { toUpperCase } from './utils';
	export let name = toUpperCase('Mike Bild');
</script>

<div>
	<h1>Hello {name}!</h1>
</div>

<style>
	div {
		border: 1px solid black;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #00ff6a;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		div {
			max-width: none;
		}
	}
</style>
