import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

import Providers from '@/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Hero from '@/components/ui/hero';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HomeAway',
  description: 'Feel at home, away from home.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />

          <Hero/>
          <main className='container py-10'>{children}</main>
        </Providers>
      </body>
    </html>
  </ClerkProvider>
  );
}