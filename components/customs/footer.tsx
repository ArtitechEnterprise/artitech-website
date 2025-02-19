"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { ParallaxSection } from "./parallax-section";
import { useTheme } from "next-themes";
import Image from "next/image";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "artitech@homesolutionsworld.org" },
  { icon: Phone, text: " +1 514-123-4567" },
  { icon: MapPin, text: "1234 Rue de la Technologie" },
];

const footerLinks = [
  {
    title: "Services",
    items: [
      "Développement Web",
      "Design UI/UX",
      "IA & Automatisation",
      "Cybersécurité",
    ],
  },
  {
    title: "Entreprise",
    items: ["À propos", "Carrières", "Partenaires", "Blog"],
  },
  {
    title: "Support",
    items: [
      "FAQ",
      "Contact",
      "Politique de confidentialité",
      "Conditions d'utilisation",
    ],
  },
];

function Footer() {
  const { theme } = useTheme();
  return (
    <ParallaxSection offset={-50}>
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-5 lg:py-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 flex flex-col space-y-2">
                {theme === "light" ? (
                  <Image
                    src="/logo-dark.png"
                    width={100}
                    height={300}
                    alt="Aritech"
                    loading="lazy"
                    className="bg-white"
                  />
                ) : (
                  <Image
                    src="/logo-light.png"
                    width={100}
                    height={100}
                    alt="Aritech"
                    loading="lazy"
                  />
                )}
                <span className="mt-5 text-muted-foreground">
                  Les artisants du digital
                </span>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {footerLinks.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (columnIndex + 1) }}
              >
                <h4 className="mb-4 text-lg font-semibold">{column.title}</h4>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 border-t border-muted pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-col justify-between md:flex-row">
              <div className="mb-4 text-center md:mb-0 md:text-left">
                <p className="text-start text-sm text-muted-foreground">
                  © {new Date().getFullYear()} ARTITECH. Tous droits réservés.
                </p>
              </div>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                    whileHover={{ scale: 1.05 }}
                  >
                    <info.icon className="mr-2 h-4 w-4" />
                    <span>{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </ParallaxSection>
  );
}

export default Footer;
