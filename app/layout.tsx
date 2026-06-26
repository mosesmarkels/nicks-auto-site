import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nick's Auto Repair | Boulder CO | Since 1977",
  description:
    "Family owned, ASE certified auto repair in Boulder, CO since 1977. Expert service for brakes, engine, transmission, AC, and more. Call (303) 499-4300.",
  keywords: "auto repair Boulder CO, car repair Boulder, ASE certified mechanic, Nick's Auto Repair",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
