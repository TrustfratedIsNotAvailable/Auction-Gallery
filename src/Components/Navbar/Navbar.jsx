import React from 'react';
import { FaRegBell } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-16">
                <div className="flex-0 space-x-0 text-xl">
                    <span className='text-[#003EA4]'>Auction</span>
                    <span className='text-[#FFD337] font-bold'>Gallery</span>
                </div>

                 {/* Centered items list */}
                 <div className="flex flex-1 justify-center space-x-4">
                    <a className="btn btn-ghost">Home</a>
                    <a className="btn btn-ghost">Auctions</a>
                    <a className="btn btn-ghost">Categories</a>
                    <a className="btn btn-ghost">How to works</a>
                </div>
                <div className="flex-none  flex items-center space-x-4">
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-base-300">
                        <div className="indicator">
                        <FaRegBell className="h-5 w-5 text-current" />
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    {/* <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                        <span className="text-lg font-bold">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                        </div>
                    </div> */}
                    </div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    {/* <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;