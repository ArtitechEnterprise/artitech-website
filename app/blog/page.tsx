import { BlogHeroSection } from "@/sections/blog-hero-section";
import React from "react";

export const metadata = {
  title: "ARTITECH | Blog",
  description:
    "Découvrez les dernières actualités, tendances et analyses du secteur technologique sur le blog d'ARTITECH. Restez informé des innovations et inspirez-vous de nos articles pointus.",
  openGraph: {
    title: "ARTITECH | Blog",
    description:
      "Découvrez les dernières actualités, tendances et analyses du secteur technologique sur le blog d'ARTITECH. Restez informé des innovations et inspirez-vous de nos articles pointus.",
    url: "https://votresite.com/blog",
    siteName: "ARTITECH",
    images: [
      {
        url: "https://votresite.com/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTITECH | Blog",
    description:
      "Découvrez les dernières actualités, tendances et analyses du secteur technologique sur le blog d'ARTITECH.",
    images: ["https://votresite.com/images/blog-og-image.jpg"],
  },
};

const BlogPage = () => {
  return (
    <main className="min-h-screen flex-1 flex-grow">
      <BlogHeroSection />
    </main>
  );
};

export default BlogPage;
