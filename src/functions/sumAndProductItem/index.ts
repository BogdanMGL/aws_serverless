import { APIGatewayProxyEvent } from 'aws-lambda';
import * as Boom from '@hapi/boom';
import { Body, Result, LambdaResponse } from './types';

const sumAndProductItem = async (event: APIGatewayProxyEvent): Promise<LambdaResponse> => {
  if (!event.body) return Boom.badRequest('array to check not found, specify the array in the request body');
  const body:Body = JSON.parse(event.body!);
  if (!body.array) return Boom.badRequest('array to check not found, specify the array in the request body');
  const { array, number } = body;
  if (!number) return Boom.badRequest('the number of elements is not specified');
  if (!array.length) return Boom.badRequest('array is empty');
  if (number > array.length) return Boom.badRequest('n is more than the number of array elements');

  const preparedArray = array.slice(0, number);
  const summa = preparedArray.reduce((sum, item) => sum + item);
  const product = preparedArray.reduce((prod, item) => prod * item);
  const result:Result = { summa, product };
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export = {
  handler: sumAndProductItem,
};
