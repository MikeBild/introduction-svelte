#!/usr/bin/env node

import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { IntrastructureStack } from './infrastructure.js';

const app = new App();

const { serverHandler } = new AWSAdapterStack(app, 'AWSAdapterStack', {
  FQDN: 'demo.mikebild.com',
});

new IntrastructureStack(app, 'IntrastructureStack', {
  serverHandler,
});
