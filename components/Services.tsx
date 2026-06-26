"use client";

import { img } from "@/lib/img";
import {
  Wrench, Settings, Wind, Zap, Car, Droplets, AlertTriangle, RotateCcw,
  Battery, Lightbulb, Fuel, Thermometer, ShieldCheck, Gauge,
} from "lucide-react";

const services = [
  { icon: AlertTriangle, title: "Brake Repair", desc: "Complete brake system service — pads, rotors, calipers, and fluid. Safety you can count on.", highlight: true },
  { icon: Droplets, title: "Oil Changes", desc: "Quick, thorough oil and filter changes with a multi-point inspection included every time.", highlight: false },
  { icon: Settings, title: "Engine Repair", desc: "From minor tune-ups to major overhauls. We diagnose accurately so you only pay for what's needed.", highlight: false },
  { icon: Wind, title: "A/C Service", desc: "Recharge, repair, and diagnose your climate control system — stay comfortable year-round.", highlight: false },
  { icon: RotateCcw, title: "Transmission", desc: "Full transmission service, repairs, and fluid changes for automatic and manual vehicles.", highlight: false },
  { icon: Car, title: "Wheel Alignment", desc: "Precision computerized alignment extends tire life and improves handling significantly.", highlight: false },
  { icon: Zap, title: "Computer Diagnostics", desc: "Advanced OBD scanning to pinpoint issues fast — no guesswork, no unnecessary parts.", highlight: true },
  { icon: Wrench, title: "Suspension & Exhaust", desc: "Shocks, struts, mufflers, and full exhaust system service for a smooth, quiet ride.", highlight: false },
  { icon: Battery, title: "Battery Service", desc: "Battery testing, replacement, and charging system inspection to keep you on the road.", highlight: false },
  { icon: Thermometer, title: "Cooling System", desc: "Coolant flush, radiator repair, and thermostat replacement to prevent overheating.", highlight: false },
  { icon: Fuel, title: "Fuel Injection", desc: "Fuel injection cleaning and service to restore performance and improve fuel economy.", highlight: false },
  { icon: Lightbulb, title: "Electrical Work", desc: "Lighting, wiring, sensors, and electrical system diagnostics for all vehicle makes.", highlight: false },
  { icon: ShieldCheck, title: "CV Axles & Clutch", desc: "CV axle replacement and clutch repair for front-wheel drive and manual transmission vehicles.", highlight: false },
  { icon: Gauge, title: "Preventive Maintenance", desc: "Belts, hoses, filters, fluids — everything to keep your car running before problems start.", highlight: false },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Faint shop photo in background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={img("/photos/shop2.jpg")} alt="" className="w-full h-full object-cover opacity-[0.04]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="divider-red mb-5" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            What We <span className="gradient-text">Fix</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg max-w-xl">
            Full-service auto repair for foreign and domestic vehicles — with over four decades of expertise. If your car has a problem, we&apos;ve seen it and fixed it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`group relative p-6 rounded-lg border transition-all duration-300 cursor-default ${
                  svc.highlight
                    ? "bg-[#DC2626]/8 border-[#DC2626]/30 hover:border-[#DC2626]/60"
                    : "bg-[#111111] border-[#252525] hover:border-[#DC2626]/30 hover:bg-[#141414]"
                }`}
              >
                {svc.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />
                )}
                <div className={`w-10 h-10 rounded flex items-center justify-center mb-4 transition-colors ${
                  svc.highlight
                    ? "bg-[#DC2626]/20 text-[#EF4444]"
                    : "bg-[#1a1a1a] text-[#A1A1AA] group-hover:text-[#EF4444] group-hover:bg-[#DC2626]/10"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{svc.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{svc.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Photo strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: "/photos/shop1.jpg", label: "Honest Diagnostics" },
            { src: "/photos/car.jpg", label: "All Makes & Models" },
            { src: "/photos/cars-lot.jpg", label: "Foreign & Domestic" },
            { src: "/photos/welcome.jpg", label: "Happy Customers" },
          ].map((p) => (
            <div key={p.src} className="relative h-32 rounded-lg overflow-hidden border border-[#252525]">
              <img src={img(p.src)} alt={p.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-3 text-[11px] text-white font-medium">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-[#A1A1AA]">Not sure what your car needs? We&apos;ll diagnose it honestly.</p>
          <a href="tel:3034994300" className="text-[#EF4444] font-semibold hover:text-white transition-colors flex items-center gap-1">
            Call for a free estimate →
          </a>
        </div>
      </div>
    </section>
  );
}
