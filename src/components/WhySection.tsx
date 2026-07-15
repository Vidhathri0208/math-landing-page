import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ChevronRight, X, Brain, HelpCircle, GraduationCap, ShieldAlert } from "lucide-react";

export default function WhySection() {
  const [activeTab, setActiveTab] = useState<"problems" | "comparison">("comparison");

  const comparisons = [
    {
      topic: "Percentages & Interest",
      oldWay: "Memorize: Interest = P × R × T / 100. Solve dry exam sheet exercises without knowing what 'Principal' means in real life.",
      practicalWay: "If you have ₹100 and get a 10% discount on a toy, how much do you actually pay? We calculate real pocket-money savings on things you'd actually buy."
    },
    {
      topic: "Geometry & Shapes",
      oldWay: "Draw static triangles and rectangles on paper, memorizing surface area equations without understanding why they exist.",
      practicalWay: "Measure your study table or notebook and figure out how much space it takes up — using real objects around you, not textbook diagrams."
    },
    {
      topic: "Ratios & Proportions",
      oldWay: "Simplify fractions like a : b = c : d in a notebook. Get confused when integers change.",
      practicalWay: "If you have 5 chocolates and share them equally with 2 friends, how many does each person get? We solve real sharing problems like this."
    },
    {
      topic: "Word Problems",
      oldWay: "Freeze up reading massive text blocks. Blindly guess operations (addition or division) to get any answer quickly.",
      practicalWay: "If you want to buy a game that costs ₹50 and you save ₹5 every day, how many days will it take? We break down word problems into easy everyday questions like this."
    }
  ];

  return (
    <section id="why-section" className="py-20 px-4 md:px-6 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
            The Problem & The Shift
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
            Why Do Students Struggle With Math?
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A4A4A" }}>
            It is not because they are not smart. It is because school often teaches math as boring formulas instead of a fun, real-life toolkit.
          </p>
        </div>

        {/* 2x2 Pain Point Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          <div className="bg-slate-50 border-l-4 rounded-r-2xl rounded-l-md p-6 shadow-sm flex gap-4" style={{ borderLeftColor: "#EE5A24" }}>
            <div className="p-2.5 rounded-xl shrink-0 h-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.1)", color: "#EE5A24" }}>
              <ShieldAlert size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0A1F33" }}>Memorizing Formulas</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                Kids memorize steps just to pass Friday tests, then forget everything by Monday.
              </p>
              <div className="text-xs font-semibold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.06)", color: "#EE5A24" }}>
                Result: They forget everything quickly
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 rounded-r-2xl rounded-l-md p-6 shadow-sm flex gap-4" style={{ borderLeftColor: "#EE5A24" }}>
            <div className="p-2.5 rounded-xl shrink-0 h-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.1)", color: "#EE5A24" }}>
              <HelpCircle size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0A1F33" }}>No Real-World Connection</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                Since math is taught from books, kids do not see how it helps with shopping, sports, or cooking.
              </p>
              <div className="text-xs font-semibold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.06)", color: "#EE5A24" }}>
                Result: No interest in studying
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 rounded-r-2xl rounded-l-md p-6 shadow-sm flex gap-4" style={{ borderLeftColor: "#EE5A24" }}>
            <div className="p-2.5 rounded-xl shrink-0 h-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.1)", color: "#EE5A24" }}>
              <Brain size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0A1F33" }}>Scared of Word Problems</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                When math questions are written as stories, kids get confused and do not know how to solve them.
              </p>
              <div className="text-xs font-semibold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.06)", color: "#EE5A24" }}>
                Result: Exam stress and fear
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 rounded-r-2xl rounded-l-md p-6 shadow-sm flex gap-4" style={{ borderLeftColor: "#EE5A24" }}>
            <div className="p-2.5 rounded-xl shrink-0 h-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.1)", color: "#EE5A24" }}>
              <GraduationCap size={22} />
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-bold text-lg" style={{ color: "#0A1F33" }}>Too Much Pressure</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                Focusing only on grades makes kids afraid of making mistakes. This makes them hate math.
              </p>
              <div className="text-xs font-semibold px-2.5 py-1 rounded w-fit" style={{ backgroundColor: "rgba(238, 90, 36, 0.06)", color: "#EE5A24" }}>
                Result: Math fear that stays for years
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Comparison Framework */}
        <div className="bg-slate-50 rounded-3xl border border-slate-100 p-6 md:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
            <div>
              <h3 className="font-display font-extrabold text-xl" style={{ color: "#0A1F33" }}>
                How Our Workshop Helps
              </h3>
              <p className="text-xs font-semibold" style={{ color: "#4A4A4A" }}>See how we make math easy and fun below</p>
            </div>
            <span className="text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full border flex items-center gap-1.5 shrink-0" style={{ backgroundColor: "rgba(16, 185, 129, 0.05)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
              <CheckCircle2 size={13} className="text-emerald-600" />
              Interactive Solution
            </span>
          </div>

          {/* Comparison Tab Cards */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 border border-slate-100 rounded-2xl p-4 md:p-5 bg-white hover:border-[#EE5A24]/30 hover:shadow-sm transition-all duration-300"
              >
                {/* Concept Title */}
                <div className="lg:col-span-3 flex items-center">
                  <span className="font-display font-extrabold text-base flex items-center gap-2.5" style={{ color: "#0A1F33" }}>
                    <span className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-black" style={{ backgroundColor: "#0A1F33" }}>
                      {index + 1}
                    </span>
                    {item.topic}
                  </span>
                </div>

                {/* Old Way */}
                <div className="lg:col-span-4 bg-red-50/20 border border-red-100/50 rounded-xl p-3 text-xs flex gap-2.5">
                  <X size={16} className="text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-red-800 uppercase tracking-wider text-[9px] mb-1">Old Memorization Way</span>
                    <span className="leading-relaxed font-sans" style={{ color: "#4A4A4A" }}>{item.oldWay}</span>
                  </div>
                </div>

                {/* Transition Indicator */}
                <div className="hidden lg:flex lg:col-span-1 items-center justify-center" style={{ color: "#EE5A24" }}>
                  <ChevronRight size={24} className="animate-pulse" />
                </div>

                {/* New Way */}
                <div className="lg:col-span-4 rounded-xl p-3 text-xs flex gap-2.5 border" style={{ backgroundColor: "rgba(16, 185, 129, 0.02)", borderColor: "rgba(16, 185, 129, 0.1)" }}>
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-emerald-800 uppercase tracking-wider text-[9px] mb-1">The Practical Way</span>
                    <span className="font-semibold leading-relaxed font-sans" style={{ color: "#0A1F33" }}>{item.practicalWay}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
