import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { person_name, phone_number, whatsapp_number } from "./secret";

const faqs = [
  {
    question: `Can we meet Astrologer ${person_name}?`,
    answer: `Yes, personal meetings are available with prior appointment. You may contact us on WhatsApp: ${whatsapp_number}.`,
  },
  {
    question: "Is telephonic consultation available?",
    answer: `Yes, consultations are available over phone from anywhere in the world. Phone: ${phone_number}.`,
  },
  {
    question: "What kind of astrology services are available?",
    answer:
      "Guidance is provided for vastu, horoscope analysis, career, marriage, health, and business-related concerns.",
  },
  {
    question: "What kind of products are available?",
    answer:
      "Astrological items such as gemstones, yantras, and other spiritual products are available as per consultation.",
  },
  {
    question: "Are astrology learning courses available?",
    answer:
      "Yes, astrology learning courses are offered for beginners as well as advanced learners.",
  },
  {
    question: "What topics are covered in the astrology course?",
    answer:
      "The course includes horoscope reading basics, palmistry fundamentals, and predictive astrology concepts.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        relative py-28 px-6 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold text-center mb-16
            font-playfair
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  font-semibold text-base md:text-lg
                  font-inter
                  text-gray-200
                  hover:text-amber-400 transition
                "
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-amber-400" />
                ) : (
                  <Plus className="w-5 h-5 text-amber-400" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed font-inter animate-fadeIn">
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
