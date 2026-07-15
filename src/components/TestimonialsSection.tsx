import React from "react";
import { Star, Quote, CheckCircle2, Users } from "lucide-react";
import { Testimonial } from "../types";

export default function TestimonialsSection() {
  const reviews: Testimonial[] = [
    {
      id: "t1",
      quote: "My daughter in Class 8 used to struggle with algebra tests. After this 90-min session, she was explaining ratios to us using cooking ingredients! Incredible change.",
      author: "Meenakshi Iyer",
      role: "Parent of Shreya (Class 8th)",
      rating: 5
    },
    {
      id: "t2",
      quote: "I always wondered when I would ever use geometry equations. Rahul Sir showed us how game developers use triangles to code 3D movements. Best 90 minutes ever!",
      author: "Kabir Mehta",
      role: "Student (Class 10th)",
      rating: 5
    },
    {
      id: "t3",
      quote: "We spent thousands on offline tuition, but he kept scoring low. This workshop made him realize math is just logical thinking. Worth way more than ₹99!",
      author: "Rajesh Shrivastava",
      role: "Parent of Aarav (Class 7th)",
      rating: 5
    }
  ];

  return (
    <section id="audience-section" className="py-20 px-4 md:px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-extrabold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border" style={{ backgroundColor: "rgba(10, 31, 51, 0.05)", color: "#0A1F33", borderColor: "rgba(10, 31, 51, 0.1)" }}>
            Reviews & Feedback
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight" style={{ color: "#0A1F33" }}>
            Loved by 500+ Families
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "#4A4A4A" }}>
            See how shifting from formula mugging to real-world objects changes how children think, perceive, and score.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#EE5A24]/20 transition-all relative"
            >
              <Quote className="absolute top-4 right-4 opacity-5" size={44} style={{ color: "#0A1F33" }} />
              
              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#EE5A24" color="#EE5A24" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm leading-relaxed italic" style={{ color: "#4A4A4A" }}>
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 border-t border-slate-50 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full text-white font-extrabold flex items-center justify-center text-xs" style={{ backgroundColor: "#0A1F33" }}>
                  {review.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-xs font-bold" style={{ color: "#0A1F33" }}>{review.author}</h4>
                  <p className="text-[10px] font-semibold" style={{ color: "#4A4A4A" }}>{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Highlight trust stats */}
        <div className="text-white rounded-3xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-md" style={{ backgroundColor: "#0A1F33" }}>
          
          <div className="space-y-1">
            <h4 className="font-display font-black text-3xl animate-pulse" style={{ color: "#EE5A24" }}>97.4%</h4>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-100">Concept Retention Rate</p>
            <p className="text-[11px] text-slate-300">Post-workshop surveys</p>
          </div>

          <div className="space-y-1 border-y sm:border-y-0 sm:border-x py-4 sm:py-0 border-white/10">
            <h4 className="font-display font-black text-3xl" style={{ color: "#EE5A24" }}>12K+</h4>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-100">Active Registrations</p>
            <p className="text-[11px] text-slate-300">Across 180+ cities in India</p>
          </div>

          <div className="space-y-1">
            <h4 className="font-display font-black text-3xl" style={{ color: "#EE5A24" }}>4.9/5</h4>
            <p className="text-xs uppercase tracking-wider font-semibold text-slate-100">Average Star Rating</p>
            <p className="text-[11px] text-slate-300">Verified student reviews</p>
          </div>

        </div>

      </div>
    </section>
  );
}
