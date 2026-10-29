# Props

- use `export` keyword to define a compoent property
- specify default values for props
- 'spread' them onto a component instead of specifying each one
- supports shorthand attributes like `{src}` instead of `src={src}`

**App.svelte**
```svelte
<script>
	import Component from './Component.svelte';
	
	const data = {
		text: 'ipsum larum ...'
	}
</script>

<Component text={'Hello World!'} {...data} />
```

**Component.svelte**
```svelte
<script>
    export let title = 'no title defined';
    export let text = 'no text defined';
</script>

<h1>{title}</h1>
<p>{text}</p>
```