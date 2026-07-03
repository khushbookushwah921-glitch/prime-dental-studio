"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the consultation fee?",
      answer:
        "Our consultation fee is ₹200. Please call us to confirm any ongoing offers.",
    },
    {
      question: "Do you provide emergency dental treatment?",
      answer:
        "Yes, we provide emergency dental care. Please call us before visiting so we can assist you quickly.",
    },
    {
      question: "Is Root Canal Treatment painful?",
      answer:
        "No. With modern anesthesia and equipment, Root Canal Treatment is comfortable and nearly painless.",
    },
    {
      question: "Do I need to book an appointment?",
      answer:
        "Appointments are recommended to reduce waiting time, but walk-in patients are also welcome.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-100 text-sky-700 px-5 py-2 rounded-full font-semibold">
            ❓ FAQ
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our clinic.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-800"
              >
                {faq.question}

                {open === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}