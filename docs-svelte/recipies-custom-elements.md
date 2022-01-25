# Svelte Custom Elements

# Custom Elements using Svelte

- Very easy to use
- Use Svelte to build a vanilla Javascript bundle
- Supports DOM attributes and events
- Seamless integration into existing websites including DOM access, jQuery, etc.
- Generates a JavaScript and CSS bundle file `bundle.js` and Source-Map file `bundle.js.map`
- Use [Polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) to support older Browsers
- Possibility to deploy to a global CDN e.g. [CDNJS](https://cdnjs.com/) or [UNPKG](https://unpkg.com/)


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