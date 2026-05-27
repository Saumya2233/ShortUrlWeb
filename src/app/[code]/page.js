import { notFound, redirect } from "next/navigation";

import { readUrls } from "../../../lib/storage";

export default async function RedirectPage({ params }) {
 
  const { code } = await params;

  // Read stored URLs
  const urls = readUrls();

  // Find matching code
  const url = urls.find((item) => item.code === code);

  if (!url?.originalUrl) {
    notFound();
  }

  redirect(url.originalUrl);
}
