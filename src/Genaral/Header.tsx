import { Heart, MenuIcon, ShieldCheck, Sparkles, X } from "lucide-react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { business_name, person_name, phone_number } from "./secret";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-pink-50 to-purple-100 shadow-lg top-0 z-50">
      <TitleCTA />

      <div className="px-2 md:max-w-[80%] mx-auto flex flex-col gap-6 py-">
        <LogoAndMenu />
      </div>
      <ScrollingMarquee />
    </header>
  );
};

export default Header;

const TitleCTA = () => (
  <div className="relative w-full bg-gradient-to-r from-[#020617] via-[#020024] to-[#020617]">
    {/* Soft gold glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_70%)] pointer-events-none" />

    <div className="w-full md:max-w-[85%] mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      {/* Left Name */}
      <div className="flex items-center gap-3">
        <h5 className="font-playfair font-semibold text-yellow-300 tracking-wide text-sm md:text-2xl">
          {person_name}
        </h5>
      </div>

      {/* Call Button */}
      <a
        href={`tel:${phone_number}`}
        className="
          px-4 py-2 md:px-6 md:py-2.5
          bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500
          hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600
          text-gray-900 font-semibold rounded-full
          shadow-lg hover:shadow-xl
          transition-all duration-300 hover:scale-105
          text-xs md:text-base
        "
      >
        📞 Call Now
      </a>
    </div>
  </div>
);

const LogoAndMenu = () => (
  <div className="py-4 flex flex-row items-center justify-between gap-6">
    {/* Logo + Brand */}
    <div className="flex items-center gap-4">
      <img
        src="https://i.pinimg.com/1200x/72/fa/9e/72fa9e057609ee8c1bed42b781f882a1.jpg"
        alt="Chamundeswari Astrology Logo"
        className="
          w-16 h-16 md:w-24 md:h-24
          rounded-2xl object-cover
          border border-yellow-400/50
          shadow-xl
        "
      />

      <div className="flex flex-col">
        {/* Business Name with gradient */}
        <h1
          className="
            font-playfair font-bold
            text-xl md:text-3xl
            tracking-wide
            bg-gradient-to-r from-yellow-800 via-amber-900 to-orange-900
            bg-clip-text text-transparent
            drop-shadow-[0_0_12px_rgba(234,179,8,0.35)]
          "
        >
          {business_name}
        </h1>

        {/* Trust line */}
        <p className="font-inter text-xs md:text-sm text-gray-500 mt-0.5">
          Trusted Astrology Since 1956
        </p>

        {/* Service line */}
        <p className="font-inter text-xs md:text-sm text-gray-600 mt-1 max-w-[440px]">
          Traditional astrology guidance for love, marriage, and personal
          harmony
        </p>

        {/* Call numbers */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs md:text-sm font-inter">
          <span className="text-gray-700 font-semibold">Call Now:</span>
          <a
            href="tel:6363600791"
            className="text-rose-600 font-semibold hover:text-rose-700 transition"
          >
            {phone_number}
          </a>
        </div>
      </div>
    </div>

    {/* Navigation */}
    <NavigationMenu />
  </div>
);

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Desktop Menu */}
      <ul
        className="
        hidden lg:flex items-center gap-10
        font-inter text-base font-medium
        text-gray-800
      "
      >
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link key={item} to={`/${item.toLowerCase()}`}>
            <li
              className="
                relative cursor-pointer
                transition-colors duration-300
                hover:text-amber-600
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-amber-500
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden
          p-2.5 rounded-xl
          bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
          shadow-lg
          transition-all duration-300
          hover:scale-105 hover:shadow-xl
          focus:outline-none
        "
        aria-label="Open menu"
      >
        <MenuIcon className="w-7 h-7 text-gray-900" strokeWidth={2.2} />
      </button>

      {/* Mobile Menu */}
      {open && <MobileNav setOpen={setOpen} />}
    </div>
  );
};

const MobileNav = ({ setOpen }: { setOpen: (open: boolean) => void }) => (
  <div
    className="
    fixed inset-0 z-50
    bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
    p-8 flex flex-col justify-between
    shadow-2xl
    animate-slide-in
  "
  >
    {/* Top: Brand + Close */}
    <div>
      <div className="flex justify-between items-center mb-8">
        {/* Brand */}
        <h1
          className="
            font-playfair font-bold
            text-2xl
            tracking-wide
            bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
            bg-clip-text text-transparent
          "
        >
          {business_name}
        </h1>

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="
            p-2.5 rounded-full
            bg-gradient-to-r from-yellow-500 to-amber-600
            shadow-lg
            hover:scale-105 transition-transform
          "
        >
          <X className="w-5 h-5 text-gray-900" />
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col gap-6 font-inter text-lg">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            <li
              className="
                text-gray-200
                hover:text-yellow-400
                transition-colors
                cursor-pointer
              "
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </div>

    {/* Footer description */}
    <p className="font-inter text-gray-300 text-sm leading-relaxed mt-10">
      <span className="font-semibold text-yellow-400">
        Pandith Raghavendra Guruji
      </span>{" "}
      — Expert horoscope guidance, match-making insights, career clarity, and
      traditional spiritual consultations for balanced living.
    </p>
  </div>
);

const ScrollingMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#020617] via-[#020024] to-[#020617] border-y border-yellow-500/30">
      {/* Soft glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_70%)] pointer-events-none" />

      <Marquee
        speed={50}
        pauseOnHover
        gradient={false}
        className="flex items-center gap-10 py-3 text-yellow-300 font-semibold tracking-wide text-sm md:text-base lg:text-lg"
      >
        <span className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-400" />
          Facing Love Breakup or Relationship Issues?
        </span>

        <span className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Marriage Disputes & Emotional Stress Solutions
        </span>

        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Get Trusted Vashikaran Guidance from an Expert Astrologer
        </span>
      </Marquee>
    </div>
  );
};
