import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        // <div className="banner bg-[url('/images/Banner-min.jpg')] bg-cover bg-center h-screen">
        <div className="banner">
            <div className='w-5/12 pl-16 pt-24'>
               <h1 className='text-[40px] font-semibold text-white mb-4'>Bid on Unique Items from Around the World</h1> 
               <p className='text-[20px] font-light text-white mb-4'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
               <button className='btn text-[16px] font-medium'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;