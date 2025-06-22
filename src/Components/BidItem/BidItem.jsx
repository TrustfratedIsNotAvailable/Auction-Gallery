import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

const BidItem = ({ bidItem, handleFavourite, isFavourite, isCardView }) => {
  const handleClick = () => {
    if (!isFavourite) {
      handleFavourite(bidItem);
      toast.success(`${bidItem.title} added to favourites! 💖`);
    }
  };

  const favouriteButtonClasses = isFavourite
    ? "text-red-500 cursor-not-allowed hover:animate-bounce"
    : "text-gray-500 hover:text-red-400 cursor-pointer hover:scale-110";

  if (isCardView) {
    return (
      <div className="bg-white rounded-xl shadow-md p-5 space-y-3">
        <div className="flex items-center gap-4">
          <img
            src={bidItem.image}
            alt={bidItem.title}
            className="w-16 h-16 rounded-lg object-cover shadow-sm"
          />
          <div>
            <p className="font-semibold text-gray-800">{bidItem.title}</p>
            <p className="text-sm text-gray-500">{bidItem.description}</p>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>
            <span className="font-semibold">Bid:</span> $
            {bidItem.currentBidPrice}
          </p>
          <p>
            <span className="font-semibold">Time Left:</span> {bidItem.timeLeft}
          </p>
        </div>
        <div className="text-right">
          <button
            onClick={handleClick}
            disabled={isFavourite}
            className={`text-xl transition-transform duration-200 ${favouriteButtonClasses}`}
          >
            {isFavourite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className="hover:bg-gray-50">
      <td className="flex items-center gap-3 py-3">
        <img
          src={bidItem.image}
          alt={bidItem.title}
          className="w-12 h-12 object-cover rounded shadow-sm"
        />
        <span className="text-gray-800 font-medium">{bidItem.title}</span>
      </td>
      <td>${bidItem.currentBidPrice}</td>
      <td>{bidItem.timeLeft}</td>
      <td>
        <button
          onClick={handleClick}
          disabled={isFavourite}
          className={`text-xl transition-transform duration-200 ${favouriteButtonClasses}`}
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </td>
    </tr>
  );
};

export default BidItem;
