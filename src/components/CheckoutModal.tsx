import React, { useState } from "react";
import { X, ShieldCheck, CreditCard, Landmark, Smartphone, QrCode, Lock, CircleDot, RefreshCw } from "lucide-react";
import { Registration } from "../types";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (reg: Registration) => void;
}

type CheckoutStep = "details" | "payment" | "processing" | "success";
type PaymentMethod = "upi" | "card" | "netbanking";

export default function CheckoutModal({ isOpen, onClose, onPaymentSuccess }: CheckoutModalProps) {
  if (!isOpen) return null;

  const [step, setStep] = useState<CheckoutStep>("details");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi");
  const [isAgreed, setIsAgreed] = useState(true);

  // Form Fields
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "8th",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  const [formErrors, setFormErrors] = useState({
    studentName: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  // Card payment fields
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    setFormErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const errors = { studentName: "", parentName: "", parentEmail: "", parentPhone: "" };

    if (!formData.studentName.trim()) {
      errors.studentName = "Please enter the student's name";
      valid = false;
    }

    if (!formData.parentName.trim()) {
      errors.parentName = "Please enter the parent's name";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.parentEmail.trim() || !emailRegex.test(formData.parentEmail)) {
      errors.parentEmail = "Please enter a valid email address";
      valid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.parentPhone.trim() || !phoneRegex.test(formData.parentPhone)) {
      errors.parentPhone = "Please enter a valid 10-digit mobile number";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep("payment");
    }
  };

  const handleSimulatePayment = () => {
    setStep("processing");

    // Replicate Razorpay's network checks and otp simulation delay
    setTimeout(() => {
      const paymentId = "pay_" + Math.random().toString(36).substring(2, 11).toUpperCase();
      const newRegistration: Registration = {
        id: "REG" + Math.floor(100000 + Math.random() * 900000),
        studentName: formData.studentName,
        studentClass: formData.studentClass,
        parentEmail: formData.parentEmail,
        parentPhone: formData.parentPhone,
        registeredAt: new Date().toISOString(),
        paymentId: paymentId,
        amountPaid: 99,
      };

      onPaymentSuccess(newRegistration);
    }, 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/80 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm overflow-hidden cursor-pointer"
      onClick={onClose}
    >
      
      {/* Outer Checkout Dialog Card */}
      <div 
        className="relative bg-white w-[94%] sm:w-full max-w-[480px] md:max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col transition-all max-h-[92vh] sm:max-h-[90vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Step Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
          <div>
            <h3 className="font-display font-extrabold text-[13px] sm:text-base flex items-center gap-2" style={{ color: "#0A1F33" }}>
              <span className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "#0A1F33" }}>
                {step === "details" ? "1" : "2"}
              </span>
              <span className="truncate">
                {step === "details" ? "Student Seat Registration" : "Razorpay Secure Gateway"}
              </span>
            </h3>
            <p className="text-[9px] sm:text-[10px] font-semibold truncate" style={{ color: "#4A4A4A" }}>
              {step === "details" ? "Fill out parent & child details to receive Zoom links & receipt" : "Math Made Practical Workshop • ₹99"}
            </p>
          </div>
          
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 bg-white p-1.5 rounded-full border border-slate-100 shadow-sm cursor-pointer shrink-0 ml-2"
          >
            <X size={16} />
          </button>
        </div>

        {/* STEP 1: Capture Details */}
        {step === "details" && (
          <form onSubmit={handleProceedToPayment} className="flex flex-col flex-1 overflow-hidden">
            
            {/* Scrollable Form Body Container */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
              
              {/* Fee Box */}
              <div className="rounded-2xl border p-4 flex items-center justify-between shrink-0" style={{ backgroundColor: "rgba(10, 31, 51, 0.02)", borderColor: "rgba(10, 31, 51, 0.08)" }}>
                <div className="space-y-0.5">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-extrabold text-slate-500">Live 90-Min Workshop Fee</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm line-through text-slate-400 font-medium">₹499</span>
                    <span className="text-lg sm:text-xl font-display font-black" style={{ color: "#0A1F33" }}>₹99</span>
                  </div>
                </div>
                <span className="text-white text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-lg" style={{ backgroundColor: "#EE5A24" }}>
                  80% OFF
                </span>
              </div>

              {/* Student Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
                  Student Name
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  placeholder="e.g. Amit Kumar"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-sans placeholder-slate-400 focus:outline-none focus:ring-2 min-h-[44px] ${
                    formErrors.studentName 
                      ? "border-red-300 focus:ring-red-200" 
                      : "border-slate-200 focus:border-[#EE5A24] focus:ring-[#EE5A24]/10"
                  }`}
                />
                {formErrors.studentName && (
                  <p className="text-[10px] font-bold text-red-500">{formErrors.studentName}</p>
                )}
              </div>

              {/* Student Class Choice */}
              <div className="space-y-1.5">
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
                  Class / Grade
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["7th", "8th", "9th", "10th"].map((cls) => (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, studentClass: cls }))}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer min-h-[44px] flex items-center justify-center ${
                        formData.studentClass === cls 
                          ? "text-white border-[#0A1F33] shadow-sm font-extrabold" 
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#0A1F33]"
                      }`}
                      style={{ backgroundColor: formData.studentClass === cls ? "#0A1F33" : "" }}
                    >
                      Class {cls}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent Name */}
              <div className="space-y-1.5">
                <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
                  Parent Name
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-sans placeholder-slate-400 focus:outline-none focus:ring-2 min-h-[44px] ${
                    formErrors.parentName 
                      ? "border-red-300 focus:ring-red-200" 
                      : "border-slate-200 focus:border-[#EE5A24] focus:ring-[#EE5A24]/10"
                  }`}
                />
                {formErrors.parentName && (
                  <p className="text-[10px] font-bold text-red-500">{formErrors.parentName}</p>
                )}
              </div>

              {/* Responsive Container for Mobile Number and Email Address (stacked on mobile, side-by-side on sm+) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Parent Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
                    Parent Mobile Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400 font-sans">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="parentPhone"
                      maxLength={10}
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm font-sans placeholder-slate-400 focus:outline-none focus:ring-2 min-h-[44px] ${
                        formErrors.parentPhone 
                          ? "border-red-300 focus:ring-red-200" 
                          : "border-slate-200 focus:border-[#EE5A24] focus:ring-[#EE5A24]/10"
                      }`}
                    />
                  </div>
                  {formErrors.parentPhone && (
                    <p className="text-[10px] font-bold text-red-500">{formErrors.parentPhone}</p>
                  )}
                </div>

                {/* Parent Email */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: "#0A1F33" }}>
                    Parent Email Address
                  </label>
                  <input
                    type="email"
                    name="parentEmail"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    placeholder="e.g. parent@email.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-sans placeholder-slate-400 focus:outline-none focus:ring-2 min-h-[44px] ${
                      formErrors.parentEmail 
                        ? "border-red-300 focus:ring-red-200" 
                        : "border-slate-200 focus:border-[#EE5A24] focus:ring-[#EE5A24]/10"
                    }`}
                  />
                  {formErrors.parentEmail && (
                    <p className="text-[10px] font-bold text-red-500">{formErrors.parentEmail}</p>
                  )}
                </div>

              </div>

              {/* Agreement Checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer select-none py-2 px-1 hover:bg-slate-50/50 rounded-xl transition-colors shrink-0">
                <input 
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="rounded text-[#EE5A24] border-slate-200 mt-1 cursor-pointer focus:ring-[#EE5A24]/20 w-4 h-4 shrink-0"
                  style={{ accentColor: "#EE5A24" }}
                />
                <span className="text-[10px] sm:text-[11px] leading-relaxed text-[#4A4A4A] font-medium">
                  Send registration ticket, class schedule, and PDF worksheets directly to my WhatsApp & Email.
                </span>
              </label>

            </div>

            {/* Sticky bottom submit section */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4 sm:px-6 space-y-3 shrink-0 z-10">
              <button
                type="submit"
                disabled={!isAgreed}
                className={`w-full text-white font-extrabold text-sm sm:text-base py-3 rounded-2xl shadow-md transition-all flex items-center justify-center gap-1.5 min-h-[44px] ${
                  isAgreed ? "hover:opacity-95 cursor-pointer" : "opacity-50 cursor-not-allowed"
                }`}
                style={{ backgroundColor: "#EE5A24" }}
                id="submit-details-btn"
              >
                Continue to Payment (₹99)
              </button>

              {/* Footer Trust Line */}
              <p className="text-[9px] sm:text-[10px] text-center text-slate-400 font-medium">
                🔒 Securely processed via Razorpay | Complete refund within 24 hours if unsatisfied
              </p>
            </div>
          </form>
        )}

        {/* STEP 2: Razorpay Interface */}
        {step === "payment" && (
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Scrollable Content */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
              
              {/* Real Razorpay Brand Mimic */}
              <div className="border rounded-2xl p-4 flex items-center justify-between text-xs shrink-0" style={{ backgroundColor: "rgba(10, 31, 51, 0.02)", borderColor: "rgba(10, 31, 51, 0.08)" }}>
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-wider font-extrabold" style={{ color: "#EE5A24" }}>RAZORPAY TRUSTED SECURE CHANNEL</span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Edunura Live Workshop</h4>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-[10px] font-bold text-slate-500">TOTAL DUE</span>
                  <span className="text-sm sm:text-base font-black text-slate-900">₹99.00</span>
                </div>
              </div>

              {/* Razorpay Grid Layout */}
              <div className="flex flex-col sm:grid sm:grid-cols-12 border border-slate-100 rounded-2xl overflow-hidden min-h-[220px]">
                
                {/* Left Bar: Modes tabs */}
                <div className="flex flex-row sm:flex-col sm:col-span-4 bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-100 shrink-0">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("upi")}
                    className={`p-2.5 sm:p-3.5 flex-1 sm:flex-none text-center sm:text-left text-[11px] sm:text-xs font-bold flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 transition-all cursor-pointer border-b-2 sm:border-b-0 sm:border-l-4 min-h-[44px] ${
                      paymentMethod === "upi" 
                        ? "bg-white text-[#EE5A24] border-[#EE5A24]" 
                        : "text-slate-600 border-transparent hover:bg-white/50"
                    }`}
                  >
                    <QrCode size={15} />
                    <span>UPI / QR</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`p-2.5 sm:p-3.5 flex-1 sm:flex-none text-center sm:text-left text-[11px] sm:text-xs font-bold flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 transition-all cursor-pointer border-b-2 sm:border-b-0 sm:border-l-4 min-h-[44px] ${
                      paymentMethod === "card" 
                        ? "bg-white text-[#EE5A24] border-[#EE5A24]" 
                        : "text-slate-600 border-transparent hover:bg-white/50"
                    }`}
                  >
                    <CreditCard size={15} />
                    <span>Cards</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("netbanking")}
                    className={`p-2.5 sm:p-3.5 flex-1 sm:flex-none text-center sm:text-left text-[11px] sm:text-xs font-bold flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 transition-all cursor-pointer border-b-2 sm:border-b-0 sm:border-l-4 min-h-[44px] ${
                      paymentMethod === "netbanking" 
                        ? "bg-white text-[#EE5A24] border-[#EE5A24]" 
                        : "text-slate-600 border-transparent hover:bg-white/50"
                    }`}
                  >
                    <Landmark size={15} />
                    <span>Netbanking</span>
                  </button>
                </div>

                {/* Right Panel: Active details */}
                <div className="sm:col-span-8 p-4 bg-white flex flex-col justify-center min-h-[180px] sm:min-h-0">
                  
                  {/* Method content: UPI */}
                  {paymentMethod === "upi" && (
                    <div className="space-y-3 sm:space-y-4 flex flex-col items-center justify-center text-center h-full py-4 sm:py-0">
                      <div className="bg-slate-50 border border-slate-100 p-2 rounded-xl w-fit">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-slate-150 rounded flex items-center justify-center relative">
                          <QrCode size={56} className="sm:hidden" style={{ color: "#0A1F33" }} />
                          <QrCode size={70} className="hidden sm:block" style={{ color: "#0A1F33" }} />
                          <div className="absolute text-white font-extrabold text-[10px] w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border-2 border-white shadow" style={{ backgroundColor: "#EE5A24" }}>
                            ₹
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1 text-center">
                        <p className="text-[11px] sm:text-xs font-bold px-2 leading-tight" style={{ color: "#0A1F33" }}>Scan QR via GooglePay, BHIM, or PhonePe</p>
                        <p className="text-[9px] sm:text-[10px] text-slate-400">Clicking pay mimics live payment approval</p>
                      </div>
                    </div>
                  )}

                  {/* Method content: Card */}
                  {paymentMethod === "card" && (
                    <div className="space-y-3 text-left my-auto py-2">
                      <div className="space-y-1">
                        <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500">Card Number</span>
                        <input 
                          type="text" 
                          maxLength={19}
                          placeholder="4321 0987 6543 2109" 
                          value={cardData.number}
                          onChange={(e) => setCardData(prev => ({ ...prev, number: e.target.value }))}
                          className="w-full border border-slate-200 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-[#EE5A24] min-h-[40px]"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500">Expiry Date</span>
                          <input 
                            type="text" 
                            maxLength={5}
                            placeholder="MM/YY" 
                            value={cardData.expiry}
                            onChange={(e) => setCardData(prev => ({ ...prev, expiry: e.target.value }))}
                            className="w-full border border-slate-200 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-[#EE5A24] text-center min-h-[40px]"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500">CVV Code</span>
                          <input 
                            type="password" 
                            maxLength={3}
                            placeholder="•••" 
                            className="w-full border border-slate-200 rounded-lg p-2.5 text-xs font-mono focus:outline-none focus:border-[#EE5A24] text-center min-h-[40px]"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Method content: Netbanking */}
                  {paymentMethod === "netbanking" && (
                    <div className="space-y-2 text-left my-auto py-2">
                      <span className="text-[9px] font-bold uppercase tracking-wide text-slate-500">Select Your Bank</span>
                      <div className="grid grid-cols-2 gap-2">
                        {["SBI Bank", "HDFC Bank", "ICICI Bank", "Axis Bank"].map((bank) => (
                          <button
                            key={bank}
                            type="button"
                            className="p-2 border border-slate-150 rounded-lg text-[10px] font-bold text-slate-700 hover:border-[#EE5A24] text-left bg-slate-50/50 flex items-center gap-1.5 min-h-[40px]"
                          >
                            <Landmark size={12} className="text-slate-400" />
                            {bank}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>

            {/* Sticky footer notice and proceed */}
            <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4 sm:px-6 space-y-3 shrink-0 z-10">
              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[10px] font-medium">
                <Lock size={12} className="text-emerald-500" />
                <span>PCI-DSS Secured Connection • Razorpay Gateway</span>
              </div>

              <button
                type="button"
                onClick={handleSimulatePayment}
                className="w-full text-white font-extrabold text-sm sm:text-base py-3 rounded-2xl shadow-md transition-all cursor-pointer text-center uppercase tracking-wider hover:opacity-95 min-h-[44px]"
                style={{ backgroundColor: "#0A1F33" }}
                id="simulate-payment-btn"
              >
                Complete Payment of ₹99.00
              </button>
            </div>

          </div>
        )}

        {/* STEP 3: Loading state */}
        {step === "processing" && (
          <div className="p-6 sm:p-10 flex flex-col items-center justify-center text-center space-y-5 min-h-[350px] overflow-y-auto flex-1">
            <div className="relative shrink-0">
              <RefreshCw className="animate-spin" size={44} style={{ color: "#EE5A24" }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Lock size={14} style={{ color: "#0A1F33" }} />
              </div>
            </div>
            
            <div className="space-y-2 shrink-0">
              <h4 className="font-display font-extrabold text-base text-slate-900">Securing Payment Channel...</h4>
              <p className="text-xs font-semibold max-w-xs leading-relaxed text-slate-500">
                Communicating with secure transaction servers and verifying authorization. Please do not close or refresh this page.
              </p>
            </div>

            {/* Simulated progress checklist */}
            <div className="space-y-2 bg-slate-50 border border-slate-100 p-3.5 rounded-xl w-full text-xs font-mono text-left max-w-sm shrink-0">
              <p className="text-emerald-600 font-bold flex items-center gap-1.5">
                <CircleDot size={12} /> Contact verified: {formData.parentPhone}
              </p>
              <p className="text-emerald-600 font-bold flex items-center gap-1.5">
                <CircleDot size={12} /> Generated safe capture ID
              </p>
              <p className="font-bold flex items-center gap-1.5 animate-pulse text-slate-900">
                <RefreshCw size={12} className="animate-spin" style={{ color: "#EE5A24" }} /> Authorizing UPI transfer node...
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
