import React, { useState, useEffect, useRef } from "react";
import { Bell, ChevronDown, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const notifRef = useRef();
  const profileRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotifOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Auctions", id: "auctions" },
    { name: "Categories", id: "categories" },
    { name: "How it works", id: "how-it-works" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold flex items-center gap-1 select-none"
        >
          <span className="text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337]">Gallery</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700 tracking-wide">
          {navLinks.map(({ name, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative px-1 py-1 hover:text-[#003EA4] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#003EA4] after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-6 relative">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-[#003EA4] focus:outline-none"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Notification */}
          <div ref={notifRef} className="relative hidden md:block">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              aria-label="Notifications"
              className="relative p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#003EA4]"
            >
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
                3
              </span>
            </button>

            {notifOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50 animate-fadeIn">
                <p className="px-4 py-3 text-sm font-semibold text-gray-800 border-b border-gray-200">
                  Notifications
                </p>
                <ul className="divide-y divide-gray-100">
                  <li className="px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <span>🔔</span> Auction ending in 1hr
                  </li>
                  <li className="px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <span>✅</span> Item won successfully
                  </li>
                  <li className="px-4 py-2 text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                    <span>📦</span> Your item has shipped
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div ref={profileRef} className="relative hidden md:block">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              aria-label="User menu"
              className="flex items-center gap-1 text-gray-700 hover:text-[#003EA4] focus:outline-none focus:ring-2 focus:ring-[#003EA4] rounded"
            >
              <User className="w-6 h-6" />
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  profileOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50 animate-fadeIn">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                >
                  Settings
                </a>
                <button
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  type="button"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className="md:hidden bg-white px-6 pt-2 pb-4 border-t shadow animate-slideDown"
        >
          <ul className="flex flex-col gap-3 font-semibold text-gray-700">
            {navLinks.map(({ name, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2 hover:text-[#003EA4] transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease forwards;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
