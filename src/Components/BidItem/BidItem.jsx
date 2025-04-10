import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import './BidItem.css';

const BidItem = ({bidItem,handleFavourite, isFavourite }) => {
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
                <button 
                    onClick={() => handleFavourite(bidItem)} 
                    disabled={isFavourite}
                    style={{
                        cursor: isFavourite ? 'not-allowed' : 'pointer',
                        color: isFavourite ? '#dc2626' : 'inherit',
                        fontSize: '18px',
                        transform: 'none',
                        transition: 'transform 0.2s ease, color 0.2s ease'
                    }}
                    className='heart-button'
                >
                    {isFavourite ? <FaHeart /> : <FaRegHeart />}
            </button>
            </td>
            
        </tr>
    );
};

export default BidItem;