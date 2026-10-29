import aws from 'aws-sdk';

export async function get({ params, url, request }) {
  const db = new aws.DynamoDB({ region: 'us-east-1' });
  const result = await db
    .scan({
      TableName: process.env.TABLE,
      FilterExpression: '#type = :type',
      ExpressionAttributeValues: { ':type': { S: 'comment' } },
      ExpressionAttributeNames: { '#type': 'type' },
    })
    .promise();

  const items = result.Items.map((x) => ({ content: x.content.S, id: x.id.S, type: x.type.S }));

  return {
    body: { items, count: result.Count },
  };
}
