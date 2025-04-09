import React, { useEffect, useState } from 'react';
import BidItem from '../BidItem/BidItem';

const BidItems = () => {
    const [bidItems,setBidItems] = useState([]);

    useEffect(()=>{
        fetch("bid_products.json")
            .then(res=>res.json())
        .then(data => setBidItems(data))
    },[]);
    
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Items</th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bidItems.map(bidItem => (
                                <BidItem key={bidItem.id} bidItem={bidItem} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidItems;