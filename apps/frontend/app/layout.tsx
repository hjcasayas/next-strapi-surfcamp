import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Sam's Surfcamp",
  description: "Learn surfing with expert instructors at Sam's Surfcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
