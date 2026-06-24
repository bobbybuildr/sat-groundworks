import type { Metadata } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body-family",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-heading-family",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://satgroundworks.com"),
  manifest: "/site.webmanifest",
  title: {
    default: "SAT Groundworks & Tarmac Services | Redditch",
    template: "%s | SAT Groundworks",
  },
  description:
    "SAT Groundworks and Tarmac Services specialise in driveways, tarmac, car parks, footpaths and drop kerbs for domestic and commercial clients in Redditch and surrounding areas.",
  keywords: [
    "SAT Groundworks",
    "groundworks Redditch",
    "tarmac services Worcestershire",
    "driveway surfacing",
    "car park surfacing",
    "drop kerbs",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://satgroundworks.com",
    siteName: "SAT Groundworks and Tarmac Services",
    title: "SAT Groundworks & Tarmac Services | Redditch",
    description:
      "Professional groundworks and tarmac surfacing services for domestic and commercial clients in Redditch and Worcestershire.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-site text-slate-100">
        <div className="site-shell">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
