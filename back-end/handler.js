"use strict";

const createResponse = (statusCode, message) => {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(message)
  };
};

export const scorpion = async (event, context) => {
  return createResponse(200, {
    message: "Encountered a scorpion!"
  });
};
