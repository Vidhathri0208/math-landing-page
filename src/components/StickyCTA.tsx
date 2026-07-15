import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Clock, ArrowRight, Flame } from "lucide-react";

interface StickyCtaProps {
  onCtaClick: () => void;
  seatsLeft: number;
}

export default function StickyCta({ onCtaClick, seatsLeft }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA if scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-100 py-3.5 px-4 shadow-xl backdrop-blur-md animate-fade-in-up print:hidden">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between gap-4">
        
        {/* Left Side: Summary meta details */}
        <div className="flex-col hidden sm:flex text-left">
          <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Math Made Practical</span>
          </div>
          <p className="text-sm font-black mt-0.5" style={{ color: "#0A1F33" }}>
            July 26 Live • ₹99 Only <span className="text-xs text-slate-400 line-through font-normal">₹499</span>
          </p>
        </div>

        {/* Middle/Left Side: Seats Indicator */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Seat Availability</span>
          <p className="text-xs font-extrabold flex items-center gap-1" style={{ color: "#EE5A24" }}>
            <Flame size={12} className="animate-pulse" />
            <span>{seatsLeft} seats remaining!</span>
          </p>
        </div>

        {/* Right Side: Heavy CTA Action */}
        <button
          onClick={onCtaClick}
          className="text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 shrink-0"
          style={{ backgroundColor: "#EE5A24" }}
          id="sticky-checkout-btn"
        >
          <span>Claim Seat for ₹99</span>
          <ArrowRight size={14} />
        </button>

      </div>
    </div>
  );
}
