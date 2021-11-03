import * as Boom from '@hapi/boom';

export type LambdaResponse =
  | {
      statusCode: number;
      body: string;
    }
  | Boom.Boom;
