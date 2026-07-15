import React from "react";
import { GraduationCap, Award, CheckCircle2, Quote, BookOpen } from "lucide-react";

export default function InstructorSection() {
  return (
    <section id="instructor-section" className="py-20 px-4 md:px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
            Meet the Founder
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
            Deepika B
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A4A4A" }}>
            Helping students learn better with simple and high-quality online classes.
          </p>
        </div>

        {/* Biography Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-6 md:p-10 border border-slate-100" style={{ backgroundColor: "rgba(10, 31, 51, 0.02)" }}>
          
          {/* Visual Avatar block */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative">
              {/* Outer decorative halo */}
              <div className="absolute inset-0 rounded-2xl blur-lg opacity-25 animate-pulse" style={{ backgroundColor: "#EE5A24" }} />
              
              {/* Main Avatar */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-white border-4 border-white" style={{ backgroundColor: "#0A1F33" }}>
                <span className="text-6xl font-display font-black tracking-wide">DB</span>
                <span className="text-xs tracking-widest uppercase font-mono mt-2" style={{ color: "#EE5A24" }}>Founder</span>
              </div>

              {/* Float-badge 1 */}
              <div className="absolute -top-3 -right-3 bg-white px-3.5 py-1.5 rounded-xl shadow-md border text-xs font-bold flex items-center gap-1.5" style={{ color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
                <GraduationCap size={14} style={{ color: "#EE5A24" }} />
                <span>Founder, Edunura</span>
              </div>

              {/* Float-badge 2 */}
              <div className="absolute -bottom-3 -left-3 text-white px-3.5 py-1.5 rounded-xl shadow-md text-xs font-bold flex items-center gap-1.5" style={{ backgroundColor: "#EE5A24" }}>
                <Award size={14} />
                <span>Business Leader</span>
              </div>
            </div>

            <h3 className="font-display font-black text-2xl mt-8 mb-1" style={{ color: "#0A1F33" }}>
              Deepika B
            </h3>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#EE5A24" }}>
              Founder, Edunura
            </p>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quote Block */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-3 opacity-10" size={48} style={{ color: "#0A1F33" }} />
              <p className="relative z-10 text-base sm:text-lg italic leading-relaxed font-sans font-medium pl-6" style={{ color: "#0A1F33" }}>
                "I started Edunura to make online learning simple and high-quality for everyone. We help students succeed in school, sports, arts, and personal growth."
              </p>
            </div>

            {/* Credentials Bullets */}
            <div className="space-y-4 pt-2">
              <h4 className="font-display font-bold text-sm tracking-wide uppercase flex items-center gap-2" style={{ color: "#0A1F33" }}>
                <BookOpen size={16} style={{ color: "#EE5A24" }} />
                About Deepika B
              </h4>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                    <strong style={{ color: "#0A1F33" }}>Founder of Edunura</strong>: She created Edunura, an online platform that helps people learn academics, fitness, arts, and life skills.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                    <strong style={{ color: "#0A1F33" }}>Leader at Big Fish Cinemas</strong>: Experienced business leader who works with movie platforms and digital distribution channels.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A" }}>
                    <strong style={{ color: "#0A1F33" }}>Corporate Experience</strong>: Worked as a Sales Officer at Unilever, learning how to lead teams and grow businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Micro proof counts */}
            <div className="grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: "rgba(10, 31, 51, 0.1)" }}>
              <div className="text-center sm:text-left">
                <span className="block font-display font-black text-2xl" style={{ color: "#EE5A24" }}>4+</span>
                <span className="text-[10px] uppercase font-bold" style={{ color: "#4A4A4A" }}>Industries</span>
              </div>
              <div className="text-center sm:text-left border-x px-2" style={{ borderColor: "rgba(10, 31, 51, 0.1)" }}>
                <span className="block font-display font-black text-2xl" style={{ color: "#0A1F33" }}>3+</span>
                <span className="text-[10px] uppercase font-bold" style={{ color: "#4A4A4A" }}>Ventures</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block font-display font-black text-2xl" style={{ color: "#EE5A24" }}>1</span>
                <span className="text-[10px] uppercase font-bold" style={{ color: "#4A4A4A" }}>Platform</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
