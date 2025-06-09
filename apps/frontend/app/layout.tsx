import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './_providers';

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
