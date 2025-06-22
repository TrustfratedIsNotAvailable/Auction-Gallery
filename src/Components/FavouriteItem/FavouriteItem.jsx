import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "react-toastify";

const FavouriteItem = ({ favItem, handleDelete }) => {
  const handleClick = () => {
    handleDelete(favItem);
    toast.warning(`Removed ${favItem.title} from favourites`);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 mb-4">
      {/* Image */}
      <img
        src={favItem.image}
        alt={favItem.title}
        className="w-16 h-16 object-cover rounded-lg"
      />

      {/* Info */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold text-[#0E2954] mb-1">
          {favItem.title}
        </h3>
        <div className="flex gap-6 text-sm text-gray-600">
          <p className="font-medium">${favItem.currentBidPrice}</p>
          <p className="font-medium">Bids: {favItem.bidsCount}</p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={handleClick}
        aria-label={`Remove ${favItem.title} from favourites`}
        className="text-red-500 hover:text-red-600 transition-transform duration-150 hover:scale-110 p-2 rounded-full"
      >
        <FaDeleteLeft size={20} />
      </button>
    </div>
  );
};

export default FavouriteItem;
