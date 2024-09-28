"use client"

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from './ui/components/Navbar';
import { usePathname } from "next/navigation";
import Footer from './ui/components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith('/dashboard');
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {!isDashboardRoute && <Navbar />}


        <main className={`${pathname === "/" ? "p-10" : "p-0"}`}>{children}</main>

        {!isDashboardRoute && <Footer />}
      </body>
    </html>
  );
}