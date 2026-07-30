import "./globals.css";

export const metadata = {
  title: "Fieldnote — a simple starter site",
  description: "A clean, simple Next.js starter site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
