"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#080808]/95 backdrop-blur-md ${
        scrolled ? "border-b border-[#252525]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-[#DC2626] flex items-center justify-center font-black text-white text-lg leading-none">
            N
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base leading-tight">
              Nick&apos;s Auto Repair
            </span>
            <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest">
              Boulder, CO · Since 1977
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:3034994300"
            className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#EF4444] transition-colors"
          >
            <Phone className="w-4 h-4" />
            (303) 499-4300
          </a>
          <a
            href="#contact"
            className="bg-[#DC2626] hover:bg-[#EF4444] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#111111] border-b border-[#252525] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#A1A1AA] hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:3034994300"
                className="flex items-center gap-2 text-white font-medium"
              >
                <Phone className="w-4 h-4 text-[#DC2626]" />
                (303) 499-4300
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-[#DC2626] text-white font-semibold text-center py-3 rounded"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
