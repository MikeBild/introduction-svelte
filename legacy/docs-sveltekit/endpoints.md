# SvelteKit API Endpoints

- [SvelteKit API Endpoints](#sveltekit-api-endpoints)
  - [Page endpoints](#page-endpoints)
  - [Standalone endpoints](#standalone-endpoints)
  - [Setting cookies](#setting-cookies)
  - [Body parsing](#body-parsing)

- `.js` (or `.ts`) files that export request handler functions corresponding to HTTP methods
  - `export async function get({ params }) {...}`
  - `export async function post({ params }) {...}`
  - `export async function put({ params }) {...}`
  - `export async function patch({ params }) {...}`
  - `export async function del({ params }) {...}`
- route can have multiple dynamic parameters e.g.
  - `src/routes/[category]/[item].svelte`
  - `src/routes/[category]-[item].svelte`
- if the number of route segments is unknown, you can use rest syntax e.g.
  - `/[org]/[repo]/tree/[branch]/[...file]`

**`src/routes/items/[id].js`**
```typescript
export async function get({ params, fetch }: RequestHandler) {
    try {
        const response = await fetch(`https://api.example.com/articles/${params.id}`);
        const item = await response.json();

        return {
            status: 200,
            body: { item }
        };
    } catch(error) {
        return { status: 500 };
    }
};
```


## Page endpoints

- endpoint has the same filename as a page 
- page gets its props from the endpoint
  - via fetch during client-side navigation
  - or via direct function call during SSR

**`src/routes/items/[id].svelte`**
```svelte
<script>
  // populated with data from the endpoint above
  export let item;
</script>

<h1>{item.title}</h1>
```

## Standalone endpoints

-  can exists separately from pages
-  more flexibility over the returned `body` type 

## Setting cookies

- set cookies by returning a headers object with set-cookie

```typescript
export function get() {
  return {
    headers: {
      'set-cookie': [`cookie1`, `cookie2`]
    }
  };
}
```

## Body parsing

- by accessing the request body

```typescript
export async function post({ request }: RequestHandler) {
  const data = await request.formData(); // or .json(), or .text(), etc
 
  await create(data);
  return { status: 201 };
}

```