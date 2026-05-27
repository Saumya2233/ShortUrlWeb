import { GET as getUrls } from "../urls/route";

export const dynamic = "force-dynamic";

export async function GET(req) {
  return getUrls(req);
}
