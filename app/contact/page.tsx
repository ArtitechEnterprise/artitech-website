import ContactForm from "@/sections/contact-form";
import { ContactHeroSection } from "@/sections/contact-hero-section";
import React from "react";

export const metadata = {
  title: "ARTITECH | Contact",
  description:
    "Contactez ARTITECH pour toute demande d'information, de collaboration ou de support technique. Notre équipe est à votre écoute pour répondre à vos questions.",
  openGraph: {
    title: "ARTITECH | Contact",
    description:
      "Contactez ARTITECH pour toute demande d'information, de collaboration ou de support technique. Notre équipe est à votre écoute pour répondre à vos questions.",
    url: "https://votresite.com/contact", // Remplacez par l'URL réelle
    siteName: "ARTITECH",
    images: [
      {
        url: "https://votresite.com/images/contact-og-image.jpg", // Remplacez par l'image réelle
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARTITECH | Contact",
    description:
      "Contactez ARTITECH pour toute demande d'information, de collaboration ou de support technique.",
    images: ["https://votresite.com/images/contact-og-image.jpg"], // Remplacez par l'image réelle
  },
};

const ContactPage = () => {
  return (
    <main className="min-h-screen grow">
      <ContactHeroSection />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
