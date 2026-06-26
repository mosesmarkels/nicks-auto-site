"use client";

const stats = [
  { value: "47+", label: "Years in Business" },
  { value: "20K+", label: "Vehicles Repaired" },
  { value: "ASE", label: "Certified Technicians" },
  { value: "4.8★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section
      className="relative py-12 border-y border-[#252525] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #111111 0%, #0d0d0d 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black gradient-text mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-[#A1A1AA] uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DC2626] to-transparent" />
    </section>
  );
}
