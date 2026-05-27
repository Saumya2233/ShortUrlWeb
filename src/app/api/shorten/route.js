import { NextResponse } from "next/server";

import { generateCode } from "../../../../lib/genrateCode";
import { validateUrl } from "../../../../lib/validateUrl";
import { readUrls, saveUrls } from "../../../../lib/storage";

export async function POST(req) {
  try {
    const body = await req.json();

    const url = body.url?.trim();

    
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Invalid URL check
    if (!validateUrl(url)) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    // Read existing URLs
    const urls = readUrls();

    // Generate short code
    const code = generateCode();

    // Create new object
    const newUrl = {
      code,
      originalUrl: url,
      createdAt: new Date().toISOString(),
    };

  
    urls.push(newUrl);

    // Save in JSON file
    saveUrls(urls);

    // Return short URL
    return NextResponse.json({
      shortUrl: `http://localhost:3000/${code}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
