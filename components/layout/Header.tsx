"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About YU", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "For Institutions", href: "#institutions" },
];

const WHATSAPP_NUMBER = "919201594559";
const WHATSAPP_MESSAGE = "Hi, I would like to know more about YungUnitee and its services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-200 bg-light/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 w-[92%] max-w-290 items-center justify-between gap-4">
        <Link
          href="#home"
          aria-label="YungUnitee home"
          className="flex h-11 w-40 shrink-0 items-center justify-center "
        >
        <Image
            src="/services/yungunitee.png"
            alt="YungUnitee"
            width={180}
            height={55}
            className="h-auto w-40 object-contain"
            priority
        />
        </Link>

        {/* Desktop navigation + CTA */}
        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="links transition-colors hover:text-primary-dark"
              >
                {item.label}
              </Link>
            ))}

          </nav>
        
          <Button
            href={WHATSAPP_URL}
            variant="dark"
            className="px-5 py-2.5"
          >
            <span className="flex items-center gap-2">
              <FaWhatsapp size={18} />
              CONTACT US
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-secondary/40 lg:hidden"
        >
          <span className={`h-0.5 w-5 bg-secondary transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-secondary transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-secondary transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-18 flex flex-col gap-6 border-b items-center border-primary-200 bg-light px-[4%] py-6 shadow-lg lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="sub_heading hover:text-primary-dark "
            >
              {item.label}
            </Link>
          ))}

          <Button
            href={WHATSAPP_URL}
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Button>
        </nav>
      )}
    </header>
  );
}
