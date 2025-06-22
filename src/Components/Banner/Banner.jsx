import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  // Scroll handler
  const scrollToAuctions = () => {
    const auctionsSection = document.getElementById("auctions");
    if (auctionsSection) {
      auctionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner relative flex items-center">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Bid on Unique Items from Around the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-white font-light mb-8 drop-shadow"
        >
          Discover rare collectibles, luxury goods, and vintage treasures in our
          curated auctions.
        </motion.p>

        <motion.button
          onClick={scrollToAuctions}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black px-6 py-3 text-base rounded-lg font-medium shadow-lg transition transform hover:scale-105 hover:brightness-110"
        >
          Explore Auctions
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
