import React, { useState } from 'react';
import BidItems from '../BidItems/BidItems';
import FavouriteItem from '../FavouriteItem/FavouriteItem';
import { FaRegHeart } from "react-icons/fa6";

const AuctionsContainer = () => {
    const [favouriteItem, setFavouriteItem] = useState([]);

    const handleFavourite =(bidItem)=>{
        console.log("Hello",bidItem);
        setFavouriteItem([...favouriteItem,bidItem]);
    }

    return (
        <div>
            <div className='bg-[#EBF0F5] py-25 px-16'>
                <p className='font-medium text-[24px] text-[#0E2954] mb-2'>Active Auctions</p>
                <p className='text-[18px] mb-7'>Discover and bid on extraordinary items</p>

                <div className='flex space-x-5'>
                    {/* left  */}
                    <div className="left-container w-[70%]">
                        <BidItems handleFavourite={handleFavourite}></BidItems>
                    </div>
                    {/* right  */}
                    <div className="right-container w-[30%] bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-center space-x-2 pt-6 pb-4 font-semibold text-[22px] text-[#0E2954] bg-gray-50">
                            <FaRegHeart className="text-[#0E2954]" />
                            <p>Favourite Items</p>
                        </div>
                        {/* Favourite List */}
                        <div className='max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
                            {
                                favouriteItem.map(favItem => <FavouriteItem key={favItem.id} favItem={favItem}></FavouriteItem>) 
                            }
                        </div> 
                       {/* Total */}
                        <div className="flex justify-between items-center p-5 text-lg font-medium text-gray-700">
                            <p>Total Bids Amount</p>
                            <p className="text-[#0E2954] font-bold">${/* Total goes here */}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionsContainer;