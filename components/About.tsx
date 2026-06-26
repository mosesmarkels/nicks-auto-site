"use client";

import { CheckCircle2, Heart, Users, Trophy } from "lucide-react";
import Image from "next/image";

const pillars = [
  { icon: Heart, title: "Family Owned", desc: "Nick's has been a family business since day one. We treat every customer the way we'd treat our own family." },
  { icon: Trophy, title: "ASE Certified", desc: "Our technicians hold current ASE certifications. That's the gold standard of automotive excellence." },
  { icon: Users, title: "Honest Estimates", desc: "We explain everything in plain English before touching your car. No hidden fees, ever." },
];

const guarantees = [
  "No surprise charges — ever",
  "Written estimates before work begins",
  "NAPA parts warranty",
  "Free multi-point inspection with every service",
  "Financing available via NAPA EasyPay",
  "Appointments or walk-ins welcome",
  "Serving Boulder, Louisville & Lafayette CO",
  "Foreign & domestic vehicles welcome",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0d0d0d 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="divider-red mb-5" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Boulder&apos;s Auto Shop{" "}
              <span className="gradient-text">Since 1977</span>
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              Nick&apos;s Auto Repair has been a cornerstone of the Boulder community for over four decades. What started as a small family shop has grown into one of Colorado&apos;s most trusted service centers — but we&apos;ve never lost the personal touch.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed mb-8">
              We believe auto repair shouldn&apos;t feel like a mystery. Our team walks you through every diagnosis, every recommendation, and every invoice — because an informed customer is a happy customer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {guarantees.map((g) => (
                <div key={g} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#A1A1AA]">{g}</span>
                </div>
              ))}
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44 rounded-lg overflow-hidden border border-[#252525]">
                <Image src="/photos/shop1.jpg" alt="Mechanic explaining repairs to customer" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs text-white font-medium">Honest Diagnostics</span>
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-[#252525]">
                <Image src="/photos/shop2.jpg" alt="Team of mechanics inspecting a vehicle" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs text-white font-medium">Expert Team</span>
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-[#252525]">
                <Image src="/photos/welcome.jpg" alt="Happy customer" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs text-white font-medium">Happy Customers</span>
              </div>
              <div className="relative h-44 rounded-lg overflow-hidden border border-[#252525]">
                <Image src="/photos/shop4.jpg" alt="Precision automotive equipment" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs text-white font-medium">Precision Tools</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex gap-5 p-6 rounded-lg bg-[#111111] border border-[#252525] hover:border-[#DC2626]/30 transition-colors group">
                  <div className="w-12 h-12 rounded bg-[#DC2626]/10 flex items-center justify-center shrink-0 group-hover:bg-[#DC2626]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{p.title}</h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Hours card */}
            <div className="p-6 rounded-lg border border-[#252525] bg-[#111111]">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A1A1AA]">Monday – Friday</span>
                  <span className="text-white font-medium">7:30am – 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A1A1AA]">Saturday</span>
                  <span className="text-white font-medium">7:30am – 3:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A1A1AA]">Sunday</span>
                  <span className="text-[#52525B]">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#252525] text-sm text-[#A1A1AA]">
                📍 2800 Moorhead Ave, Boulder, CO 80303
              </div>
            </div>

            {/* NAPA EasyPay */}
            <div className="p-5 rounded-lg border border-[#DC2626]/20 bg-[#DC2626]/5">
              <p className="text-sm font-semibold text-white mb-1">💳 NAPA EasyPay Financing Available</p>
              <p className="text-xs text-[#A1A1AA]">Need help covering a big repair? Ask us about flexible financing options through NAPA EasyPay.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
