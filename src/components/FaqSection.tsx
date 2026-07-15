import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "When is this live workshop?",
      answer: "The live workshop is on Sunday, July 26, 2026, from 4:00 PM to 5:30 PM. It takes 90 minutes. Please join 5 minutes early to test your sound."
    },
    {
      id: "faq-2",
      question: "Who can join this workshop?",
      answer: "It is for school students in classes 7th, 8th, 9th, and 10th. We teach math concepts using simple, everyday examples that are easy to understand."
    },
    {
      id: "faq-3",
      question: "Will we get a video recording of the class?",
      answer: "Yes! Every registered student gets lifetime access to the class recording. We will email it to you within 24 hours after the class ends."
    },
    {
      id: "faq-4",
      question: "What devices do we need to join?",
      answer: "You can use any phone, tablet, or computer with internet. We recommend a computer or tablet so your child can see the math games clearly."
    },
    {
      id: "faq-5",
      question: "Will my child get a certificate?",
      answer: "Yes! Your child will get a digital certificate from Edunura after the workshop is over."
    },
    {
      id: "faq-6",
      question: "Can I get a refund if we cannot make it?",
      answer: "Yes, we have a 100% money-back guarantee. Just email us within 7 days and we will refund you fully. No questions asked."
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-20 px-4 md:px-6 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
            Common Inquiries
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{ color: "#4A4A4A" }}>
            Everything you need to know about seats, schedules, devices, and certifications.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base" style={{ color: "#0A1F33" }}>
                    {faq.question}
                  </span>
                  <span className="shrink-0 bg-white p-1 rounded-full border border-slate-100" style={{ color: "#EE5A24" }}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm font-sans leading-relaxed border-t border-slate-100 pt-3 bg-white" style={{ color: "#4A4A4A" }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic support helper box */}
        <div className="mt-12 text-center rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border" style={{ backgroundColor: "rgba(10, 31, 51, 0.02)", borderColor: "rgba(10, 31, 51, 0.05)" }}>
          <div className="flex items-center gap-3 text-left">
            <div className="text-white p-2.5 rounded-xl animate-pulse" style={{ backgroundColor: "#0A1F33" }}>
              <MessageCircle size={20} style={{ color: "#EE5A24" }} />
            </div>
            <div>
              <h4 className="text-sm font-bold" style={{ color: "#0A1F33" }}>Still have a question?</h4>
              <p className="text-xs font-medium" style={{ color: "#4A4A4A" }}>Chat with our supportive parents helpdesk 24/7.</p>
            </div>
          </div>
          <a
            href="mailto:support@mathmadepractical.com"
            className="bg-white hover:opacity-95 text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm border transition-all"
            style={{ color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.15)" }}
          >
            Email Support Helpdesk
          </a>
        </div>

      </div>
    </section>
  );
}
