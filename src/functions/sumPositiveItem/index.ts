import { APIGatewayProxyEvent } from 'aws-lambda';
import * as Boom from '@hapi/boom';
import { Body, Result, LambdaResponse } from './types';

const sumPositiveItem = async (event:APIGatewayProxyEvent):Promise <LambdaResponse> => {
  if (!event.body) return Boom.badRequest('array to check not found, specify the array in the request body');
  const body:Body = JSON.parse(event.body!);
  if (!body.array) return Boom.badRequest('array to check not found, specify the array in the request body');
  const { array } = body;
  if (!array.length) return Boom.badRequest('array is empty');

  let result:Result| undefined;
  result = array.reduce((summ, item) => {
    if (item > 0) return summ + item;
    return summ;
  }, 0);
  result = (!result) ? 'array does not contain positive numbers' : `the sum of the positive numbers in the array is ${result}`;
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export = {
  handler: sumPositiveItem,
};
