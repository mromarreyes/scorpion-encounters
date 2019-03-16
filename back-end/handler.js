"use strict";

module.exports.scorpion = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Encountered a scorpion!"
    })
  };
};
