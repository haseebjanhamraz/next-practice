"use client"

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Navbar from './ui/components/Navbar';
import { usePathname } from "next/navigation";
import Footer from './ui/components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(`Path: ${pathname}`)
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {pathname !== '/dashboard' &&
          <Navbar />
        }
        <main className={pathname === "/" ? "p-10" : "p-0"}>{children}</main>
        {pathname !== '/dashboard' &&
          <Footer />
        }
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