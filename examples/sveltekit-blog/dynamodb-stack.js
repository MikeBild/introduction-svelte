import { Stack } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType, StreamViewType } from '@aws-cdk/aws-dynamodb';

export class DynamoDBStack extends Stack {
	table;
	constructor(scope, id, props) {
		super(scope, id, props);

		this.table = new Table(this, 'DynamoDB-Table', {
			billingMode: BillingMode.PAY_PER_REQUEST,
			partitionKey: {
				name: 'id',
				type: AttributeType.STRING
			},
			sortKey: {
				name: 'type',
				type: AttributeType.STRING
			},
			stream: StreamViewType.NEW_AND_OLD_IMAGES,
			timeToLiveAttribute: 'expiresAt'
		});

		props.serverHandler.addEnvironment('DATATABLE_NAME', this.table.tableName);
		this.table.grantReadWriteData(props.serverHandler);
	}
}
