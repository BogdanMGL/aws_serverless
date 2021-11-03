import * as Boom from '@hapi/boom';

type LambdaResponse =
  | {
      statusCode: number;
      body: string;
    }
  | Boom.Boom;

interface Body {
  array: number[];
}

type Result = number | string;

export { Body, Result, LambdaResponse };
