"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [recentUrls, setRecentUrls] = useState([]);

  // Load saved URLs from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentUrls")) || [];

    setRecentUrls(saved);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setShortUrl("");
    setLoading(true);

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }

      setShortUrl(data.shortUrl);

      // Create updated recent list
      const updatedUrls = [data.shortUrl, ...recentUrls].slice(0, 5);

      setRecentUrls(updatedUrls);

      localStorage.setItem("recentUrls", JSON.stringify(updatedUrls));

      setUrl("");
    } catch {
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">URL Shortener</h1>

          <p className="text-gray-500 mt-2">
            Convert long URLs into short links
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-xl p-4 hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </form>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {shortUrl && (
          <div className="border border-gray-300 rounded-xl p-4">
            <p className="font-semibold mb-2">Latest Short URL</p>

            <a
              href={shortUrl}
              target="_blank"
              className="text-blue-600 underline break-all"
            >
              {shortUrl}
            </a>
          </div>
        )}

        {recentUrls.length > 0 && (
          <div className="border border-gray-300 rounded-xl p-4">
            <h2 className="font-semibold mb-3">Recent URLs</h2>

            <ul className="space-y-2 list-disc pl-5">
              {recentUrls.map((item, index) => (
                <li key={index}>
                  <a
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
