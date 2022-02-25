#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { DynamoDBStack } from './dynamodb-stack.js';

const app = new App();

const { serverHandler } = new AWSAdapterStack(app, 'dos2021-blog-mike', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	FQDN: 'dos2021-blog-mike.mikebild.com'
});

new DynamoDBStack(app, 'dos2021-blog-mike-dynamodb', {
    env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	serverHandler
});
