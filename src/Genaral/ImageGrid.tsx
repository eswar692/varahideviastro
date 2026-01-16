import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.pinimg.com/736x/03/bf/9a/03bf9a054494dcc6f586e797cc801c48.jpg",
  "https://i.pinimg.com/1200x/3c/92/92/3c929254c1a0f88ef3ad9808780ffb46.jpg",
  "https://allproblemsolutionastro.com/images/Award-2.jpg",
  "https://allproblemsolutionastro.com/images/Award-3.jpg",
  "https://i.pinimg.com/1200x/f1/eb/07/f1eb072e9930bb22bf9afc53fd9faf89.jpg",
  "https://i.pinimg.com/1200x/fc/b1/54/fcb154019b1609ca4b057958eb44548d.jpg",
  "https://i.pinimg.com/736x/98/ca/10/98ca100ea8ed28b788462e82d21d67a9.jpg",
  "https://i.pinimg.com/736x/34/1d/eb/341deb4d9ba9bd2934f0d996567b37a3.jpg",
  "https://i.pinimg.com/736x/76/e5/5d/76e55d31c07ccdf60944be5e80878dd6.jpg",
  "https://i.pinimg.com/736x/ea/17/c0/ea17c01906209a5448d9eaa6413f0f09.jpg",
  "https://i.pinimg.com/736x/9f/42/7a/9f427af8502ef53e4d07e7dbe922a14e.jpg",
  "https://i.pinimg.com/736x/ba/38/4f/ba384fb8971c45251ee37b4aeff06372.jpg",
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      className="
        relative py-24 px-4 overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#020024] to-[#020617]
      "
    >
      {/* Soft gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.2),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-center mb-16">
          <span
            className="
              block text-4xl md:text-6xl font-bold
              font-playfair
              bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500
              bg-clip-text text-transparent
            "
          >
            Famous Vashikaran
          </span>

          <span className="block mt-3 text-sm md:text-lg font-inter text-gray-300">
            Certificates • Awards • Recognition
          </span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-xl hover:shadow-2xl
                transition-all duration-300
                cursor-pointer
              "
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="
                  w-full h-48 object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/70 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition
                "
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed inset-0 z-50
              bg-black/80 backdrop-blur-sm
              flex items-center justify-center
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="
                max-h-[90%] max-w-[90%]
                rounded-3xl
                shadow-[0_40px_120px_rgba(0,0,0,0.8)]
                border border-white/10
              "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGrid;
