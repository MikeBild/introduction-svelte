import { DynamoDB } from 'aws-sdk';

export async function get() {
	const db = new DynamoDB({ region: 'us-east-1' });
	const result = await db
		.scan({
			TableName: 'dos2021-blog-mike-dynamodb-DynamoDBTable53A22BDE-1TCBJYM01N0BN',
			FilterExpression: '#06980 = :06980',
			ExpressionAttributeNames: { '#06980': 'datatype' },
			ExpressionAttributeValues: { ':06980': { S: 'feedback' } }
		})
		.promise();

	return {
		status: 200,
		body: {
			count: result.Count
		}
	};
}
export async function post() {
	console.log('POST');
	return {
		status: 201
	};
}
