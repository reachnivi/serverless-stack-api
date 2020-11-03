export default function handler(lambda) {
  let body, statusCode;

  return async function(event, context) {
    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (error) {
      console.log(error);
      body = { error: error.message };
      statusCode = 500;
    }

    return {
      statuscode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
  };
}
