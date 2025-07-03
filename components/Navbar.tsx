"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Menu, X, ChevronDown, Equal } from "lucide-react";
import * as Collapsible from "@radix-ui/react-collapsible";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="bg-secgrey border-b border-navblue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end md:justify-center items-center h-16">
          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-secblue focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Equal color="#233375" size={40} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-secblue font-medium bg-secgrey">
                    Features
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="text-secblue font-medium hover:text-blue-600"
                    >
                      Press
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-secblue font-medium bg-secgrey">
                    Company
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Collapsible.Root open={featuresOpen} onOpenChange={setFeaturesOpen}>
            <div className="flex items-center justify-between">
              <button
                className="text-secblue font-medium"
                onClick={() => setFeaturesOpen(!featuresOpen)}
              >
                Features
              </button>
              <ChevronDown
                size={18}
                className={`transform transition-transform ${
                  featuresOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <Collapsible.Content className="pl-4 mt-2 space-y-1">
              <Link href="/features/one" className="block text-sm text-secblue">
                Feature One
              </Link>
              <Link href="/features/two" className="block text-sm text-secblue">
                Feature Two
              </Link>
            </Collapsible.Content>
          </Collapsible.Root>

          <Link href="/" className="block text-secblue font-medium">
            Press
          </Link>

          <Collapsible.Root open={companyOpen} onOpenChange={setCompanyOpen}>
            <div className="flex items-center justify-between">
              <button
                className="text-secblue font-medium"
                onClick={() => setCompanyOpen(!companyOpen)}
              >
                Company
              </button>
              <ChevronDown
                size={18}
                className={`transform transition-transform ${
                  companyOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            <Collapsible.Content className="pl-4 mt-2 space-y-1">
              <Link href="/about" className="block text-sm text-secblue">
                About Us
              </Link>
              <Link href="/careers" className="block text-sm text-secblue">
                Careers
              </Link>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
