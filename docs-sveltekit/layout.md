# SvelteKit Layouts

- [SvelteKit Layouts](#sveltekit-layouts)
  - [Nested layouts](#nested-layouts)
  - [Reset](#reset)
  - [Error pages](#error-pages)

- layouts are components they should be visible on every page (e.g. navigation or footer)
- file called `src/routes/__layout.svelte` and includes `<slot></slot>`

**`src/routes/__layout.svelte`**
```svelte
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
</nav>

<slot></slot>
```

## Nested layouts

- additional layout per directory
- applies to pages below e.g. `/settings`
- 
**`src/routes/settings/__layout.svelte`**
```svelte
<h1>Settings</h1>

<div class="submenu">
  <a href="/settings/profile">Profile</a>
  <a href="/settings/notifications">Notifications</a>
</div>

<slot></slot>
```

## Reset

- create a `__layout.reset.svelte` to not inherit the root layout
- layout resets are identical to normal layouts

## Error pages

- renders an error page on failure
- customise the page by creating `__error.svelte` in corresponding directory

**``**
```svelte
<script context="module">  
  export function load({ error, status }: ErrorLoad) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  export let title;
</script>

<h1>{title}</h1>
```

