import React, { useEffect, useState } from 'react';
import BidItem from '../BidItem/BidItem';
import './BidItems.css';

const BidItems = ({handleFavourite, favouriteItem}) => {
    const [bidItems,setBidItems] = useState([]);

    useEffect(()=>{
        fetch("bid_products.json")
            .then(res=>res.json())
        .then(data => setBidItems(data))
    },[]);
    
    return (
        
        <div>
            <div className="overflow-x-auto">
                <table className="table bg-white">
                    {/* head */}
                    <thead style={{ backgroundColor: '#F4F9FD' }}>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bidItems.map(bidItem => {
                                const isFavourite = favouriteItem.some(fav => fav.id === bidItem.id);
                                return (
                                    <BidItem 
                                        key={bidItem.id} 
                                        bidItem={bidItem}
                                        handleFavourite={handleFavourite}
                                        isFavourite={isFavourite} 
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidItems;