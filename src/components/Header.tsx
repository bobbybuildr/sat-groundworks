"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(13,16,20,0.95)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SAT Groundworks Home">
          <Image
            src="/sat_logo_transparent.png"
            alt="SAT Groundworks and Tarmac Services logo"
            width={60}
            height={29}
            className="w-[60px] h-[29px] rounded-md object-cover"
            priority
          />
          <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white sm:text-base">
            SAT Groundworks
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-slate-100 transition hover:border-brand hover:text-brand md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav
          aria-label="Primary"
          className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-2 md:flex"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-semibold uppercase tracking-[0.14em] transition ${
                  isActive ? "text-brand" : "text-slate-200 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <nav
        id="primary-nav"
        aria-label="Primary"
        className={`${
          isMenuOpen ? "max-h-80 border-t border-white/10 py-3" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-out md:hidden`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 pb-2 sm:px-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded px-2 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition md:px-0 md:py-0 ${
                  isActive ? "text-brand" : "text-slate-200 hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
