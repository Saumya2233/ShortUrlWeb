# AI Usage Log

## 1
Tool: ChatGPT

Asked:
"How should I structure a simple URL shortener in Next.js App Router?"

Got:
Suggested using API routes, a dynamic route for redirects, and a JSON file for persistent storage.

What I did:
Used the suggested structure and kept everything inside a single Next.js app for simplicity.

---

## 2
Tool: ChatGPT

Asked:
"How can I validate URLs before shortening them?"

Got:
Suggested using the JavaScript URL constructor for validation.

What I did:
Implemented validation and added error responses for invalid or empty input.

---

## 3
Tool: ChatGPT

Asked:
"Why am I getting Unexpected end of JSON input in JSON.parse?"

Got:
Explained that my urls.json file was empty and needed valid JSON data.

What I did:
Initialized urls.json with an empty array and verified file reads before parsing.

---

## 4
Tool: ChatGPT

Asked:
"Why is my shortened URL not redirecting to the original URL in Next.js?"

Got:
Suggested checking the dynamic route structure and handling async params correctly.

What I did:
Updated the redirect route and fixed the params handling for the latest Next.js version.

---

## 5
Tool: ChatGPT

Asked:
"How can I persist recently shortened URLs in the browser?"

Got:
Suggested using localStorage.

What I did:
Added a recent URLs section showing the last 5 shortened links.