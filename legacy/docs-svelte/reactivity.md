# Reactivity

- powerful system of UI reactivity 
- keeping the DOM in sync with your application state 
- automatically updates the DOM when your component's state changes
- Svelte's reactivity is **triggered by assignments**, especially for arrays
- use `$` sign to subscribe to changes of a specific or any value
- use `{@html string}` for raw HTML

```svelte
<script>
	let count = 1;
    let numbers = [];
    $: doubled = count * 2;
    $: { 
        console.log('the count is ' + count);
        numbers = [...numbers, numbers.length + 1];
    }
    
	function incrementCount() {
		count += 1;
	}
</script>

<button on:click={incrementCount}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>Count {count} doubled is {doubled}</p>
<p>Numbers: {numbers}</p>
```