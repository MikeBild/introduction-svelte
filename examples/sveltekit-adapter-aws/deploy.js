#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { IntrastructureStack } from './infrastructure.js';

const app = new App();

const { serverHandler } = new AWSAdapterStack(app, 'AWSAdapterStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  FQDN: 'demo.mikebild.com',
});

new IntrastructureStack(app, 'IntrastructureStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  serverHandler,
});
