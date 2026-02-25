"use client";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, Phone, MessageCircle } from "lucide-react";
import { useCallback } from "react";
import { phone_number, whatsapp_number } from "./secret";

const CardCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const cards = [
    {
      title: "Relationship & Personal Guidance",
      desc: "Astrological consultation focused on understanding relationship dynamics, improving communication, and gaining emotional clarity.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Horoscope & Insightful Readings",
      desc: "Traditional horoscope-based readings designed to offer perspective and thoughtful insight for personal growth and life decisions.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
    {
      title: "Business & Career Consultation",
      desc: "Astrological guidance aimed at supporting planning, confidence, and informed decision-making in business and professional matters.",
      img: "https://i.pinimg.com/736x/84/dd/e6/84dde6e4a1641f19a2f53577ec4b9f4c.jpg",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_60%)]" />

      {/* Carousel */}
      <div
        ref={emblaRef}
        className="relative z-10 overflow-hidden max-w-7xl mx-auto"
      >
        <div className="flex items-stretch">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4"
            >
              <div
                className="
                group h-full
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                flex flex-col items-center text-center
                shadow-xl hover:shadow-2xl
                transition-all duration-300
              "
              >
                {/* Image */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border border-amber-400/40 shadow-md">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text */}
                <h3 className="font-playfair text-xl md:text-2xl text-yellow-400 mb-3">
                  {card.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed">
                  {card.desc}
                </p>

                {/* CTA */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={`tel:${phone_number}`}
                    className="
                      flex items-center gap-2
                      px-5 py-2 rounded-full
                      bg-amber-500 text-gray-900
                      font-medium text-sm
                      hover:bg-amber-600 transition
                    "
                  >
                    <Phone size={16} />
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${whatsapp_number}`}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2
                      px-5 py-2 rounded-full
                      bg-emerald-500 text-white
                      font-medium text-sm
                      hover:bg-emerald-600 transition
                    "
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        className="
          absolute left-6 top-1/2 -translate-y-1/2
          bg-black/60 text-amber-400
          p-3 rounded-full
          border border-white/10
          shadow-lg hover:scale-110 transition z-20
        "
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={scrollNext}
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          bg-black/60 text-amber-400
          p-3 rounded-full
          border border-white/10
          shadow-lg hover:scale-110 transition z-20
        "
      >
        <ChevronLeft className="rotate-180" size={22} />
      </button>
    </section>
  );
};

export default CardCarousel;
