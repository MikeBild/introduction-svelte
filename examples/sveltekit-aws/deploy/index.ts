#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { IntrastructureStack } from './infrastructure.js';
const app = new App();

const { serverHandler, httpApi } = new AWSAdapterStack(app, 'AWSAdapterStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  FQDN: 'demo.mikebild.com',
});

new IntrastructureStack(app, 'IntrastructureStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  serverHandler,
  httpApi,
});
