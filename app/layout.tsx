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
  metadataBase: new URL("https://www.nicksautorepairco.com"),
  title: "Nick's Auto Repair | Boulder CO | Since 1977",
  description:
    "Family owned, ASE certified auto repair in Boulder, CO since 1977. Honest diagnostics, fair prices, and repairs done right — guaranteed. Brakes, engine, transmission, A/C & more. Call (303) 499-4300.",
  keywords:
    "auto repair Boulder CO, car repair Boulder, ASE certified mechanic, Nick's Auto Repair, brake repair Boulder, oil change Boulder, engine repair Boulder CO",
  alternates: {
    canonical: "https://www.nicksautorepairco.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.nicksautorepairco.com",
    title: "Nick's Auto Repair | Boulder CO | Since 1977",
    description:
      "Family owned auto repair in Boulder since 1977. Honest diagnostics, fair prices, repairs done right. ASE certified. Call (303) 499-4300.",
    siteName: "Nick's Auto Repair",
    images: [
      {
        url: "/photos/building.jpg",
        width: 1200,
        height: 630,
        alt: "Nick's Auto Repair — Boulder, CO with the Flatirons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick's Auto Repair | Boulder CO | Since 1977",
    description:
      "Family owned auto repair in Boulder since 1977. Honest diagnostics, fair prices, repairs done right.",
    images: ["/photos/building.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://www.nicksautorepairco.com/#business",
  name: "Nick's Auto Repair",
  description:
    "Family owned, ASE certified auto repair shop in Boulder, CO serving the community since 1977. Expert service for all makes and models — foreign and domestic.",
  url: "https://www.nicksautorepairco.com",
  telephone: "+13034994300",
  email: "info@nicksautorepairco.com",
  foundingDate: "1977",
  priceRange: "$$",
  image: "https://www.nicksautorepairco.com/photos/building.jpg",
  logo: "https://www.nicksautorepairco.com/photos/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2800 Moorhead Ave",
    addressLocality: "Boulder",
    addressRegion: "CO",
    postalCode: "80303",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.00097,
    longitude: -105.25644,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:30",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    { "@type": "City", "name": "Boulder", "sameAs": "https://www.wikidata.org/wiki/Q49185" },
    { "@type": "City", "name": "Louisville" },
    { "@type": "City", "name": "Lafayette" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Changes" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "A/C Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel Alignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Computer Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suspension & Exhaust" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cooling System Service" } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
