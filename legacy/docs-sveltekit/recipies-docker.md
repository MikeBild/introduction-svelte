# SvelteKit Docker Hosting

**Dockerfile**
```Dockerfile
FROM mhart/alpine-node:16 as builder

COPY svelte-components ./svelte-components
COPY sveltekit-ssr ./sveltekit-ssr
WORKDIR /sveltekit-ssr
RUN yarn
RUN yarn build

###
# ~> Saves space!
###
FROM mhart/alpine-node:slim-16
COPY --from=builder /sveltekit-ssr/build /sveltekit-ssr/node_modules /sveltekit-ssr/package.json ./app
EXPOSE 3000
CMD ["node", "./app/index.js"]
```

**Build**
```sh
docker run -p 8080:3000 --platform linux/amd64 sveltekit-ssr
```

**Run**
```sh
docker build -t sveltekit-ssr .
```