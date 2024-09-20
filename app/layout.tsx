"use client"

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Navbar from './ui/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className='p-10'>{children}</main>
      </body>
    </html>
  );
}


const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Bacha Khan Research Center',
  },
  description: 'The official library database for Bacha Khan Research Center',
  keywords: ['non-profit', 'bacha khan', 'bkrc', 'bacha khan research center'],
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};