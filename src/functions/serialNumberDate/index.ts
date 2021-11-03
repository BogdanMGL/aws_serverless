import { LambdaResponse } from './types';

const serialNumberDate = async ():Promise <LambdaResponse> => {
  const today = new Date();
  const beginYear = new Date(today.getFullYear(), 0);
  const days = Math.floor((today.getTime() - beginYear.getTime()) / 1000 / 3600 / 24);
  return {
    statusCode: 200,
    body: JSON.stringify(`${days} days have passed since the beginning of the year`),
  };
};

export = {
  handler: serialNumberDate,
};
