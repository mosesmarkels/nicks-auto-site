"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Brooke B.",
    role: "7-year customer",
    text: "They are the best. I have gone to them for over 7 years now. They have been kind, caring, honest and efficient. I would trust them with any car repair I need. Thank you to Nick, his beautiful wife Nicole and everyone working there.",
    stars: 5,
  },
  {
    name: "Mike W.",
    role: "23-year customer",
    text: "I've been taking my cars to Nick's Auto Repair for nearly 23 years. They have been very honest, professionally competent and pleasant to work with. Dennis and Jennifer have always been very personable and thorough. I highly recommend them.",
    stars: 5,
  },
  {
    name: "PCH",
    role: "Drives from Denver",
    text: "I've had my water pump, radiator, and all four brakes and rotors replaced at Nick's. Every time they've been honest, quick, and professional. I used to live in Boulder and now live in Denver — if anything goes wrong I still come here because I trust them.",
    stars: 5,
  },
  {
    name: "Ross",
    role: "Boulder customer",
    text: "They went above and beyond. My battery died at work and they were incredibly responsive, gave me transparent pricing, and even helped with warranty concerns. Reasonable rates and I'll be back for all my cars.",
    stars: 5,
  },
  {
    name: "Cody J.",
    role: "Verified repair customer",
    text: "Quality business and trustworthy folks. Nick's did $1,200 of repairs on my '05 Outback including brakes and axle, included a warranty, and when I brought it back with similar symptoms they made good on it without hesitation.",
    stars: 5,
  },
  {
    name: "Sarah G.",
    role: "2-year customer",
    text: "I originally came here for a second opinion after catching another shop trying to sell me repairs I didn't need. They've always been efficient, helpful and honest. Won't go anywhere else.",
    stars: 5,
  },
  {
    name: "Russell H.",
    role: "20-year customer",
    text: "I've been taking my family's vehicles to Nick's Auto Repair for 20 years. Over this entire period I have never been disappointed. My experience with Nick's has always been excellent.",
    stars: 5,
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
            <p className="text-[#A1A1AA] mt-3">Real Google reviews from Boulder-area customers</p>
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
                  <div className="font-semibold text-white text-sm">{review.name}</div>
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
