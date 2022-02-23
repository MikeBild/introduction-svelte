# Bindings

- data flow in Svelte is top down
- parent component can set props on a child component
- a component can set attributes on an element
- 
## Input

```svelte
<script>
	let name = 'world!';
    let yes = false;
    let w = 200;
	let h = 200;
</script>

<input bind:value={name}>
<input type=checkbox bind:checked={yes}>
<div bind:clientWidth={w} bind:clientHeight={h}>
    <h1>Hello {name}!</h1>
</div>

```