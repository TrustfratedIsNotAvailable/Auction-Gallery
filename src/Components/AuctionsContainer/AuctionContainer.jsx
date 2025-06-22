import React, { useState, useRef } from "react";
import BidItems from "../BidItems/BidItems";
import FavouriteItem from "../FavouriteItem/FavouriteItem";
import { FaRegHeart } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const AuctionsContainer = () => {
  const [favouriteItem, setFavouriteItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleFavourite = (bidItem) => {
    if (!favouriteItem.some((item) => item.id === bidItem.id)) {
      setFavouriteItem([...favouriteItem, bidItem]);
      setTotalAmount(totalAmount + bidItem.currentBidPrice);
    }
  };

  const handleDelete = (favItem) => {
    setFavouriteItem((prev) => prev.filter((item) => item.id !== favItem.id));
    setTotalAmount(totalAmount - favItem.currentBidPrice);
  };

  // Ref for the container
  const containerRef = useRef(null);
  // Detect container view (50% visible)
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50, backgroundColor: "#F1F5F9" }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              backgroundColor: [
                "#F1F5F9",
                "#E0F2FE",
                "#BAE6FD",
                "#E0F2FE",
                "#F1F5F9",
              ], // cycle color
            }
          : { opacity: 0, y: 50, backgroundColor: "#F1F5F9" }
      }
      transition={
        isInView
          ? {
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              opacity: { duration: 0.8 },
              y: { duration: 0.8 },
              backgroundColor: { duration: 2, repeat: Infinity },
            }
          : { duration: 0 }
      }
      className="py-12 px-4 md:px-8 lg:px-16 rounded-lg"
    >
      {/* Header */}
      <div className="mb-8 text-center md:text-left">
        <p className="font-semibold text-2xl md:text-3xl text-[#0E2954] mb-2">
          Active Auctions
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Discover and bid on extraordinary items
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Bid Items */}
        <div className="w-full lg:w-2/3 shadow-lg bg-white rounded-lg p-4">
          <BidItems
            handleFavourite={handleFavourite}
            favouriteItem={favouriteItem}
          />
        </div>

        {/* Right - Favourites */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-center space-x-2 py-4 font-semibold text-xl text-[#0E2954] border-b bg-[#F4F9FD]">
            <FaRegHeart className="text-[#0E2954]" />
            <span>Favourite Items</span>
          </div>

          {/* List */}
          <div className="max-h-[400px] overflow-y-auto p-4 border-b scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {favouriteItem.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-base font-medium text-gray-700">
                  No favourites yet
                </p>
                <p className="text-sm text-gray-500">
                  Click the heart icon on any item to add it to your favorites
                </p>
              </div>
            ) : (
              favouriteItem.map((favItem) => (
                <FavouriteItem
                  key={favItem.id}
                  favItem={favItem}
                  handleDelete={handleDelete}
                />
              ))
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-700">
            <span>Total Bids Amount</span>
            <span className="text-[#0E2954] font-bold">${totalAmount}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuctionsContainer;
