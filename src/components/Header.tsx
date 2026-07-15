import React, { useState } from "react";
import { Menu, X, Calendar, ShieldCheck } from "lucide-react";
import EdunuraLogo from "./EdunuraLogo";

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Why Us", href: "#why-section" },
    { label: "Who It's For", href: "#audience-section" },
    { label: "Pricing", href: "#pricing-section" },
    { label: "FAQ", href: "#faq-section" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-100 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo block */}
        <a href="#hero-section" className="hover:opacity-90 transition-opacity">
          <EdunuraLogo size="md" hideTagline={true} />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-semibold hover:text-[#EE5A24] transition-colors"
              style={{ color: "#0A1F33" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onCtaClick}
            className="text-white font-extrabold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            style={{ backgroundColor: "#EE5A24" }}
          >
            Register Now • ₹99
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onCtaClick}
            className="text-white font-extrabold text-xs px-3.5 py-2 rounded-lg transition-all cursor-pointer shadow-sm"
            style={{ backgroundColor: "#EE5A24" }}
          >
            ₹99 Seat
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-50 border border-slate-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile drawer overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white py-4 px-6 space-y-4 shadow-inner animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 text-sm font-bold tracking-wide transition-colors"
                style={{ color: "#0A1F33" }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-50 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#4A4A4A] font-bold">
              <span>Next batch date:</span>
              <span className="text-[#0A1F33]">July 26, 2026</span>
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full text-white font-extrabold text-sm py-3 rounded-xl transition-all shadow text-center"
              style={{ backgroundColor: "#EE5A24" }}
            >
              Secure Spot (₹99)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
