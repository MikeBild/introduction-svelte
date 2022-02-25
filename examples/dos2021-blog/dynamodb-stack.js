import { Stack } from '@aws-cdk/core';
import { AttributeType, BillingMode, Table } from '@aws-cdk/aws-dynamodb';

export class DynamoDBStack extends Stack {
	constructor(scope, id, props) {
		super(scope, id, props);

		const table = new Table(this, 'DynamoDB-Table', {
			billingMode: BillingMode.PAY_PER_REQUEST,
			partitionKey: {
				name: 'id',
				type: AttributeType.STRING
			},
			sortKey: {
				name: 'datatype',
				type: AttributeType.STRING
			}
		});

		table.grantReadWriteData(props.serverHandler);
	}
}
