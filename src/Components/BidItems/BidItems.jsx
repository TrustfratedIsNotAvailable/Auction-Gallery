import React, { useEffect, useState } from "react";
import BidItem from "../BidItem/BidItem";

const BidItems = ({ handleFavourite, favouriteItem }) => {
  const [bidItems, setBidItems] = useState([]);

  useEffect(() => {
    fetch("bid_products.json")
      .then((res) => res.json())
      .then((data) => setBidItems(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto rounded-lg shadow">
        <table className="table bg-white">
          <thead>
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {bidItems.map((bidItem) => {
              const isFavourite = favouriteItem.some(
                (fav) => fav.id === bidItem.id
              );
              return (
                <BidItem
                  key={bidItem.id}
                  bidItem={bidItem}
                  handleFavourite={handleFavourite}
                  isFavourite={isFavourite}
                  isCardView={false}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-6 mt-6">
        {bidItems.map((bidItem) => {
          const isFavourite = favouriteItem.some(
            (fav) => fav.id === bidItem.id
          );
          return (
            <BidItem
              key={bidItem.id}
              bidItem={bidItem}
              handleFavourite={handleFavourite}
              isFavourite={isFavourite}
              isCardView={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BidItems;
