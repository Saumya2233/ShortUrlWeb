# Mini URL Shortener

A simple full-stack URL shortener built with Next.js.

Users can paste a long URL and receive a shortened link that redirects to the original URL.

---

# Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- File-based JSON storage

---

# Why I Chose This Stack

I chose Next.js because it allowed me to build both the frontend and backend quickly in a single project, which matched the assignment’s focus on shipping fast and keeping the architecture simple.

---

# Features

## Core Features

- Shorten long URLs
- Redirect short URLs to original links
- Persistent storage using a JSON file
- Error handling for:
  - Empty input
  - Invalid URLs
  - Missing short codes

## Optional Feature

- Recently shortened URLs (last 5 stored in localStorage)

---

# Folder Structure

```txt
src/app
├── api/shorten
├── [code]
└── page.js
```

---

# Setup Instructions

## Clone the repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

## Navigate into the project

```bash
cd urlshorten
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Open in browser

```txt
http://localhost:3000
```

---

# API Routes

## Create Short URL

```txt
POST /api/shorten
```

### Request Body

```json
{
  "url": "https://google.com"
}
```

---

## Redirect Route

```txt
GET /:code
```

### Example

```txt
http://localhost:3000/abc123
```

Redirects the user to the original URL.

---

# Edge Cases Handled

- Empty URL input
- Invalid URL format
- Missing short code
- Persistent storage after restart

---

# AI Usage

AI tools were used during development for:

- debugging issues
- route structure suggestions
- URL validation suggestions
- debugging redirect functionality
- fixing Next.js dynamic route issues

More details are available in `AI_LOG.md`.

---

# What I'd Do With Another 4 Hours

- Add click analytics for shortened URLs
- Improve accessibility and mobile responsiveness
- Add automated testing
- Deploy the application on Vercel
- Add custom short URL support

---

# Notes

This project was completed within the assignment’s recommended time budget and intentionally kept simple instead of over-engineered.