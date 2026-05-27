import { notFound, redirect } from "next/navigation";

import { readUrls } from "../../../lib/storage";

export default async function RedirectPage({ params }) {
 
  const { code } = await params;

  // Read stored URLs
  const urls = readUrls();

  // Find matching code
  const url = urls.find((item) => item.code === code);

  // If code not found
  if (!url) {
    notFound();
  }

  // Redirect to original URL
  redirect(url.originalUrl);
}
