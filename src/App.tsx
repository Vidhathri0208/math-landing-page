import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle, Flame, Users, Calendar, Award, ArrowRight, ShieldCheck, Mail, Phone, RefreshCw, Star, HelpCircle, BookOpen, UserCheck, Play, GraduationCap, Brain, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Registration } from "./types";

// Component Imports
import Header from "./components/Header";
import NotificationBanner from "./components/NotificationBanner";
import HeroSection from "./components/HeroSection";
import WhySection from "./components/WhySection";
import InstructorSection from "./components/InstructorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CheckoutModal from "./components/CheckoutModal";
import TicketReceipt from "./components/TicketReceipt";
import StickyCta from "./components/StickyCTA";
import EdunuraLogo from "./components/EdunuraLogo";

export default function App() {
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [showTicketView, setShowTicketView] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [seatsLeft, setSeatsLeft] = useState<number>(34);

  // Load existing registration on mount - removed to make sure it is purely in-memory and resets on refresh

  // Simulate active seat count decreasing to build healthy high-conversion urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((current) => {
        if (current <= 4) return current; // Keep a few seats remaining so it remains registerable
        return current - (Math.random() > 0.6 ? 1 : 0);
      });
    }, 45000); // Check and decrease seat count periodically

    return () => clearInterval(timer);
  }, []);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handlePaymentSuccess = (newReg: Registration) => {
    setRegistration(newReg);
    setIsCheckoutOpen(false);
    setShowTicketView(true);
  };

  const handleCancelRegistration = () => {
    // Reset state so they can register another student
    setRegistration(null);
    setShowTicketView(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased bg-white">
      
      {/* Conditionally render Ticket receipt OR Landing Page */}
      {showTicketView && registration ? (
        <TicketReceipt 
          registration={registration} 
          onBackToLanding={() => setShowTicketView(false)} 
        />
      ) : (
        <>
          {/* Top urgency notification ticker */}
          <NotificationBanner onCtaClick={handleOpenCheckout} seatsLeft={seatsLeft} />

          {/* Sticky Navigation Header */}
          <Header onCtaClick={handleOpenCheckout} />

          {/* 1. Hero Section */}
          <HeroSection onCtaClick={handleOpenCheckout} seatsLeft={seatsLeft} />

          {/* 2. Why Section */}
          <WhySection />

          {/* 4. Audience Target Block: "Who It's For" */}
          <section id="audience-section" className="py-20 px-4 md:px-6 bg-slate-50 border-t border-b border-slate-100">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center space-y-4 mb-14">
                <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
                  Target Audience
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
                  Who is this Session For?
                </h2>
                <p className="max-w-xl mx-auto text-sm" style={{ color: "#4A4A4A" }}>
                  We welcome curious young minds in Classes 7th to 10th. No high-level prior knowledge or complex syllabus skills are needed.
                </p>
              </div>

              {/* Audience Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33" }}>
                    <GraduationCap size={20} style={{ color: "#EE5A24" }} />
                  </div>
                  <h3 className="font-display font-bold text-base" style={{ color: "#0A1F33" }}>Class 7th to 10th Students</h3>
                  <p className="text-xs leading-relaxed font-sans" style={{ color: "#4A4A4A" }}>
                    Perfect for students who want to understand geometry, algebra, and logic easily for their school exams.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33" }}>
                    <Brain size={20} style={{ color: "#EE5A24" }} />
                  </div>
                  <h3 className="font-display font-bold text-base" style={{ color: "#0A1F33" }}>Children Afraid of Math</h3>
                  <p className="text-xs leading-relaxed font-sans" style={{ color: "#4A4A4A" }}>
                    If your child hates word problems or gets stressed about math homework, we will help them feel confident again.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm space-y-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33" }}>
                    <Users size={20} style={{ color: "#EE5A24" }} />
                  </div>
                  <h3 className="font-display font-bold text-base" style={{ color: "#0A1F33" }}>Helpful Parents</h3>
                  <p className="text-xs leading-relaxed font-sans" style={{ color: "#4A4A4A" }}>
                    Great for parents who want to help their kids learn at home with simple, everyday math activities.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* 5. Instructor Bio Section */}
          <InstructorSection />

          {/* 7. Social Proof Section */}
          <TestimonialsSection />

          {/* 8. Dedicated Pricing Section */}
          <section id="pricing-section" className="py-20 px-4 md:px-6 bg-white relative">
            <div className="max-w-4xl mx-auto text-center">
              
              <div className="space-y-4 mb-12">
                <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
                  Affordable Price
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
                  Unlock Practical Math for Only ₹99
                </h2>
                <p className="text-sm max-w-md mx-auto font-sans" style={{ color: "#4A4A4A" }}>
                  We want to make math easy and affordable for every student. Secured by Razorpay.
                </p>
              </div>

              {/* Pricing Core Card */}
              <div className="bg-white border border-slate-150 rounded-3xl p-6 md:p-10 shadow-lg max-w-lg mx-auto relative overflow-hidden">
                
                <div className="absolute top-0 right-0 transform translate-x-12 translate-y-4 rotate-45 text-white text-[10px] font-black px-8 py-1 uppercase" style={{ backgroundColor: "#EE5A24" }}>
                  Limited Seats
                </div>

                <h3 className="font-display font-bold text-xs uppercase tracking-widest" style={{ color: "#4A4A4A" }}>Full Access Seat</h3>
                
                {/* Large pricing text */}
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="text-slate-400 text-lg line-through font-normal">₹499</span>
                  <span className="font-display font-black text-5xl animate-pulse" style={{ color: "#0A1F33" }}>₹99</span>
                  <span className="text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}>80% OFF</span>
                </div>
                <p className="text-[11px] font-semibold mt-1" style={{ color: "#4A4A4A" }}>One-time reservation fee • No hidden charges</p>

                {/* Bullet details of what is included */}
                <div className="mt-8 border-t border-slate-100 pt-6 space-y-3.5 text-left text-sm max-w-sm mx-auto">
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle className="shrink-0" size={16} style={{ color: "#EE5A24" }} />
                    <span className="font-sans font-medium" style={{ color: "#0A1F33" }}>Live 90-Minute Zoom class</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle className="shrink-0" size={16} style={{ color: "#EE5A24" }} />
                    <span className="font-sans font-medium" style={{ color: "#0A1F33" }}>Access to interactive math tools</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle className="shrink-0" size={16} style={{ color: "#EE5A24" }} />
                    <span className="font-sans font-medium" style={{ color: "#0A1F33" }}>Class video recording (lifetime access)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle className="shrink-0" size={16} style={{ color: "#EE5A24" }} />
                    <span className="font-sans font-medium" style={{ color: "#0A1F33" }}>Personalized digital certificate</span>
                  </div>
                </div>

                {/* Final Checkout Button */}
                <button
                  onClick={handleOpenCheckout}
                  className="w-full mt-8 text-white font-extrabold text-base py-4 rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  style={{ backgroundColor: "#EE5A24" }}
                  id="pricing-checkout-btn"
                >
                  Reserve Seat Now (₹99)
                </button>

                {/* Refund assurance */}
                <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold" style={{ color: "#4A4A4A" }}>
                  <ShieldCheck style={{ color: "#EE5A24" }} size={16} />
                  <span>100% Refund Guarantee if not satisfied</span>
                </div>
              </div>

            </div>
          </section>

          {/* 9. FAQ Section */}
          <FaqSection />

          {/* 10. Final CTA Urgency block */}
          <section className="py-20 px-4 text-white relative text-center" style={{ backgroundColor: "#0A1F33" }}>
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full border uppercase tracking-widest border-white/10" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}>
                Secure Your Spot
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
                Ready to Reset Your Child's Math Fear?
              </h2>
              <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                The live class is on Sunday, July 26. We keep classes small so every child gets attention. Book your seat today!
              </p>

              {/* Core Payment Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center max-w-sm mx-auto">
                <button
                  onClick={handleOpenCheckout}
                  className="w-full text-white font-extrabold text-sm py-4 rounded-xl shadow-lg transition-transform hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: "#EE5A24" }}
                  id="final-footer-cta"
                >
                  Book My Seat (₹99)
                </button>
                {registration && (
                  <button
                    onClick={() => setShowTicketView(true)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-4 rounded-xl border border-white/15 transition-all cursor-pointer"
                  >
                    View Active Ticket
                  </button>
                )}
              </div>
              <p className="text-[10px] text-slate-400">PCI-DSS secured. Razorpay payment checkout integration.</p>
            </div>
          </section>

          {/* Footer branding */}
          <footer className="py-12 text-gray-400 text-xs text-center border-t border-slate-900" style={{ backgroundColor: "#0A1F33" }}>
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left space-y-2">
                <EdunuraLogo size="sm" inverse={true} />
                <p className="text-[10px] text-slate-400">Empowering secondary school students to apply concepts in the real world.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-400 font-semibold">
                <a href="#faq-section" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#faq-section" className="hover:text-white transition-colors">Terms of Service</a>
                <span>•</span>
                {registration && (
                  <button 
                    onClick={handleCancelRegistration}
                    className="text-red-400 hover:text-red-500 transition-colors font-bold cursor-pointer"
                  >
                    Cancel Current Booking
                  </button>
                )}
              </div>
            </div>
          </footer>

          {/* Sticky mobile CTA */}
          <StickyCta onCtaClick={handleOpenCheckout} seatsLeft={seatsLeft} />
        </>
      )}

      {/* Secure Checkout Overlay Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={handleCloseCheckout} 
        onPaymentSuccess={handlePaymentSuccess} 
      />

    </div>
  );
}
