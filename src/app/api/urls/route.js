import { NextResponse } from "next/server";

import { readUrls } from "../../../../lib/storage";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const requestedLimit = Number(searchParams.get("limit") ?? 5);
  const limit = Number.isFinite(requestedLimit)
    ? Math.max(1, Math.min(requestedLimit, 50))
    : 5;

  const urls = readUrls();
  const recentUrls = urls.slice(-limit).reverse();

  return NextResponse.json(recentUrls, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
