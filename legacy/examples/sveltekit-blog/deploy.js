#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { DynamoDBStack } from './dynamodb-stack.js';

const app = new App();

const { serverHandler } = new AWSAdapterStack(app, 'sveltekit-blog', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	FQDN: 'sveltekit-blog.mikebild.com'
});

new DynamoDBStack(app, 'sveltekit-blog-datatable', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: 'us-east-1'
	},
	serverHandler
});
