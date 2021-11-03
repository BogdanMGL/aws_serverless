import { APIGatewayProxyEvent } from 'aws-lambda';
// import { LambdaResponse } from "../types/types";

const hello = async (event: APIGatewayProxyEvent) => ({
  statusCode: 200,
  body: JSON.stringify('Lambda is alive!'),
});

export = {
  handler: hello,
};
