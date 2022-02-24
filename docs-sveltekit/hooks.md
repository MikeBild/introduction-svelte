# Hooks

- [Hooks](#hooks)
  - [handle](#handle)
  - [handleError](#handleerror)
  - [getSession](#getsession)
  - [externalFetch](#externalfetch)

- optional `src/hooks.js` (or `.ts`) file 
- exports four optional functions, that run on the server 
  - `handle`
  - `handleError`
  - `getSession`
  - `externalFetch`

## handle

- to modify response headers or bodies
- runs every time SvelteKit receives a request
- receives an `event` object representing the request
- receives and a `resolve` function using by SvelteKit's router
- static assets are **not** handled

**`src/hooks.js`**
```javascript
export async function handle({ event, resolve }) {
  if (event.request.url.startsWith('/my-route')) {
    return new Response('my custom response');
  }
 
  const response = await resolve(event);  
  response.headers.set('x-custom-header', 'demo');

  return response;
}
```
## handleError

- called if an error is thrown during rendering
- to send data to an error tracking service

**`src/hooks.js`**
```javascript
export async function handleError({ error, event }) {  
  tracker.captureException(error, { event });
}
```

## getSession

- takes the event object and returns a session
- object is accessible on the client
- session must be **serializable**

**`src/hooks.js`**
```javascript
export function getSession(event) {
  return event.locals.user
    ? {
        user: {
          email: event.locals.user.email,
        }
      }
    : {};
}
```

## externalFetch

- to modify a **fetch** request for an external resource

**`src/hooks.js`**
```javascript
export async function externalFetch(request) {
  if (request.url.startsWith('https://api.yourapp.com/')) {    
    request = new Request(
      request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
      request
    );
  }
 
  return fetch(request);
}
```