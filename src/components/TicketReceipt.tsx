import React from "react";
import { CheckCircle2, Calendar, Clock, Laptop, Printer, ArrowLeft, Heart, Share2, HelpCircle, Ticket, Info } from "lucide-react";
import { Registration } from "../types";

interface TicketReceiptProps {
  registration: Registration;
  onBackToLanding: () => void;
}

export default function TicketReceipt({ registration, onBackToLanding }: TicketReceiptProps) {
  
  const handlePrint = () => {
    window.print();
  };

  // Generate Google Calendar Link for July 26, 2026 at 4:00 PM - 5:30 PM (IST)
  // July 26, 2026 16:00 IST is July 26, 2026 10:30 UTC
  // July 26, 2026 17:30 IST is July 26, 2026 12:00 UTC
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Math+Made+Practical+Workshop&dates=20260726T103000Z/20260726T120000Z&details=Live+online+workshop+by+Deepika+B+for+Class+7-10+students.+Zoom+link+will+be+provided.+Recording+access+included.&location=Online+via+Zoom&sf=true&output=xml`;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-6 relative print:bg-white print:py-0">
      
      {/* Visual Success Confirmation */}
      <div className="max-w-xl mx-auto text-center space-y-4 mb-8 print:hidden">
        <div className="inline-flex p-3 rounded-full border border-emerald-200 bg-emerald-50 animate-bounce">
          <CheckCircle2 size={32} className="text-emerald-600" />
        </div>
        <h1 className="font-display font-extrabold text-3xl leading-tight" style={{ color: "#0A1F33" }}>
          Seat Confirmed!
        </h1>
        <p className="text-sm max-w-sm mx-auto font-sans" style={{ color: "#4A4A4A" }}>
          Congratulations! A seat for <strong style={{ color: "#0A1F33" }}>{registration.studentName}</strong> has been secured for the 90-minute live math adventure.
        </p>
      </div>

      {/* Printable Ticket Pass Box */}
      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative ticket-dashed-border print:shadow-none print:border-none">
        
        {/* Ticket Header Banner */}
        <div className="p-6 text-white text-center space-y-1.5 relative" style={{ backgroundColor: "#0A1F33" }}>
          <span className="text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest font-mono text-white" style={{ backgroundColor: "#EE5A24" }}>
            Official Entry Pass
          </span>
          <h2 className="font-display font-black text-xl text-white">Math Made Practical</h2>
          <p className="text-xs text-slate-300">Interactive 90-Min Masterclass</p>
        </div>

        {/* Ticket Details Body */}
        <div className="p-6 space-y-6 relative">
          
          {/* Main Booking Metadata */}
          <div className="grid grid-cols-2 gap-4 border-b pb-5 font-mono text-xs" style={{ borderColor: "rgba(10, 31, 51, 0.08)" }}>
            <div className="space-y-0.5">
              <span className="block font-sans font-bold" style={{ color: "#4A4A4A" }}>STUDENT NAME</span>
              <span className="font-extrabold text-sm font-sans" style={{ color: "#0A1F33" }}>{registration.studentName}</span>
            </div>
            <div className="space-y-0.5 text-right">
              <span className="block font-sans font-bold" style={{ color: "#4A4A4A" }}>TARGET CLASS</span>
              <span className="font-black text-sm" style={{ color: "#EE5A24" }}>Class {registration.studentClass}</span>
            </div>
          </div>

          {/* Schedule & Timing block */}
          <div className="space-y-3 bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <div className="flex items-start gap-3 text-xs">
              <Calendar className="shrink-0 mt-0.5" size={16} style={{ color: "#EE5A24" }} />
              <div>
                <p className="font-bold" style={{ color: "#0A1F33" }}>Sunday, July 26, 2026</p>
                <p className="font-semibold font-sans text-xs" style={{ color: "#4A4A4A" }}>Class scheduled date</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 text-xs">
              <Clock className="shrink-0 mt-0.5" size={16} style={{ color: "#EE5A24" }} />
              <div>
                <p className="font-bold" style={{ color: "#0A1F33" }}>4:00 PM – 5:30 PM (IST)</p>
                <p className="font-semibold font-sans text-xs" style={{ color: "#4A4A4A" }}>90 Minutes interactive session</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <Laptop className="shrink-0 mt-0.5" size={16} style={{ color: "#EE5A24" }} />
              <div>
                <p className="font-bold" style={{ color: "#0A1F33" }}>Zoom Invitation Link Provided Below</p>
                <p className="font-semibold font-sans text-xs" style={{ color: "#4A4A4A" }}>Join from smartphone or laptop</p>
              </div>
            </div>
          </div>

          {/* Simulated Razorpay Receipt */}
          <div className="border-t border-b border-dashed py-4 grid grid-cols-2 gap-4 text-xs font-mono" style={{ borderColor: "rgba(10, 31, 51, 0.15)" }}>
            <div className="space-y-1">
              <span className="block font-sans font-bold" style={{ color: "#4A4A4A" }}>TRANSACTION ID</span>
              <span className="font-bold" style={{ color: "#0A1F33" }}>{registration.paymentId}</span>
            </div>
            <div className="space-y-1 text-right">
              <span className="block font-sans font-bold" style={{ color: "#4A4A4A" }}>AMOUNT PAID</span>
              <span className="font-extrabold text-emerald-600">₹99.00 (INR)</span>
            </div>
            <div className="space-y-1 col-span-2">
              <span className="block font-sans font-bold" style={{ color: "#4A4A4A" }}>REGISTRATION ID</span>
              <span className="font-extrabold text-sm text-slate-800">{registration.id}</span>
            </div>
          </div>

          {/* Instructions Block */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-between border rounded-2xl p-4" style={{ backgroundColor: "rgba(10, 31, 51, 0.02)", borderColor: "rgba(10, 31, 51, 0.08)" }}>
            <div className="space-y-1.5 text-center sm:text-left text-xs max-w-xs">
              <h4 className="font-bold flex items-center justify-center sm:justify-start gap-1.5" style={{ color: "#0A1F33" }}>
                <Info size={14} style={{ color: "#EE5A24" }} />
                How to join the Live Class:
              </h4>
              <p className="text-[11px] font-sans leading-relaxed" style={{ color: "#4A4A4A" }}>
                We have emailed a calendar invite and payment receipt to <strong style={{ color: "#0A1F33" }}>{registration.parentEmail}</strong>. The secure Zoom link will also be dispatched to <strong style={{ color: "#0A1F33" }}>+91 {registration.parentPhone}</strong> via WhatsApp 30 minutes before start time.
              </p>
            </div>
            {/* Visual ticket scan icon */}
            <div className="bg-white border p-3 rounded-xl shrink-0" style={{ borderColor: "rgba(10, 31, 51, 0.1)" }}>
              <div className="w-16 h-16 rounded flex flex-col items-center justify-center" style={{ color: "#EE5A24" }}>
                <Ticket size={28} className="animate-pulse" />
                <span className="text-[7px] font-mono font-bold tracking-wide text-slate-400 mt-1.5 uppercase">PASS VALID</span>
              </div>
            </div>
          </div>

          {/* Disclaimer / Support */}
          <div className="text-[10px] text-center space-y-1 font-sans" style={{ color: "#4A4A4A" }}>
            <p>Need support? Contact support@mathmadepractical.com or call +91 98765 43210</p>
            <p>© 2026 Edunura Academic Inc. Secure Razorpay Integration Sandbox.</p>
          </div>

        </div>

      </div>

      {/* Action panel underneath ticket */}
      <div className="max-w-lg mx-auto mt-6 flex flex-col sm:flex-row items-center gap-3 print:hidden">
        
        {/* Calendar Sync */}
        <a 
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 bg-white hover:bg-slate-50 text-xs font-bold py-3 px-4 rounded-xl shadow-sm border transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          style={{ color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.15)" }}
        >
          <Calendar size={14} style={{ color: "#EE5A24" }} />
          Add to Google Calendar
        </a>

        {/* Print Ticket */}
        <button
          onClick={handlePrint}
          className="w-full sm:flex-1 bg-white hover:bg-slate-50 text-xs font-bold py-3 px-4 rounded-xl shadow-sm border transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          style={{ color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.15)" }}
        >
          <Printer size={14} style={{ color: "#EE5A24" }} />
          Print / Save Ticket
        </button>

      </div>

      {/* Back to landing link */}
      <div className="max-w-xl mx-auto mt-8 text-center print:hidden">
        <button
          onClick={onBackToLanding}
          className="inline-flex items-center gap-1.5 text-xs font-bold border-b pb-0.5 transition-colors"
          style={{ color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.2)" }}
        >
          <ArrowLeft size={14} style={{ color: "#EE5A24" }} />
          Return to Workshop Details Page
        </button>
      </div>

    </div>
  );
}
