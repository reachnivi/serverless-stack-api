import handler from "./libs/dynamodb-lib";
import dynamodbClient from "./libs/dynamodb-lib";
export const main = handler(async (event, context) => {
  const params = {
    TableName: process.env.tableName,
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    }
  };

  const result = await dynamodbClient.get(params);
  if (!result.Item) {
    throw new Error("Item not found");
  }

  return result.Item;
});
