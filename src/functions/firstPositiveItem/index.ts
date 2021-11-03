import { APIGatewayProxyEvent } from 'aws-lambda';
import * as Boom from '@hapi/boom';
import { Body, Result, LambdaResponse } from './types';

const firstPositiveItem = async (event:APIGatewayProxyEvent):Promise <LambdaResponse> => {
  if (!event.body) return Boom.badRequest('array to check not found, specify the array in the request body');
  const body:Body = JSON.parse(event.body!);
  if (!body.array) return Boom.badRequest('array to check not found, specify the array in the request body');
  const { array } = body;
  if (!array.length) return Boom.badRequest('array is empty');

  let result:Result;
  array.some((element, index) => {
    if (element > 0) {
      result = { index, value: element };
      return true;
    }
    return false;
  });
  if (!result!) result = 'array does not contain positive numbers';
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export = {
  handler: firstPositiveItem,
};
