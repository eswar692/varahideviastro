import { MessageCircle, Phone } from "lucide-react";
import Form from "../Genaral/Form";
import { address, phone_number, whatsapp_number } from "../Genaral/secret";

export default function Contact() {
  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-20">
        <h2
          className="
            font-playfair font-bold
            text-4xl md:text-6xl
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Contact Us
        </h2>
        <p className="mt-6 font-inter text-gray-300 text-base md:text-lg leading-relaxed">
          Reach out for thoughtful astrology guidance and confidential
          consultation. You may contact us via phone, WhatsApp, or submit the
          form below.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        {/* Contact Info */}
        <div
          className="
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-3xl p-10
          shadow-xl
          text-gray-200
        "
        >
          <h3 className="font-playfair text-2xl text-yellow-400 mb-6">
            Get in Touch
          </h3>

          <p className="font-inter text-sm md:text-base text-gray-300 leading-relaxed mb-8">
            Whether your concern is related to relationships, career direction,
            family matters, or personal clarity, guidance is offered with care,
            discretion, and understanding.
          </p>
          <div className="mb-5">
            <ul>
              <li>{address.line1}</li>
              <li>{address.line2}</li>
              <li>
                {address.city}, {address.state} - {address.pincode}
              </li>
            </ul>
          </div>

          <div className="space-y-6 roboto text-sm md:text-base">
            <a
              href={`tel:${phone_number}`}
              className="flex items-center gap-4 hover:text-amber-400 transition"
            >
              <span className="p-3 rounded-full bg-amber-500/10 text-amber-400">
                <Phone className="w-5 h-5" />
              </span>
              <span>
                <span className="font-semibold text-gray-200">Phone:</span>{" "}
                {phone_number}
              </span>
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-emerald-400 transition"
            >
              <span className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </span>
              <span>
                <span className="font-semibold text-gray-200">WhatsApp:</span>{" "}
                {whatsapp_number}
              </span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div
          className="
          bg-black/60 backdrop-blur-xl
          border border-white/10
          rounded-3xl p-10
          shadow-xl
          text-white
        "
        >
          <h3 className="font-playfair text-2xl text-center text-yellow-400 mb-8">
            Request a Consultation
          </h3>
          <Form />
        </div>
      </div>

      {/* Services Summary */}
      <div className="relative z-10 mt-24 max-w-4xl mx-auto text-center">
        <h3
          className="
            font-playfair font-bold
            text-3xl md:text-4xl
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Areas of Guidance
        </h3>
        <p className="mt-6 font-inter text-gray-300 text-base leading-relaxed">
          Astrology consultations may include palm reading, horoscope insights,
          compatibility guidance, vastu advice, and personalized spiritual
          consultation focused on clarity and balanced decision-making.
        </p>
      </div>
    </section>
  );
}
