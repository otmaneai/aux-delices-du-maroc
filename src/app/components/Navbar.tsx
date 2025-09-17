"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/reservation", label: "Réservation" },
    { href: "/notre-carte", label: "Notre Carte" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background text-charcoal shadow-md font-serif">
      <div className="h-2 w-full bg-moroccan-pattern bg-[length:36px_36px] opacity-60" />
      <div className="container mx-auto flex justify-between items-center p-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-3xl font-serif text-primary font-bold"
        >
          <Image
            src="/gallery/logo-new.png"
            alt="Aux Délices du Maroc Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="ml-2 text-xl font-bold text-charcoal">
            Aux Délices du Maroc
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-lg transition-all duration-300 ease-in-out group py-2 ${isActive ? "text-primary" : "text-charcoal"}`}
              >
                <span className="relative inline-block px-3 py-1 rounded-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary/10 group-hover:text-primary">
                  {link.label}
                  <span
                    className={`pointer-events-none absolute bottom-[1px] left-0 h-[0.5px] bg-[currentColor] transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-charcoal focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 mt-4" : "max-h-0"} overflow-hidden`}
      >
        <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xl transition-all duration-300 rounded px-3 py-2 group ${isActive ? "text-primary font-semibold" : "hover:text-primary hover:bg-primary/10 hover:-translate-y-0.5"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative inline-block">
                  {link.label}
                  <span
                    className={`pointer-events-none absolute bottom-[1px] left-0 h-[0.5px] bg-[currentColor] transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-2 w-full bg-moroccan-pattern bg-[length:36px_36px] opacity-60" />
    </nav>
  );
};

export default Navbar;
