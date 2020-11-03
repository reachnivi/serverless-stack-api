import AWS from "aws-sdk";

AWS.config.update({ region: "ap-south-1" });
const client = new AWS.DynamoDB.DocumentClient();

export default {
  get: params => client.get(params).promise(),
  put: params => client.put(params).promise(),
  update: params => client.update(params).promise(),
  query: params => client.query(params).promise(),
  delete: params => client.delete(params).promise()
};
