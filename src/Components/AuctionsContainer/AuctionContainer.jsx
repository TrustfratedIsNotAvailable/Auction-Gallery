import React, { useState } from 'react';
import BidItems from '../BidItems/BidItems';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import { FaRegHeart } from "react-icons/fa6";

const AuctionsContainer = () => {
    const [favouriteItem, setFavouriteItem] = useState([]);
    const [totalAmount , setTotalAmount]=useState(0);

    const handleFavourite =(bidItem)=>{
        setFavouriteItem([...favouriteItem, bidItem]);
        setTotalAmount(totalAmount + bidItem.currentBidPrice);
    }

    const handleDelete = (favItem) => {
        setFavouriteItem((prev) => prev.filter(item => item.id !== favItem.id));
        setTotalAmount(totalAmount - favItem.currentBidPrice);
    };
    // bg-[#F9FBFD] 
    return (
        <div>
            <div className='bg-[#F1F5F9]  py-25 px-16'>
                <p className='font-medium text-[24px] text-[#0E2954] mb-2'>Active Auctions</p>
                <p className='text-[18px] mb-7'>Discover and bid on extraordinary items</p>

                <div className='flex space-x-5'>
                    {/* left  */}
                    <div className="left-container w-[70%] shadow-lg">
                        <BidItems 
                            handleFavourite={handleFavourite}
                            favouriteItem={favouriteItem} 
                        ></BidItems>
                    </div>
                    {/* right  */}
                    <div className="right-container w-[30%] bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-center space-x-2 py-3 font-semibold text-[22px] text-[#0E2954] border-b-2 border-gray-200 bg-[#F4F9FD]">
                            <FaRegHeart className="text-[#0E2954]" />
                            <p>Favourite Items</p>
                        </div>
                        {/* Favourite List */}
                        <div className='max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent border-b-2 border-gray-200'>
                            {favouriteItem.length === 0 ? (
                                <div className="text-center py-10 px-18">
                                    <p className='text-[16px] font-medium text-gray-700'>No favourites yet</p>
                                    <p className='text-[12px] text-gray-500'>Click the heart icon on any item to add it to your favorites</p>
                                </div>
                                ) : (
                                favouriteItem.map(favItem => (
                                    <FavouriteItem 
                                        key={favItem.id} 
                                        favItem={favItem} 
                                        handleDelete={handleDelete} 
                                    />
                                ))
                            )}
                        </div>
 
                       {/* Total */}
                        <div className="flex justify-between items-center p-5 text-lg font-medium text-gray-700">
                            <p>Total Bids Amount</p>
                            <p className="text-[#0E2954] font-bold">${totalAmount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionsContainer;