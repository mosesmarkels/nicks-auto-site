import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t border-[#252525]"
      style={{ background: "#050505" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-[#DC2626] flex items-center justify-center font-black text-white">
                N
              </div>
              <span className="font-bold text-white">Nick&apos;s Auto Repair</span>
            </div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Family owned. ASE certified. Honest service since 1977.
              Serving Boulder, Louisville &amp; Lafayette, CO.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              {[
                "Brake Repair",
                "Oil Changes",
                "Engine Repair",
                "A/C Service",
                "Transmission",
                "Wheel Alignment",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#A1A1AA]">
              <a href="tel:3034994300" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#DC2626]" />
                (303) 499-4300
              </a>
              <a href="mailto:info@nicksautorepairco.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#DC2626]" />
                info@nicksautorepairco.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                <span>
                  2800 Moorhead Ave
                  <br />
                  Boulder, CO 80303
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DC2626] mt-0.5 shrink-0" />
                <span>
                  Mon–Fri 7:30am–5pm
                  <br />
                  Sat 7:30am–3pm
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#252525] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
          <span>© 2025 Nick&apos;s Auto Repair. All rights reserved.</span>
          <span>
            NAPA AutoCare Center · ASE Certified · Boulder, CO
          </span>
        </div>
      </div>
    </footer>
  );
}
