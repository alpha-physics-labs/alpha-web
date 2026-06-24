import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://alpha.example.com"),
  title: "ALPHA — Material intelligence for protective systems",
  description:
    "ALPHA helps teams discover, compare, and prioritize protective material candidates before expensive physical testing. An early MVP for physics-informed material intelligence and test planning.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "ALPHA — Material intelligence for protective systems",
    description:
      "Turn scattered material data into ranked, explainable candidates and clearer test plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stack+Sans+Notch:wght@200..700&family=Hanken+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
