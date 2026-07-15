import React, { useState, useEffect } from "react";
import { Sparkles, Users } from "lucide-react";

interface NotificationBannerProps {
  onCtaClick: () => void;
  seatsLeft: number;
}

export default function NotificationBanner({ onCtaClick, seatsLeft }: NotificationBannerProps) {
  return (
    <div className="text-white text-sm py-2.5 px-4 shadow-md border-b border-white/10" style={{ backgroundColor: "#0A1F33" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full animate-pulse uppercase" style={{ backgroundColor: "#EE5A24" }}>
            Special Offer
          </span>
          <p className="text-center sm:text-left text-slate-100">
            Join the Interactive 90-Min Workshop for only <strong className="font-extrabold" style={{ color: "#EE5A24" }}>₹99</strong> instead of <span className="line-through opacity-70">₹499</span>!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-semibold text-slate-200">
            <Users size={14} className="animate-pulse" style={{ color: "#EE5A24" }} />
            <span>Only <strong className="text-white font-bold">{seatsLeft} seats</strong> left!</span>
          </div>
          <button
            onClick={onCtaClick}
            className="text-white text-[12px] font-extrabold px-3.5 py-1 rounded-md transition-all duration-300 cursor-pointer shadow-sm hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#EE5A24" }}
            id="banner-cta"
          >
            Claim Seat
          </button>
        </div>
      </div>
    </div>
  );
}
