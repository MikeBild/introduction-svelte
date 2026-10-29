# Logic 

- [Logic](#logic)
  - [if, else if, else](#if-else-if-else)
  - [each](#each)
  - [await](#await)

## if, else if, else

- `#if`,`/if`, `:else if`, `:else`

```svelte
<script>
    let isLoggedIn = true;
</script>

{#if isLoggedIn}
	<button>Log out</button>
{:else}
    <button>Log in</button>
{/if}
```

## each

```svelte
<script>
let items = [{id: 'A', name: 'Bob'}, {id: 'B', name: 'Joe'}]
</script>

<ul>
{#each items as { id, name }, i}
    <li>{i}: {id} / {name}</li>
{/each}
</ul>
```

## await

```svelte
<script>
	async function getRandomNumber() {
		return await new Promise((resolve, reject) => {
			const number = Math.floor(Math.random() * 100)
			number > 50 ? resolve(number) : reject(new Error('Number less than 50'))
		});
	}
	
	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
```