import type { Metadata, Viewport } from "next";
import "@fontsource-variable/rubik";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (BCDC) | Nkumba Bufulu, Uganda`,
    template: `%s | BCDC Uganda`,
  },
  description: site.description,
  applicationName: "BCDC Uganda",
  keywords: [
    "Bufulu Community Development Center",
    "BCDC Uganda",
    "Nkumba",
    "Wakiso",
    "early childhood education Uganda",
    "non-profit Uganda",
    "Head Start Uganda",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_UG",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1b8fd0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-star px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
