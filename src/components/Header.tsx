"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, Plane, X, ChevronDown, Calendar, Hotel, Map } from "lucide-react";
import { navLinks, tripMeta, type NavItem } from "@/data/trip";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 text-offwhite shadow-lg shadow-navy/25 backdrop-blur-md"
          : "bg-navy/80 lg:bg-transparent text-offwhite backdrop-blur-sm lg:backdrop-blur-none",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/#inicio" className="group flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition group-hover:bg-gold-soft">
            <Plane className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span className="truncate font-display text-base font-semibold tracking-tight sm:text-lg">
            {tripMeta.portalName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" ref={dropdownRef}>
          {navLinks.map((link) => {
            if (link.children && link.children.length > 0) {
              const isMenuOpen = dropdownOpen === link.label;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(isMenuOpen ? null : link.label)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition",
                      isMenuOpen
                        ? "bg-white/15 text-gold-soft"
                        : "text-offwhite/85 hover:bg-white/10 hover:text-gold-soft",
                    )}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isMenuOpen && "rotate-180 text-gold-soft",
                      )}
                    />
                  </button>

                  {/* Dropdown Popover */}
                  {isMenuOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="w-72 rounded-2xl border border-white/15 bg-navy/98 p-2 shadow-2xl backdrop-blur-xl ring-1 ring-black/20">
                        {link.children.map((sub) => {
                          const isItinerary = sub.href.includes("itinerario");
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setDropdownOpen(null)}
                              className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-white/10"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold border border-gold/30 group-hover:bg-gold group-hover:text-navy transition">
                                {isItinerary ? (
                                  <Map className="h-4 w-4" />
                                ) : (
                                  <Hotel className="h-4 w-4" />
                                )}
                              </div>
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-offwhite group-hover:text-gold-soft">
                                  {sub.label}
                                </p>
                                {sub.description && (
                                  <p className="text-xs text-offwhite/60 line-clamp-2">
                                    {sub.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href || "#"}
                className="rounded-full px-3 py-2 text-sm font-medium text-offwhite/80 transition hover:bg-white/10 hover:text-gold-soft"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="border-t border-white/10 bg-navy/98 px-4 py-5 backdrop-blur-md lg:hidden max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <div key={link.label} className="rounded-xl bg-white/5 p-3">
                    <p className="px-2 text-xs font-bold uppercase tracking-wider text-gold-soft">
                      {link.label}
                    </p>
                    <div className="mt-2 flex flex-col gap-1">
                      {link.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-offwhite hover:bg-white/10 hover:text-gold-soft"
                          onClick={() => setOpen(false)}
                        >
                          {sub.href.includes("itinerario") ? (
                            <Map className="h-4 w-4 text-gold" />
                          ) : (
                            <Hotel className="h-4 w-4 text-gold" />
                          )}
                          <span>{sub.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href || "#"}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-offwhite/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
