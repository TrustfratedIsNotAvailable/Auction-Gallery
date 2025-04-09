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
           {
            bidItems.map(bidItem => <BidItem key={bidItem.id} bidItem={bidItem}></BidItem>)
           } 
        </div>
    );
};

export default BidItems;