"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ross",
    role: "Boulder customer",
    text: "They went above and beyond. My battery died at work and they were incredibly responsive, gave me transparent pricing, and even helped with warranty concerns. Reasonable rates and I'll be back for all my cars.",
    stars: 5,
    verified: true,
  },
  {
    name: "Sarah M.",
    role: "Boulder resident",
    text: "Nick's has been my go-to shop for 12 years. They're honest, fast, and never try to upsell you on things you don't need. Rare to find that anymore.",
    stars: 5,
    verified: false,
  },
  {
    name: "James T.",
    role: "CU Boulder staff",
    text: "Brought in my truck with a mystery noise. They diagnosed it in 20 minutes, gave me a clear estimate, and had it fixed same day. Couldn't be happier.",
    stars: 5,
    verified: false,
  },
  {
    name: "Laura K.",
    role: "Boulder local",
    text: "The team here is genuinely trustworthy. They called me before doing any extra work and explained everything. My car runs better than it has in years.",
    stars: 5,
    verified: false,
  },
  {
    name: "Mike R.",
    role: "Louisville, CO",
    text: "Moved from Denver and was nervous about finding a new mechanic. Nick's made it easy — professional shop, friendly staff, and my car was ready when promised.",
    stars: 5,
    verified: false,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const visible = [
    reviews[idx % reviews.length],
    reviews[(idx + 1) % reviews.length],
    reviews[(idx + 2) % reviews.length],
  ];

  return (
    <section
      id="testimonials"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="divider-red mb-5" />
            <h2 className="text-4xl md:text-5xl font-black text-white">
              What Customers <span className="gradient-text">Say</span>
            </h2>
            <p className="text-[#A1A1AA] mt-3">Real reviews from real Boulder-area customers</p>
          </div>
          <div className="flex gap-3">
            <button onClick={prev} className="w-11 h-11 rounded border border-[#252525] flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#DC2626]/40 transition-all cursor-pointer" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-11 h-11 rounded border border-[#252525] flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#DC2626]/40 transition-all cursor-pointer" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((review, i) => (
            <div
              key={`${idx}-${i}`}
              className={`p-6 rounded-lg border ${i === 1 ? "bg-[#DC2626]/8 border-[#DC2626]/30" : "bg-[#111111] border-[#252525]"}`}
            >
              <Quote className="w-8 h-8 text-[#DC2626]/40 mb-4" />
              <p className="text-[#D4D4D8] text-base leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-sm">{review.name}</span>
                    {review.verified && <span className="text-[10px] bg-[#DC2626]/20 text-[#EF4444] px-1.5 py-0.5 rounded font-medium">Verified</span>}
                  </div>
                  <div className="text-xs text-[#A1A1AA]">{review.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[#EA580C] text-[#EA580C]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-8 justify-center">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${i === idx ? "bg-[#DC2626] w-6" : "bg-[#252525] w-1.5 hover:bg-[#DC2626]/40"}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
