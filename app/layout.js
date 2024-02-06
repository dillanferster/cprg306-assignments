import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="html-body" className="bg-fixed">
      <body>{children}</body>
    </html>
  );
}
