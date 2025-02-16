"use client";
import Container from "./container";
import { MapPin, Phone } from "lucide-react";
import Links from "@/data/links";
import Link from "next/link";
import Socials from "./socials";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="mt-10 border-t-2 bg-card py-8">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
          {/*  */}
          <h3 className="text-xl font-semibold">Canada</h3>
          <div className="mt-4 space-y-3">
            <p className="flex items-center gap-2">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-light">1234 Rue de la Technologie</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />

              <span>Montréal, QC H3A 2B4</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-6 w-6" strokeWidth={1.5} />
              <span>Tél : +1 514-123-4567</span>
            </p>
          </div>
        </div>
        <div className="">
          {/*  */}
          <h3 className="text-xl font-semibold">Cameroun</h3>
          <div className="mt-4 space-y-3">
            <p className="flex items-center gap-2">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />
              <span className="font-light">456 Rue de la Côte</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-6 w-6" strokeWidth={1.5} />

              <span>Douala, Littoral, Cameroun</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-6 w-6" strokeWidth={1.5} />
              <span>Tél : +237 6 96 35 41 28</span>
            </p>
          </div>
        </div>
        <div className="">
          {/*  */}
          <h3 className="text-xl font-semibold">Menus</h3>
          <ul className="mt-4 space-y-3">
            {Links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.path}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold">Follow us</h3>
          <div className="mt-4 space-y-3">
            <Socials className="px-2 py-2" />
            <div className="flex items-center gap-3 lg:justify-center">
              <p className="text-xs font-light">Nous rejoindre</p>
              <p className="text-xs font-light">Contact</p>
              <p className="text-xs font-light">Mentions légales</p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col gap-9 lg:flex-row">
        <div className="md:self-center">
          {theme === "light" ? (
            <Image
              src="/logo-dark.png"
              width={100}
              height={100}
              alt="Aritech"
              loading="lazy"
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
          <span>Les artisants du digital</span>
        </div>
        <p className="justify-self-center lg:w-3/4 lg:self-end lg:text-center">
          © 2024 Artitech. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
