import { DynamoDB } from 'aws-sdk';
const db = new DynamoDB({ region: 'us-east-1' });
const tableName =
	process.env.DATATABLE_NAME || 'sveltekit-blog-datatable-DynamoDBTable53A22BDE-ZTGOPU31574V';

export async function get({ params }: any) {
	const { slug } = params;
	const result = await db
		.scan({
			TableName: tableName,
			ConsistentRead: false,
			FilterExpression: 'begins_with(#7df00, :7df00) And #7df01 = :7df01',
			ExpressionAttributeValues: {
				':7df00': { S: slug },
				':7df01': { S: 'feedback' }
			},
			ExpressionAttributeNames: {
				'#7df00': 'id',
				'#7df01': 'type'
			}
		})
		.promise();

	return {
		status: 200,
		body: { count: result.Count }
	};
}
export async function post({ params }: any) {
	const { slug } = params;

	const result = await db
		.putItem({
			TableName: tableName,
			Item: {
				id: {
					S: `${slug}-${Date.now()}`
				},
				type: {
					S: 'feedback'
				}
			}
		})
		.promise();
	return {
		status: 201
	};
}
