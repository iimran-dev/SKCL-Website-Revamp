import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScrollProvider } from "@/components/site/providers/smooth-scroll-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skcl.com"),
  title: {
    default: "SKCL — Building Chennai's Business Landscape Since 2003",
    template: "%s | SKCL",
  },
  description:
    "SKCL is a Grade A commercial real estate developer headquartered in Chennai — building landmark office developments, delivering facility management, and structuring joint ventures for global enterprises.",
  keywords: [
    "SKCL",
    "commercial real estate Chennai",
    "Grade A office developments",
    "facility management India",
    "joint ventures real estate",
    "business infrastructure Chennai",
    "built-to-suit developer",
  ],
  authors: [{ name: "SKCL" }],
  creator: "SKCL",
  publisher: "SKCL",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SKCL — Building Chennai's Business Landscape Since 2003",
    description:
      "Grade A commercial real estate developer. Workspace creation, facility management, and joint ventures engineered for enduring value.",
    url: "https://skcl.com",
    siteName: "SKCL",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKCL — Building Chennai's Business Landscape",
    description:
      "Grade A commercial real estate developer headquartered in Chennai.",
  },
  other: {
    "theme-color": "#071525",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SKCL",
  alternateName: "SKCL Developments",
  description:
    "Grade A commercial real estate developer building landmark office developments, facility management and joint ventures in Chennai since 2003.",
  foundingDate: "2003",
  areaServed: "Chennai, India",
  knowsAbout: [
    "Commercial Real Estate Development",
    "Facility Management",
    "Joint Ventures",
    "Built-to-Suit Office Spaces",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com",
    "https://www.instagram.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
