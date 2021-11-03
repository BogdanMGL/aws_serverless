import * as Boom from '@hapi/boom';

type LambdaResponse =
  | {
      statusCode: number;
      body: string;
    }
  | Boom.Boom;

interface Body {
  array: number[];
  number: number;
}

type Result = { summa: number; product: number } | string;

export { Body, Result, LambdaResponse };
