import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-8">
        {/* Branding */}
        <div className="text-4xl font-extrabold tracking-tight mb-2">
          <span className="text-yellow-400">Auction</span>
          <span className="text-white">Gallery</span>
        </div>

        {/* Tagline */}
        <div className="flex space-x-4 text-lg font-semibold italic text-yellow-300">
          <span className="hover:text-yellow-400 cursor-default">Bid.</span>
          <span className="hover:text-yellow-400 cursor-default">Win.</span>
          <span className="hover:text-yellow-400 cursor-default">Own.</span>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex space-x-10 text-white text-lg"
        >
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Auctions
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Categories
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            How it works
          </a>
        </nav>

        {/* Divider */}
        <hr className="w-full max-w-md border-yellow-400 border-opacity-30" />

        {/* Copyright */}
        <p className="text-yellow-300 text-sm">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
