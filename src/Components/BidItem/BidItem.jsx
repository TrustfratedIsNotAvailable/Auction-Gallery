import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

const BidItem = ({bidItem,handleFavourite}) => {
    return (
        <tr>
            <td className='flex items-center gap-2'>
                 <img src={bidItem.image} 
                    alt={bidItem.title} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                {bidItem.title}
            </td>
            <td>${bidItem.currentBidPrice}</td>
            <td>{bidItem.timeLeft}</td>
            <td>
                <button onClick={()=>handleFavourite(bidItem)}><FaRegHeart /></button>
            </td>
            
        </tr>
    );
};

export default BidItem;