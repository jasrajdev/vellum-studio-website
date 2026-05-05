"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuLinks = [
  { href: "#work", label: "Work" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "/contact", label: "Contact" },
];

const navChipClassName =
  "inline-flex items-center cursor-pointer rounded-sm bg-[#F2F0E9]/30 px-3 py-1.5 text-[#2C2C2B] backdrop-blur-sm transition-all duration-500 ease-out hover:opacity-70 hover:tracking-wider";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setMenuVisible(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      {
        threshold: [0.2, 0.35, 0.6],
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="pointer-events-auto flex items-start justify-between px-6 py-6 md:px-10">
          <Link
            href="/"
            className={`${navChipClassName} font-serif text-lg font-normal tracking-[0.08em]`}
          >
            VELLUM
          </Link>

          <button
            type="button"
            className={`${navChipClassName} font-sans text-xs uppercase tracking-[0.3em] ${
              menuVisible ? "opacity-100" : "opacity-45"
            }`}
            aria-expanded={menuOpen}
            aria-controls="vellum-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            MENU
          </button>
        </div>
      </header>

      <div
        id="vellum-menu"
        className={`fixed inset-0 z-40 flex items-center justify-center bg-[#F2F0E9] transition-opacity duration-[800ms] ease-out ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Primary" className="px-6 text-center">
          <ul className="space-y-8 md:space-y-10">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="cursor-pointer font-serif text-4xl font-light text-[#2C2C2B] transition-all duration-500 ease-out hover:opacity-70 hover:tracking-wider md:text-6xl"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#F2F0E9] px-6 pb-8 pt-20 md:px-20 md:pb-12 md:pt-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="overflow-hidden rounded-sm">
            <div className="relative mx-auto h-[70vh] overflow-hidden rounded-sm md:h-[80vh]">
              <video
                className="h-full w-full scale-95 object-cover object-center md:object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
