import { APIGatewayProxyEvent } from 'aws-lambda';
import * as Boom from '@hapi/boom';
import { Body, LambdaResponse } from './types';

const sortingObjects = async (
  event: APIGatewayProxyEvent,
): Promise<LambdaResponse> => {
  if (!event.body) {
    return Boom.badRequest(
      'array to check not found, specify the array in the request body',
    );
  }
  const body: Body = JSON.parse(event.body);
  if (!body.array) {
    return Boom.badRequest(
      'array to check not found, specify the array in the request body',
    );
  }
  const { array } = body;
  if (!array.length) return Boom.badRequest('array is empty');

  array.sort((a, b) => {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
    if (a.firstName === b.firstName) {
      if (Date.parse(a.birthDate) > Date.parse(b.birthDate)) return 1;
      if (Date.parse(a.birthDate) < Date.parse(b.birthDate)) return -1;
      return 0;
    }
    return 0;
  });
  return {
    statusCode: 200,
    body: JSON.stringify(array),
  };
};

export = {
  handler: sortingObjects,
};
