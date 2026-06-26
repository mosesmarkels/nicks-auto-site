"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star, Shield, Award } from "lucide-react";
import dynamic from "next/dynamic";
import { img } from "@/lib/img";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 640);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* 3D canvas background — desktop only */}
      {isDesktop && (
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Scene3D />
        </div>
      )}
      {/* Mobile background — real shop photo */}
      <div className="sm:hidden" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img src={img("/photos/building.jpg")} alt="Nick's Auto Repair" className="w-full h-full object-cover opacity-30" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.95) 100%)" }} />
      </div>

      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(220,38,38,0.08) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 60%)",
          pointerEvents: "none",
        }}
      />
      {/* Left edge gradient */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "33%", zIndex: 1, background: "linear-gradient(90deg, rgba(8,8,8,1) 0%, transparent 100%)", pointerEvents: "none" }} />
      {/* Right edge gradient */}
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "33%", zIndex: 1, background: "linear-gradient(270deg, rgba(8,8,8,1) 0%, transparent 100%)", pointerEvents: "none" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/30 text-[#EF4444] text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-6 whitespace-nowrap">
            <Shield className="w-3 h-3 shrink-0" />
            ASE Certified · Boulder, CO · Since 1977
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            Boulder&apos;s Most{" "}
            <span className="gradient-text">Trusted</span>
            <br />
            Auto Repair
          </h1>

          {/* Sub */}
          <p className="text-lg text-[#A1A1AA] max-w-xl leading-relaxed mb-10">
            Family owned and operated since 1977. Honest diagnostics, fair prices,
            and repairs done right — guaranteed. No surprises, just results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="tel:3034994300"
              className="flex items-center justify-center gap-3 bg-[#DC2626] hover:bg-[#EF4444] text-white font-bold px-7 py-4 rounded transition-all duration-200"
              style={{ boxShadow: "0 0 30px rgba(220,38,38,0.35)" }}
            >
              <Phone className="w-5 h-5" />
              (303) 499-4300
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 border border-[#252525] hover:border-[#DC2626]/50 text-white font-semibold px-7 py-4 rounded transition-all duration-200 hover:bg-[#DC2626]/5"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust row — 2-col grid on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-3 sm:gap-6 pb-16 sm:pb-0">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#EA580C] text-[#EA580C]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-[#A1A1AA]">4.8 · 200+ reviews</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA]">
              <Award className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              NAPA AutoCare
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA]">
              <Phone className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              ASE Certified
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#A1A1AA]">
              <Star className="w-3.5 h-3.5 text-[#EA580C] shrink-0" />
              Mon–Fri 7:30–5pm
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", zIndex: 10,
          background: "linear-gradient(to bottom, transparent, rgba(8,8,8,1))",
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#52525B] uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#DC2626] to-transparent"
        />
      </motion.div>
    </section>
  );
}
