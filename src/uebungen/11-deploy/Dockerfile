# Container image for the workshop shop: build with all packages, runtime with production packages only
FROM node:26-slim AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:26-slim
WORKDIR /app
ENV NODE_ENV=production PORT=3000
COPY package.json package-lock.json .npmrc ./
RUN npm ci --omit=dev
COPY --from=build /app/build ./build
COPY server.ts ./
COPY src/uebungen/11-deploy/loesung/app.ts ./src/uebungen/11-deploy/loesung/app.ts
USER node
EXPOSE 3000
CMD ["node", "server.ts"]
