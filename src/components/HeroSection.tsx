import React, { useState, useEffect } from "react";
import { Calendar, Clock, Award, Star, ArrowRight, Percent, Landmark, Sparkles, Flame, CheckCircle, BookOpen, Divide } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
  seatsLeft: number;
}

export default function HeroSection({ onCtaClick, seatsLeft }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    // Set target date to July 26, 2026 at 4:00 PM (16:00) IST
    const targetDate = new Date("2026-07-26T16:00:00+05:30").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft(prev => ({ ...prev, isOver: true }));
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isOver: false });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero-section" className="relative overflow-hidden bg-slate-50 pt-16 pb-24 px-4 md:px-6">
      {/* Decorative Floating Math Symbols */}
      <div className="absolute top-16 left-6 md:left-20 opacity-25 hover:opacity-50 transition-opacity animate-float-slow select-none pointer-events-none" style={{ color: "#EE5A24" }}>
        <Percent size={44} strokeWidth={1.5} />
      </div>
      <div className="absolute top-48 right-6 md:right-24 opacity-20 hover:opacity-50 transition-opacity animate-float-medium select-none pointer-events-none" style={{ color: "#EE5A24" }}>
        <Divide size={56} strokeWidth={1.5} />
      </div>
      <div className="absolute bottom-20 left-10 md:left-32 opacity-15 hover:opacity-45 transition-opacity animate-float-medium select-none pointer-events-none hidden sm:block" style={{ color: "#EE5A24" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12">
          <path d="M4 4h16M7 4v16M17 4v16M17 20a3 3 0 0 0 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-12 md:right-40 opacity-15 hover:opacity-45 transition-opacity animate-float-slow select-none pointer-events-none hidden sm:block" style={{ color: "#EE5A24" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-14 h-14">
          <path d="M3 12h2l3 8 4-16h9" strokeLinecap="round" strokeLinejoin="round" />
          <text x="13" y="16" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="currentColor">x²</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Messaging & Action */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
              <Calendar size={13} style={{ color: "#EE5A24" }} />
              Live Interactive Workshop • July 26
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border" style={{ backgroundColor: "rgba(238, 90, 36, 0.05)", color: "#EE5A24", borderColor: "rgba(238, 90, 36, 0.1)" }}>
              <Clock size={13} style={{ color: "#EE5A24" }} />
              90 Minutes
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{ color: "#0A1F33" }} id="hero-title">
            Math Made <span style={{ color: "#EE5A24" }}>Practical</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: "#4A4A4A" }}>
            A practical approach to mathematics for Classes 7th–10th, designed to build lasting confidence through real-world application, not rote memorization.
          </p>

          {/* Interactive Info Ticker */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 pt-2 text-left">
            <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm flex items-start gap-2.5">
              <Award style={{ color: "#EE5A24" }} className="shrink-0 animate-pulse" size={18} />
              <div>
                <h4 className="text-xs font-bold" style={{ color: "#0A1F33" }}>Certificate</h4>
                <p className="text-[10px]" style={{ color: "#4A4A4A" }}>Upon completion</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm flex items-start gap-2.5">
              <BookOpen style={{ color: "#EE5A24" }} className="shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold" style={{ color: "#0A1F33" }}>Resources</h4>
                <p className="text-[10px]" style={{ color: "#4A4A4A" }}>Syllabus & notes</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm flex items-start gap-2.5">
              <Landmark style={{ color: "#EE5A24" }} className="shrink-0" size={18} />
              <div>
                <h4 className="text-xs font-bold" style={{ color: "#0A1F33" }}>Price</h4>
                <p className="text-[10px]" style={{ color: "#4A4A4A" }}>₹99 only</p>
              </div>
            </div>
          </div>

          {/* Core CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={onCtaClick}
              className="w-full sm:w-auto text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-lg hover:opacity-95 hover:translate-y-[-2px] active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              style={{ backgroundColor: "#EE5A24" }}
              id="hero-primary-cta"
            >
              Reserve My Seat for ₹99
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col items-center sm:items-start text-xs font-semibold" style={{ color: "#4A4A4A" }}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#EE5A24" color="#EE5A24" />
                ))}
                <span className="font-extrabold ml-1" style={{ color: "#0A1F33" }}>4.9/5 Rating</span>
              </div>
              <span className="text-[11px] mt-0.5">Loved by 12,000+ students and parents</span>
            </div>
          </div>

        </div>

        {/* Right Column: Countdown Bento Widget & Visual Proof */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          
          {/* Countdown Bento Card */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 relative">
            <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-3 text-white font-extrabold text-[11px] px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider animate-bounce" style={{ backgroundColor: "#EE5A24" }}>
              Seats Filling Fast
            </div>
            
            <h3 className="font-display font-bold text-center mb-4 text-sm tracking-wide uppercase flex items-center justify-center gap-1.5" style={{ color: "#0A1F33" }}>
              <Clock className="animate-spin-slow" size={18} style={{ color: "#EE5A24" }} />
              Live Workshop Countdown
            </h3>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-1">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#0A1F33" }}>
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#4A4A4A" }}>Days</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-1">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#0A1F33" }}>
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#4A4A4A" }}>Hrs</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-1">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl" style={{ color: "#0A1F33" }}>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#4A4A4A" }}>Mins</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl py-3 px-1">
                <span className="block font-display font-extrabold text-2xl sm:text-3xl animate-pulse" style={{ color: "#EE5A24" }}>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "#4A4A4A" }}>Secs</span>
              </div>
            </div>

            {/* Quick Details List */}
            <div className="mt-6 border-t border-slate-100 pt-4 space-y-3.5">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium" style={{ color: "#4A4A4A" }}>Session Date:</span>
                <span className="font-extrabold" style={{ color: "#0A1F33" }}>
                  Sunday, July 26, 2026
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium" style={{ color: "#4A4A4A" }}>Session Time:</span>
                <span className="font-extrabold text-right" style={{ color: "#0A1F33" }}>
                  4:00 PM – 5:30 PM (IST)
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium" style={{ color: "#4A4A4A" }}>Platform:</span>
                <span className="font-bold px-2 py-0.5 rounded text-xs border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
                  Live Interactive Zoom
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium" style={{ color: "#4A4A4A" }}>Reservation Fee:</span>
                <span className="font-black text-lg" style={{ color: "#EE5A24" }}>
                  ₹99 <span className="text-xs text-slate-400 line-through font-normal">₹499</span>
                </span>
              </div>
            </div>

            {/* Registration Progress */}
            <div className="mt-5 rounded-2xl p-3 text-center border" style={{ backgroundColor: "rgba(238, 90, 36, 0.03)", borderColor: "rgba(238, 90, 36, 0.15)" }}>
              <p className="text-xs font-bold flex items-center justify-center gap-1.5" style={{ color: "#0A1F33" }}>
                <Flame size={14} className="animate-bounce" style={{ color: "#EE5A24" }} />
                Only <span style={{ color: "#EE5A24" }}>{seatsLeft} seats</span> left to keep classes interactive!
              </p>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 animate-pulse"
                  style={{ width: `${Math.max(10, (seatsLeft / 100) * 100)}%`, backgroundColor: "#EE5A24" }}
                />
              </div>
            </div>

            {/* CTA in Bento */}
            <button
              onClick={onCtaClick}
              className="mt-4 w-full text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md hover:opacity-90 transition-all cursor-pointer text-sm uppercase tracking-wider flex items-center justify-center gap-1.5"
              style={{ backgroundColor: "#0A1F33" }}
              id="hero-bento-cta"
            >
              Secure My Spot Now (₹99)
            </button>
          </div>

          {/* Social proof helper card */}
          <div className="text-white p-4 rounded-2xl flex items-center gap-3 shadow-md" style={{ backgroundColor: "#0A1F33" }}>
            <div className="p-2 rounded-xl" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <Star fill="#EE5A24" color="#EE5A24" size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#EE5A24" }}>Guaranteed Practical Value</p>
              <p className="text-xs italic font-medium text-slate-200 mt-1 leading-relaxed">
                "My son used to struggle with word problems. After one of Edunura's sessions, he was happily calculating discounts and bill splits on his own!"
              </p>
              <p className="text-[10px] font-bold mt-1" style={{ color: "#EE5A24" }}>— Anjali M., Parent of Class 8 Student</p>
            </div>
          </div>

        </div>

        {/* Dynamic bottom badge */}
        <div className="lg:col-span-12 pt-6 mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: "#EE5A24" }} />
            <span className="text-xs font-semibold text-[#0A1F33]">90 Mins Interactive Class</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: "#EE5A24" }} />
            <span className="text-xs font-semibold text-[#0A1F33]">Live Doubt Solving</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: "#EE5A24" }} />
            <span className="text-xs font-semibold text-[#0A1F33]">Curriculum Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} style={{ color: "#EE5A24" }} />
            <span className="text-xs font-semibold text-[#0A1F33]">Free Class Worksheets</span>
          </div>
        </div>

      </div>
    </section>
  );
}
