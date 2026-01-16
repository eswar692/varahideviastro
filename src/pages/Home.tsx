import {
  Briefcase,
  Heart,
  Phone,
  Scale,
  Users,
  MessageCircle,
} from "lucide-react";
import Carousel from "../Genaral/Carousel";
import { motion } from "framer-motion";
import Testimonials from "../Genaral/Testimonial";
import FAQ from "../Genaral/FAQ";
import CardCarousel from "../Genaral/CardsCarousel";
import ImageGrid from "../Genaral/ImageGrid";
import AllReligion from "../Genaral/AllReligion";
import { person_name, phone_number, whatsapp_number } from "../Genaral/secret";
import VashikaranGrid from "../Genaral/VashikaranGrid";

const Home = () => {
  return (
    <div
      className="flex flex-col w-full h-full 
     bg-gradient-to-tr from-purple-700 via-violet-800 to-fuchsia-900

"
    >
      <Carousel />
      {/* <AllReligion /> */}
      <VashikaranGrid />
      <ImageGrid />
      <CardCarousel />
      <Problems />
      <AboutAstrologer />
      <AstrologyServices />
      <AstrologyServicesModern />
      {/* <AllServicesModern /> */}
      <HomeLastDesign />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;

const Problems = () => {
  const problems = [
    {
      title: "Lost Love Back",
      desc: "Available via WhatsApp & Call. Speak directly for guidance and clarity.",
      img: "https://i.pinimg.com/736x/9e/62/89/9e6289902fb93c22b7245c4a72ab355d.jpg",
    },
    {
      title: "Marriage Problem Solution",
      desc: "Astrology-based guidance to resolve disputes and restore harmony.",
      img: "https://i.pinimg.com/1200x/65/b5/7a/65b57ad4bc6f7bc20fcbd8ea7bfe3191.jpg",
    },
    {
      title: "Vashikaran Specialist",
      desc: "Traditional spiritual consultation focused on relationship balance.",
      img: "https://i.pinimg.com/736x/d1/7b/6e/d17b6e6bbe4cb76812aea53029b0182d.jpg",
    },
  ];

  const reverseProblems = [...problems].reverse();

  return (
    <motion.section
      className="
        relative w-full py-24 px-6
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
        overflow-hidden
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.25),transparent_60%)]" />

      <div className="relative z-10 grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {reverseProblems.map((problem, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -12 }}
            className="
              group rounded-3xl overflow-hidden
              bg-gradient-to-br from-fuchsia-600 via-rose-500 to-purple-700
              p-[2px] shadow-2xl
              hover:shadow-fuchsia-500/50
              transition-all
            "
          >
            {/* Inner Card */}
            <div className="bg-black/80 backdrop-blur-xl rounded-3xl h-full flex flex-col">
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={problem.img}
                  alt={problem.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3
                  className="
                    text-2xl font-extrabold mb-3
                    bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400
                    bg-clip-text text-transparent
                    montserrat
                  "
                >
                  {problem.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed poppins">
                  {problem.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="pb-6 flex justify-center">
                <a
                  href={`https://wa.me/${whatsapp_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                      flex items-center gap-2
                      px-8 py-3 rounded-full
                      font-semibold text-white
                      bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-600
                      shadow-lg shadow-pink-500/40
                      hover:scale-105 hover:shadow-pink-500/70
                      transition-all
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Online Chat
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const AboutAstrologer = () => {
  return (
    <section
      className="
      relative py-24 px-6 overflow-hidden
      bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#f72585]
    "
    >
      {/* Glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.35),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="text-white">
          <button
            className="
              mb-6 px-6 py-2 rounded-full
              bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500
              text-black font-bold text-sm md:text-base
              montserrat shadow-xl
              hover:scale-105 transition-transform
            "
          >
            LET’S KNOW ABOUT
          </button>

          <h2
            className="
              text-3xl md:text-5xl font-extrabold mb-6
              montserrat
              bg-gradient-to-r from-yellow-300 via-pink-300 to-white
              bg-clip-text text-transparent
              drop-shadow-2xl
            "
          >
            {person_name}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-5 open-sans text-white/90">
            The world-known astrologer{" "}
            <span className="font-bold text-yellow-300">{person_name}</span>{" "}
            offers traditional spiritual guidance for life’s most challenging
            situations. Trained through generations of astrological knowledge,
            his consultations are rooted in experience and discipline.
          </p>

          <p className="text-lg md:text-xl leading-relaxed open-sans text-white/90">
            Known for deep understanding and clarity, he supports individuals
            seeking guidance in love, career, family, and spiritual direction.
            Clients across the globe trust his calm approach and thoughtful
            insights.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <div
            className="
            relative w-full h-[450px] md:h-[520px]
            rounded-3xl overflow-hidden
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
          "
          >
            <img
              src="https://i.pinimg.com/736x/ea/1d/12/ea1d121d1a00aec32b93a79d6bb72ae8.jpg"
              alt="Astrologer"
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />
            <div
              className="
              absolute inset-0
              bg-gradient-to-t from-black/60 via-black/20 to-transparent
              group-hover:from-black/70 transition
            "
            />
          </div>

          {/* Glow border */}
          <div
            className="
            absolute -inset-1 rounded-3xl
            bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600
            opacity-40 blur-xl -z-10
          "
          />
        </div>
      </div>
    </section>
  );
};

const AstrologyServices = () => {
  const services = [
    {
      title: "Breakup Problem",
      desc: "Astrology guidance to handle separation issues and restore emotional balance.",
      img: "https://i.pinimg.com/736x/1c/77/2c/1c772cd72354da24308771d64fc70d02.jpg",
    },
    {
      title: "Gf / Bf Dispute",
      desc: "Supportive astrology remedies to reduce conflicts and improve understanding.",
      img: "https://i.pinimg.com/736x/a9/63/0d/a9630de48cbdf2fe602f0707e7e5a490.jpg",
    },
    {
      title: "Love Problem",
      desc: "Guidance focused on strengthening love and emotional harmony in relationships.",
      img: "https://i.pinimg.com/736x/04/f5/8b/04f58b8fa673e305280ffbefc464ed74.jpg",
    },
    {
      title: "Family Problem",
      desc: "Astrology-based consultation to bring peace and positivity into family life.",
      img: "https://i.pinimg.com/1200x/65/90/34/6590344e50ed6a28c5baf17159f702fd.jpg",
    },
  ];

  return (
    <section
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-16
            font-playfair
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          Our Other Astrology Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                group relative rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition-transform duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3
                  className="
                    absolute bottom-4 left-4
                    text-lg font-semibold
                    font-playfair
                    text-yellow-300
                    drop-shadow-lg
                  "
                >
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <p className="text-gray-300 text-sm font-inter leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* CTA */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className="
                      w-full flex items-center justify-center gap-2
                      px-5 py-3 rounded-full
                      font-medium text-gray-900
                      bg-gradient-to-r from-amber-400 to-yellow-500
                      shadow-lg hover:shadow-xl
                      hover:scale-105 transition
                    "
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AstrologyServicesModern = () => {
  const services = [
    {
      title: "World Famous Vashikaran Specialist",
      img: "https://i.pinimg.com/736x/f4/dd/70/f4dd70b40b2060a6e0c9f81c5da1d137.jpg",
    },
    {
      title: "Marriage Problems Specialist",
      img: "https://astrologerdeepaksharma.in/images/s2.png",
    },
    {
      title: "Husband & Wife Dispute",
      img: "https://astrologerdeepaksharma.in/images/s1.png",
    },
    {
      title: "Ex Love Back Guidance",
      img: "https://astrologerdeepaksharma.in/images/s3.png",
    },
  ];

  return (
    <section
      className="
        relative py-24 px-6 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.18),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-20
            font-playfair
            bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400
            bg-clip-text text-transparent
          "
        >
          Best Astrology Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                group relative rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                hover:-translate-y-3
              "
            >
              {/* Image */}
              <div className="flex justify-center mt-10">
                <div
                  className="
                    relative w-32 h-32 rounded-2xl overflow-hidden
                    border border-amber-400/40
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-500
                  "
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3
                  className="
                    text-xl md:text-2xl font-semibold mb-6
                    font-playfair
                    text-yellow-300
                  "
                >
                  {service.title}
                </h3>

                {/* CTA */}
                <a href={`tel:${phone_number}`}>
                  <button
                    className="
                      w-full flex items-center justify-center gap-2
                      px-6 py-3 rounded-full
                      font-medium text-gray-900
                      bg-gradient-to-r from-amber-400 to-yellow-500
                      shadow-lg hover:shadow-xl
                      hover:scale-105 transition
                    "
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AllServicesModern = () => {
  const services = [
    {
      title: "Ex Love Back",
      icon: Heart,
      desc: "Astrological remedies to bring your ex back with love & trust.",
    },
    {
      title: "Court Case Solution",
      icon: Scale,
      desc: "Effective solutions for legal & court-related issues.",
    },
    {
      title: "Family Problem",
      icon: Users,
      desc: "Resolve disputes & bring peace at home with astrology.",
    },
    {
      title: "Business Problem",
      icon: Briefcase,
      desc: "Boost your career & business success with remedies.",
    },
    {
      title: "Childless Couple",
      icon: Users,
      desc: "Astrological remedies to bless couples with children.",
    },
  ];
  return (
    <div className="relative bg-gradient-to-tr from-rose-100 via-amber-50 to-orange-100 py-20 px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-orange-500 mb-14 drop-shadow-lg">
          🔮 Explore Our Astrology Services 🔮
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, id) => (
            <div
              key={id}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-rose-100 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
            >
              {/* Icon or Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 montserrat group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed open-sans">
                {service.desc}
              </p>

              {/* Button */}
              <a href={`tel:${phone_number}`}>
                <button className="roboto flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-red-400/50 hover:scale-105 transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function HomeLastDesign() {
  return (
    <section
      className="
        relative py-28 px-6 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.25),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.18),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left – Image */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Gradient ring */}
            <div
              className="
                absolute -inset-3 rounded-full
                bg-gradient-to-r from-yellow-400 via-amber-500 to-pink-500
                blur-2xl opacity-40
                group-hover:opacity-60 transition
              "
            />
            <img
              src="https://i.pinimg.com/1200x/12/39/bb/1239bbdb9f4b81b9db0fa82ee4e2ecb6.jpg"
              alt={person_name}
              className="
                relative w-80 h-80 md:w-96 md:h-96
                rounded-full object-cover
                border border-amber-400/40
                shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                group-hover:scale-105 transition-transform duration-500
              "
            />
          </div>
        </div>

        {/* Right – Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2
            className="
              text-3xl md:text-5xl font-bold
              font-playfair
              bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
              bg-clip-text text-transparent
            "
          >
            {person_name}
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-200">
            Trusted Astrology & Spiritual Guidance
          </h3>

          <p className="font-inter text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            With years of experience in{" "}
            <span className="font-semibold text-amber-400">
              Vastu, Horoscope & Spiritual Consultation
            </span>
            , guidance is offered to individuals from diverse backgrounds
            seeking clarity, balance, and confident life decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <a
              href={`tel:${phone_number}`}
              className="
                flex items-center gap-2
                px-7 py-3 rounded-full
                font-medium text-gray-900
                bg-gradient-to-r from-amber-400 to-yellow-500
                shadow-lg hover:shadow-xl
                hover:scale-105 transition
              "
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href={`https://wa.me/${whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-7 py-3 rounded-full
                font-medium text-white
                bg-gradient-to-r from-emerald-500 to-emerald-600
                shadow-lg hover:shadow-xl
                hover:scale-105 transition
              "
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
