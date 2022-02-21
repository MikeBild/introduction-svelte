import { Stack } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType, StreamViewType } from '@aws-cdk/aws-dynamodb';

// import * as lambda from '@aws-cdk/aws-lambda'
// import * as gw from '@aws-cdk/aws-apigatewayv2'
// import * as s3 from '@aws-cdk/aws-s3'
// import * as s3depl from '@aws-cdk/aws-s3-deployment'
// import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations'
// import * as cdn from '@aws-cdk/aws-cloudfront'

// import * as secrets from '@aws-cdk/aws-secretsmanager'
// import * as iam from '@aws-cdk/aws-iam'
// import { DynamoEventSource } from '@aws-cdk/aws-lambda-event-sources';
// import * as fs from 'fs';
// import * as path from 'path'

export class IntrastructureStack extends Stack {
  table;
  constructor(scope, id, props) {
    super(scope, id, props);

    this.table = new Table(this, 'DynamoDBTable', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: {
        name: 'id',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'type',
        type: AttributeType.STRING,
      },
      stream: StreamViewType.NEW_AND_OLD_IMAGES,
      timeToLiveAttribute: 'expiresAt',
    });
    
    props.serverHandler.addEnvironment('TABLE', this.table.tableName);
    this.table.grantReadWriteData(props.serverHandler);
  }
}
