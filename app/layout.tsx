import "@/styles/index.scss";
import { siteConfig } from "@/utils";
import type { Metadata, Viewport } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  title: { template: "%s", default: siteConfig.title },
  referrer: "origin-when-cross-origin",
  // manifest: "/manifest.json",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },

  keywords: siteConfig.keywords,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: siteConfig.title,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.title,
    locale: "en_US",
    description: siteConfig.description,
    images: [siteConfig.default_image],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
    // startupImage: "/apple_splash.png",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@shopsnicketts",
    creatorId: "1467726470533754880",
    images: [siteConfig.default_image],
  },

  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.theme_color,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
