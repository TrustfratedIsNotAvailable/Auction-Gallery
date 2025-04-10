import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col items-center text-center py-20'>
                <div className="flex-0 space-x-0 text-[24px] mb-2">
                        <span className='text-[#003EA4]'>Auction</span>
                        <span className='text-[#FFD337] font-bold'>Gallery</span>
                </div>

                <div className='flex space-x-1.5 text-[20px] mb-4'>
                    <a>Bid.</a>
                    <a>Win.</a>
                    <a>Own.</a>
                </div> 
                
                <div className="flex flex-1 space-x-4 mb-6">
                        <a className="text-[16px]">Home</a>
                        <a className="text-[16px]">Auctions</a>
                        <a className="text-[16px]">Categories</a>
                        <a className="text-[16px]">How to works</a>
                </div>
                <p>© 2025 AuctionHub. All rights reserved.</p> 
            </div>
        </div>
    );
};

export default Footer;