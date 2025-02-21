"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Home,
  Briefcase,
  Users,
  Phone,
  // Book,
  Code,
  Palette,
  Zap,
  Menu,
  Globe,
  Brain,
  Monitor,
  Shield,
  Lightbulb,
  TrendingUp,
  PieChart,
} from "lucide-react";
import SwitchTheme from "./switch-theme";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
  // { name: "Blog", href: "/blog", icon: Book },
];

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Créez des sites web et des applications époustouflants.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux-design",
    description: "Concevez des interfaces utilisateur belles et intuitives.",
    icon: Palette,
  },
  {
    title: "API Integration",
    href: "/services/api-integration",
    description: "Intégrez facilement des API tierces à vos projets.",
    icon: Zap,
  },
  {
    title: "Intelligence Artificielle et Automatisation",
    href: "/services/ai-automation",
    description: "Optimisez vos processus avec l'IA et l'automatisation.",
    icon: Brain,
  },
  {
    title: "Développement logiciel",
    href: "/services/software-development",
    description: "Créez des logiciels sur mesure pour votre entreprise.",
    icon: Monitor,
  },
  {
    title: "Cybersécurité et Protection des Données",
    href: "/services/cybersecurity",
    description: "Protégez vos actifs numériques contre les menaces.",
    icon: Shield,
  },
  {
    title: "Conseil et Accompagnement Digital",
    href: "/services/digital-consulting",
    description: "Guidez votre transformation numérique avec notre expertise.",
    icon: Lightbulb,
  },
  {
    title: "Infographie",
    href: "/services/infographie",
    description: "Transformez vos données en visuels captivants.",
    icon: PieChart,
  },
  {
    title: "Marketing Digital",
    href: "/services/marketing-digital",
    description: "Boostez votre présence en ligne et attirez plus de clients.",
    icon: TrendingUp,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState("fr");
  const isAvailable = false;
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <motion.nav
      className="sticky top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:justify-normal">
        <Logo />
        <NavigationMenu className="hidden w-full flex-grow md:flex">
          <NavigationMenuList className="lg:mr-36">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.name === "Services" ? (
                  <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                ) : (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                )}
                {item.name === "Services" && (
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[850px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                          icon={service.icon}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {isAvailable && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <p className="flex items-center justify-center gap-1">
                    <Globe className="h-6 w-6" />
                    <span>{language === "fr" ? "FR" : "EN"}</span>
                  </p>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-scroll">
              <SheetHeader className="mb-7">
                <SheetTitle className="hidden">Menu</SheetTitle>
                <Logo />
                <SheetDescription className="p-0 text-start underline underline-offset-4">
                  Les artisants de la tech
                </SheetDescription>
              </SheetHeader>
              <nav className="space-y-3 overflow-hidden">
                <ul className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      {item.name === "Services" ? (
                        <>
                          <button
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            className="flex cursor-pointer items-center gap-6 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-muted dark:hover:bg-slate-900"
                          >
                            <div className="flex items-center gap-2">
                              <item.icon className="h-5 w-5" />
                              <span>{item.name}</span>
                            </div>
                            <motion.span
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown
                                className="h-4 w-4"
                                strokeWidth={1.5}
                              />
                            </motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                  open: { opacity: 1, height: "auto" },
                                  collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{
                                  duration: 0.5,
                                  ease: [0.04, 0.62, 0.23, 0.98],
                                }}
                              >
                                <ul className="my-2 space-y-4 border-l border-input ps-2">
                                  {services.map((item) => (
                                    <li
                                      key={item.title}
                                      className="rouded-lg p-2 hover:bg-muted"
                                    >
                                      <Link href={item.href}>
                                        <div className="flex items-center gap-2">
                                          <item.icon className="h-5 w-5" />
                                          <span className="truncate text-sm">
                                            {item.title}
                                          </span>
                                        </div>
                                        {/* <p className="mt-2 text-xs dark:text-muted-foreground">
                                          {item.description}
                                        </p> */}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          className="flex items-center gap-2 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-muted dark:hover:bg-slate-900"
                          href={item.href}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <SwitchTheme />
        </div>
      </div>
    </motion.nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
