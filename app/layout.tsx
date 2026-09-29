import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace Learning Platform",
  description: "Doin Tech Limited Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased flex flex-col">
        {mainBody(children)}
      </body>
    </html>
  );
}

function mainBody(children: React.ReactNode) {
  return children;
}