###
# ~> Use builder image ...
###
FROM mhart/alpine-node:14 as builder

COPY svelte-components ./svelte-components
COPY sveltekit-ssr ./sveltekit-ssr
WORKDIR /sveltekit-ssr
RUN yarn
RUN yarn build

###
# ~> ... to save space!
###
FROM mhart/alpine-node:slim-14
COPY --from=builder /sveltekit-ssr/build /sveltekit-ssr/node_modules /sveltekit-ssr/package.json ./app
EXPOSE 3000
CMD ["node", "./app/index.js"]