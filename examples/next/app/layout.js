export const metadata = {
  title: "Resium + Next.js",
  description: "Resium example with the Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
