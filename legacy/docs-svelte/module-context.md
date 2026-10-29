# Module Context

- code contained inside it will run once, when the module first evaluates, rather than when a component is instantiated
- components to 'talk' to each other without any state management
- use `export` to export functionality into others via `import`
- You can't have a default export, because **the component is the default export**

**component.svelte**
```html
<script context="module">
	export let current;
</script>

<script>
    function stopOthers() {
        if (current && current !== audio) current.pause();
        current = audio;
    }
</script>
```

