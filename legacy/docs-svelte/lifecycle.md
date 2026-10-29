# Lifecycle

- [Lifecycle](#lifecycle)
  - [onMount](#onmount)
  - [onDestroy](#ondestroy)


Side notes: 

- `beforeUpdate` function schedules work to happen immediately before the DOM is updated
- `afterUpdate` is its counterpart, used for running code once the DOM is in sync with your data

## onMount

```svelte
<script>
	import { onMount } from 'svelte';

	let data = [];

	onMount(async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=5`);
		data = await response.json();
	});
</script>
```

## onDestroy

```svelte
<script>
	import { onDestroy } from 'svelte';	
    
    let counter = 0;
    const interval = setInterval(() => counter += 1, 1000);

	onDestroy(() => clearInterval(interval));
</script>

<div>{counter}</div>
```
