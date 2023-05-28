const errorResp = (status: number, msg?: string): Response => {
  return new Response(msg ?? "", { status });
};

export const onRequestGet: PagesFunction<
  {
    WELL_KNOWN: R2Bucket;
  },
  "name"
> = async ({ request: req, env, params }) => {
  if (typeof params.name !== "string") {
    return errorResp(400);
  }
  try {
    const res = await env.WELL_KNOWN.get(params.name);
    if (res === null) {
      return errorResp(404);
    }
    return new Response(res.body);
  } catch (err) {
    console.log(err);
    return errorResp(500);
  }
};
