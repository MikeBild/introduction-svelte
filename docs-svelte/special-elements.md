# Special Elements

- [Special Elements](#special-elements)
  - [Component](#component)
  - [Head](#head)
  - [Body](#body)
  - [Window](#window)
  - [Window Binding](#window-binding)

## Component

- dynamically bind a variable as component

```svelte
<script>
  import ComponentA from './ComponentA.svelte';
  import ComponentB from './ComponentB.svelte';

  let selected = ComponentA;  
</script>

<svelte:component this={selected}/>
```

## Head

- add something to HTML head

```svelte
<svelte:head>
	<link rel="stylesheet" href="/tutorial/dark-theme.css">
</svelte:head>
```

## Body

- add event listeners to any DOM element in the `body`
 
```svelte
<script>
	let hereKitty = false;

	const handleMouseenter = () => hereKitty = true;
	const handleMouseleave = () => hereKitty = false;
</script>

<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
```

## Window

- add event listeners to any DOM element
- add event listeners to the `window`

```svelte
<script>
	let key;
	
    const handleKeydown = (event) => key = event.key;
</script>

<svelte:window on:keydown={handleKeydown}/>
```

## Window Binding

- bind to certain properties of `window` object
- list of properties you can bind 
  - `innerWidth`
  - `innerHeight`
  - `outerWidth`
  - `outerHeight`
  - `scrollX`
  - `scrollY`
  - `online — an alias for window.navigator.onLine`

```svelte
<svelte:window bind:scrollY={y}/>
```