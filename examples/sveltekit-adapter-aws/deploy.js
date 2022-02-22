#!/usr/bin/env node

import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { IntrastructureStack } from './infrastructure.js';

const app = new App();
app.region = 'us-east-1';
app.account = process.env.CDK_DEFAULT_ACCOUNT;

const { serverHandler } = new AWSAdapterStack(app, 'AWSAdapterStack', {
  FQDN: 'demo.mikebild.com',
});

new IntrastructureStack(app, 'IntrastructureStack', {
  serverHandler,
});
