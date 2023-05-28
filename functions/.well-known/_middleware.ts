// set CORS headers to responses
export const onRequestGet: PagesFunction = async ({ next }) => {
  const resp = await next();
  resp.headers.set("Access-Control-Allow-Origin", "*");
  resp.headers.set("Access-Control-Max-Age", "86400");
  return resp;
};
