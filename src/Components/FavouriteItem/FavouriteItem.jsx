import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import './FavouriteItem.css';

const FavouriteItem = ({favItem}) => {
    console.log(favItem);
    return (
        <div>
            <div className='favourite'>
                <img src={favItem.image} alt="" />
                <div>
                    <p>{favItem.title}</p>
                    <p>{favItem.currentBidPrice} Bids:{favItem.bidsCount}</p>
                </div>
                <FaDeleteLeft size={24}/>
            </div>
        </div>
        
    );
};

export default FavouriteItem;