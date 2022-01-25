# Svelte Custom Elements

- Very easy to use
- Seamless integration into existing websites including DOM access, jQuery, etc.
- DOM attributes and events

**MyCustomElement.svelte**
```svelte
<svelte:options tag="my-custom-html-element" />
```

**rollup.config.js**
```js
{
  plugins: [
    svelte({      
      compilerOptions: {
        customElement: true,
      }
    })
  ]
}
```