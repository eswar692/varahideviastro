import { Quote } from "lucide-react";
import { person_name } from "./secret";

const testimonials = [
  {
    name: "Arjun Verma",
    location: "Mumbai",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: `${person_name} Ji guided me during a difficult business phase. His advice helped me regain confidence and take better decisions.`,
  },
  {
    name: "Mala Kapoor",
    location: "Goa",
    image: "https://astrologerdeepaksharma.in/images/client-1.png",
    text: `Pandith ${person_name} Ji’s guidance has always brought clarity. I feel reassured knowing his advice is thoughtful and balanced.`,
  },
  {
    name: "Pratha Kumari",
    location: "Delhi",
    image: "https://astrologerdeepaksharma.in/images/client-2.png",
    text: "Family stress was affecting my peace of mind. After consulting him, my home environment slowly became calmer.",
  },
  {
    name: "Ravi Singh",
    location: "Bangalore",
    image:
      "https://i.pinimg.com/736x/a7/99/d0/a799d0592bae082bbd34c3ce9476491b.jpg",
    text: "Relationship misunderstandings were troubling me. His guidance helped us communicate better and restore harmony.",
  },
  {
    name: "Sneha Nair",
    location: "Kochi",
    image:
      "https://i.pinimg.com/736x/19/c8/c7/19c8c789aec27508fee721babf82597e.jpg",
    text: `I was confused about my career direction. ${person_name} Ji’s consultation helped me think clearly and move forward with confidence.`,
  },
  {
    name: "Vikram Chauhan",
    location: "Chandigarh",
    image:
      "https://i.pinimg.com/1200x/0e/1b/49/0e1b4984c22ff810051677b8c7a29e7d.jpg",
    text: "Family disputes were creating stress. His calm guidance helped us regain understanding and balance.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="
        relative py-28 px-6 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold
            font-playfair
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Client Testimonials
        </h2>

        <p className="mt-5 text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-inter">
          Genuine experiences shared by individuals who received guidance from{" "}
          <span className="font-semibold text-amber-400">{person_name}</span>.
        </p>

        {/* Grid */}
        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group relative rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                p-8
              "
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-amber-400/40 shadow-lg">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-lg font-semibold font-playfair text-yellow-300">
                {t.name}
              </h3>
              <p className="text-sm text-gray-400 font-inter">{t.location}</p>

              {/* Text */}
              <p className="mt-4 text-gray-300 text-sm leading-relaxed font-inter italic">
                “{t.text}”
              </p>

              {/* Quote icon */}
              <Quote
                className="
                  absolute top-6 right-6
                  w-10 h-10
                  text-amber-400/30
                  group-hover:scale-110 transition-transform
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
