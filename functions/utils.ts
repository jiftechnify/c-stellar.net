export const errorResp = (status: number, msg?: string): Response => {
  return new Response(msg ?? "", { status });
};
