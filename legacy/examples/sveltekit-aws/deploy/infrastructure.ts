import { Stack, Duration } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType, StreamViewType } from '@aws-cdk/aws-dynamodb';
import { Function, AssetCode, Runtime } from '@aws-cdk/aws-lambda';
import { HttpMethod, PayloadFormatVersion } from '@aws-cdk/aws-apigatewayv2';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class IntrastructureStack extends Stack {
  table: Table;
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

    const myFunctionHandler = new Function(this, 'MyFunctionHandler', {
      code: new AssetCode(join(__dirname, 'lambdas')),
      handler: 'myFunction.handler',
      runtime: Runtime.NODEJS_14_X,
      memorySize: 256,
      timeout: Duration.minutes(15),
    });

    props.httpApi.addRoutes({
      path: '/comments',
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration('MyFunctionIntegration', myFunctionHandler, {
        payloadFormatVersion: PayloadFormatVersion.VERSION_1_0,
      }),
    });
  }
}
