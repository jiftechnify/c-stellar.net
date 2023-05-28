import type { PagesFunction, R2Bucket } from '@cloudflare/workers-types'
import { Response } from '@cloudflare/workers-types'

export const onRequestGet: PagesFunction<{
  WELL_KNOWN: R2Bucket
}> = async ({request: req, env}) => {
  return new Response(`Hello, world! Requested URL: ${req.url}`)
}
