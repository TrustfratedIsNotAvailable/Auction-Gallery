import React from 'react';
import { FaRegHeart } from "react-icons/fa6";

const BidItem = ({bidItem}) => {
    
    console.log(bidItem.image);
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
            <td><FaRegHeart /></td>
            
        </tr>
    );
};

export default BidItem;