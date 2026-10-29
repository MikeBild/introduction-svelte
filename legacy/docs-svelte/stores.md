# Stores

- manage state outside of your application's component hierarchy
- a store is simply an object with a subscribe method 
- notified whenever the store value changes
- don't forget to **unsubscribe** `onDestroy`
- use the `$` prefix to auto-subscribe/unsubscribe to stores
- use `writable` and `readable` stores from `svelte/store`
- `writable` stores can bind easily by `<input bind:value={$example}>`
- use `derived` stores to "calculate" store values based on changes of existing stores
- use [Custom Stores](#custom-stores) to provide domain-specific logic

**stores.js**
```svelte
import { writable } from 'svelte/store';

export const count = writable(0);
```

**Increment.selte**
```svelte
<script>
	import { count } from './stores.js';

	function increment() {
		count.update(n => n + 1);
	}
</script>

<button on:click={increment}>+</button>
```

**App.selte**
```svelte
<script>
    import { onDestroy } from 'svelte';
	import { count } from './stores.js';
    import Increment from './Increment.svelte';

	let countValue;

	const unsubscribe = count.subscribe(value => { countValue = value; });
    
    // Cleanup subscription
    onDestroy(unsubscribe);
</script>

<h1>The count is {countValue}</h1>
<h1>The count is {$count}</h1>

<Increment/>
```

## Custom Stores

**stores.js**
```svelte
import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();
```

**App.selte**
```svelte
<script>
	import { count } from './stores.js';
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
```