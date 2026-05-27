import "./globals.css";

export const metadata = {
  title: "URL Shortener",
  description: "Create and manage shortened URLs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
