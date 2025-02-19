import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import Footer from "@/components/customs/footer";
import Navbar from "@/components/customs/navbar";
import IndicatorOnScroll from "@/components/customs/indicator-scroll";
import { LoadingAnimation } from "@/components/customs/loading-ainmation";

export const metadata: Metadata = {
  title: "ARTITECH | HOME",
  description:
    "ARTITECH entreprise de développement d'application web et mobile à Douala et Canada",
  openGraph: {
    title:
      "ARTITECH | Artitech entreprise de développement d'application web et mobile à Douala et Canada",
    description:
      "Solutions digitales qui propulsent votre entreprise a l'avenir",
    url: "",
    siteName:
      "ARTITECH | Artitech entreprise de développement d'application web et mobile à Douala et Canada",
    images: [
      {
        url: "https://res.cloudinary.com/dd2t9tdyy/image/upload/v1739702462/rgum1rvqdp5vdazhuco7.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ARTITECH | Artitech entreprise de développement d'application web et mobile à Douala et Canada",
    description:
      "Solutions digitales qui propulsent votre entreprise a l'avenir",
    images: [
      "https://res.cloudinary.com/dd2t9tdyy/image/upload/v1739702462/rgum1rvqdp5vdazhuco7.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange={false}
        >
          <LoadingAnimation />
          <IndicatorOnScroll />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
