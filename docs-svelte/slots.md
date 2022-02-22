# Slots

- [Slots](#slots)
  - [Fallback content](#fallback-content)
  - [Named slots](#named-slots)
  - [Slot props](#slot-props)

## Fallback content

**App.svelte**
```svelte
<script>
	import Box from './Box.svelte';
</script>

<Box>
	<h1>Hello Svelte!</h1>	
</Box>

<Box/>
```

**Box.svelte**
```svelte
<div>
	<slot>
		<em>fallback - no content was provided</em>
	</slot>
</div>
```

## Named slots

**App.svelte**
```svelte
<script>
	import Box from './Box.svelte';
</script>

<Box>
	<h1 slot="title">Hello Svelte!</h1>	
    <p slot="content">Nicely!</p>	
</Box>
```

**Box.svelte**
```svelte
<div>
	<slot name="title">
		<span>missing title</span>
	</slot>
    <slot name="content">
		<span>missing content</span>
	</slot>
</div>
```

## Slot props

**App.svelte**
```svelte
<script>
	import Box from './Box.svelte';
</script>

<Box let:hovering={active}>
    <div class:active>
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Box>

<style>
	div {
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>
```

**Box.svelte**
```svelte
<script>
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
    <slot hovering={hovering}></slot>
</div>
```