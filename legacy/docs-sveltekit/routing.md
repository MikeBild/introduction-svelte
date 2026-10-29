# SvelteKit Routing

- filesystem-based router `src/routes`
- two types of route — `pages` and `endpoints`
  - pages typically generate HTML, CSS and JavaScript
  - by default, pages are rendered on both the client and server, but it's configurable
- endpoints run only on the server (if prerendering, at build-time)
  - for databases or APIs access that require private credentials
  - endpoints return JSON by default (other formats are possible)
  - pages can request data from endpoints

