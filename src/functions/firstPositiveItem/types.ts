import * as Boom from '@hapi/boom';

interface Body {
  array: number[];
}

type LambdaResponse =
  | {
      statusCode: number;
      body: string;
    }
  | Boom.Boom;

type Result = { index: number; value: number } | string;

export { Body, Result, LambdaResponse };
