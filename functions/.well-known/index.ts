import { errorResp } from "../utils";

export const onRequestGet: PagesFunction = async () => {
  return errorResp(404);
};
