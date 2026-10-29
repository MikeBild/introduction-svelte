# Events

- [Events](#events)
  - [DOM Events](#dom-events)
  - [Component Events](#component-events)

## DOM Events

- listen to any event on an element with the `on:` directive
- a handler with a `once` modifier will only run a single time
  - `preventDefault` — calls `event.preventDefault()` before running the handler
  - `stopPropagation` — calls `event.stopPropagation()`, preventing the event reaching the next element  
  - `once` — remove the handler after the first time it runs
- you can chain modifiers together, e.g. `on:click|once|preventDefault={...}`

```svelte
<script>
	let m = { x: 0, y: 0 };

	function handleClick() {
		alert('no more alerts')
	}

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:click|once={handleClick} on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<style>
	div { width: 100px; height: 100px; border: 1px solid black; }
</style>
```
## Component Events

- your custom components can also dispatch events, use `createEventDispatcher` for it
- unlike DOM events, component events don't bubble
- intermediate components must forward the event of custom components

```svelte
<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>
```