export interface Registration {
  id: string;
  studentName: string;
  studentClass: string;
  parentEmail: string;
  parentPhone: string;
  registeredAt: string;
  paymentId: string;
  amountPaid: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string; // e.g. "Parent of Class 8 Student"
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SyllabusItem {
  id: string;
  title: string;
  concept: string;
  realWorldApplication: string;
  icon: string;
}
