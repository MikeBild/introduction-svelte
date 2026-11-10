*English · [Deutsch](README.de.md)*

# Exercise 11 – Build and deployment

**Workshop:** lessons “Which adapter takes the shop to production?” and “Three ways to run SvelteKit on AWS” · **Difficulty:** ★★★☆☆

`npm run build` uses `@sveltejs/adapter-node` to produce a Node server in `build/`. You start it directly with `node build`. If you need your own routes in front of it, such as a health check, you plug the SvelteKit handler into Express 5.

## Files

- `start/app.ts` – this is where you work: `createApp(handler)` builds the Express app
- `server.ts` in the root directory – starts the real build with `createApp` from `loesung/`
- `Dockerfile` – a container image for running the app
- `Dockerfile.lambda` – the same image as an AWS Lambda function, with the AWS Lambda Web Adapter

## Tasks

1. Turn off the `X-Powered-By` header.
2. Answer `GET /healthz` with `{ "ok": true }`.
3. Pass all other requests on to the SvelteKit handler.

## Check

```bash
npm run test:start -- 11
```

Then with the real build:

```bash
npm run build
npm run start:express        # http://localhost:3000 and /healthz
```

## Origin behind a proxy

For Form Actions, SvelteKit checks whether the request comes from the same origin. Without further settings, `adapter-node` assumes `https` and the `Host` header. If the app runs behind a load balancer, you set `PROTOCOL_HEADER=x-forwarded-proto` and `HOST_HEADER=x-forwarded-host`. If you already know the address at build time, you enter it in SvelteKit 3 as `paths.origin` in the Vite plugin. The `ORIGIN` environment variable from SvelteKit 2 no longer exists.

That is why SvelteKit rejects Form Actions with 403 locally over `http://localhost`. You try out the order form locally with `npm run dev` or `npm run preview`.

## Container

```bash
docker build -f src/uebungen/11-deploy/Dockerfile -t werkstatt-shop .
docker run -p 3000:3000 werkstatt-shop
```

## On AWS Lambda

`Dockerfile.lambda` builds on the `werkstatt-shop` image and adds the [AWS Lambda Web Adapter](https://github.com/awslabs/aws-lambda-web-adapter) as an extension. It starts the Node server in the Lambda function and translates every Lambda event into an HTTP request. `/healthz` serves as the readiness check.

```bash
docker build -f src/uebungen/11-deploy/Dockerfile.lambda -t werkstatt-shop-lambda src/uebungen/11-deploy
```

You push the image to Amazon ECR and create a Lambda function from it, for example with AWS CDK. The workshop [“AWS serverless with Lambda, CDK, and DynamoDB”](https://workshops.mikebild.dev/w/aws-serverless/remote/) shows how.

## Think about it

- What do you gain with Express in front of the handler, and what does it cost you compared to `node build`?
- Which environment variables does the app need in production, and where do you set them?
- What is the difference if you use `adapter-static` instead of `adapter-node`?
