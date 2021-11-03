import * as Boom from '@hapi/boom';

type LambdaResponse =
  | {
      statusCode: number;
      body: string;
    }
  | Boom.Boom;

interface Body {
  array: { firstName: string; lastName: string; birthDate: string }[];
}

export { Body, LambdaResponse };
