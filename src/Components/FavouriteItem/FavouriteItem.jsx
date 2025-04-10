import React from 'react';
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from 'react-toastify';
import './FavouriteItem.css';

const FavouriteItem = ({favItem,handleDelete}) => {
    const handleClick = () =>{
        handleDelete(favItem);
        toast.warning(`Removed ${favItem.title} from favourites`);
    }
    return (
        <div>
            <div className='favourite'>
                <img src={favItem.image} alt="" />
                <div>
                    <p className='mb-2'>{favItem.title}</p>
                    <div className='flex gap-x-5'>
                        <p>${favItem.currentBidPrice}</p>
                        <p>Bids:{favItem.bidsCount}</p>
                    </div> 

                </div>
                <button onClick={handleClick}><FaDeleteLeft size={24}/></button> 
            </div>
        </div>
        
    );
};

export default FavouriteItem;