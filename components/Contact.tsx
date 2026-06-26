"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, Mail } from "lucide-react";
import { img } from "@/lib/img";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", vehicle: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top CTA bar */}
        <div
          className="relative flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-xl overflow-hidden mb-16"
          style={{ boxShadow: "0 0 60px rgba(220,38,38,0.3)" }}
        >
          <img src={img("/photos/building.jpg")} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-20" />
          <div className="absolute inset-0 bg-[#DC2626]/90" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1">Ready to get your car fixed?</h2>
            <p className="text-white/80">Call us now or drop by — no appointment needed.</p>
          </div>
          <a href="tel:3034994300" className="relative z-10 flex items-center gap-3 bg-white text-[#DC2626] font-bold px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors shrink-0">
            <Phone className="w-5 h-5" />
            (303) 499-4300
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <span className="divider-red mb-5" />
            <h2 className="text-4xl font-black text-white mb-6">
              Visit <span className="gradient-text">Us</span>
            </h2>
            <p className="text-[#A1A1AA] mb-10 leading-relaxed">
              Located in south Boulder, just off Moorhead Ave. Walk-ins welcome, or call ahead to schedule your appointment. Proudly serving Boulder, Louisville, and Lafayette, CO.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#DC2626]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-0.5">Address</div>
                  <div className="text-[#A1A1AA] text-sm">2800 Moorhead Ave<br />Boulder, CO 80303</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#DC2626]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-0.5">Phone</div>
                  <a href="tel:3034994300" className="text-[#A1A1AA] hover:text-white transition-colors text-sm">(303) 499-4300</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#DC2626]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-0.5">Email</div>
                  <a href="mailto:info@nicksautorepairco.com" className="text-[#A1A1AA] hover:text-white transition-colors text-sm">info@nicksautorepairco.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded bg-[#DC2626]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-2">Hours</div>
                  <div className="text-[#A1A1AA] text-sm space-y-1">
                    <div className="flex gap-8"><span>Mon – Fri</span><span className="text-white">7:30am – 5:00pm</span></div>
                    <div className="flex gap-8"><span>Saturday</span><span className="text-white">7:30am – 3:00pm</span></div>
                    <div className="flex gap-8"><span>Sunday</span><span className="text-[#52525B]">Closed</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden border border-[#252525] h-48">
              <iframe
                title="Nick's Auto Repair location"
                src="https://maps.google.com/maps?q=2800+Moorhead+Ave,+Boulder,+CO+80303&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#111111] border border-[#252525] rounded-xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#DC2626] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-[#A1A1AA]">We&apos;ll get back to you within a few hours. Or call us directly at (303) 499-4300.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-6">Schedule a Service</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#A1A1AA] mb-1.5 font-medium uppercase tracking-wider">Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#252525] rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#DC2626]/60 transition-colors placeholder:text-[#52525B]" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs text-[#A1A1AA] mb-1.5 font-medium uppercase tracking-wider">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#252525] rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#DC2626]/60 transition-colors placeholder:text-[#52525B]" placeholder="(303) 555-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5 font-medium uppercase tracking-wider">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#252525] rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#DC2626]/60 transition-colors placeholder:text-[#52525B]" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5 font-medium uppercase tracking-wider">Vehicle</label>
                    <input type="text" value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#252525] rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#DC2626]/60 transition-colors placeholder:text-[#52525B]" placeholder="2019 Toyota Camry" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#A1A1AA] mb-1.5 font-medium uppercase tracking-wider">Issue / Service Needed</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-[#1a1a1a] border border-[#252525] rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-[#DC2626]/60 transition-colors placeholder:text-[#52525B] resize-none" placeholder="Describe the problem or service you need..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#EF4444] text-white font-bold py-4 rounded transition-colors" style={{ boxShadow: "0 0 20px rgba(220,38,38,0.2)" }}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-xs text-[#52525B] text-center">
                    Or call us directly at{" "}
                    <a href="tel:3034994300" className="text-[#A1A1AA] hover:text-white transition-colors">(303) 499-4300</a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
