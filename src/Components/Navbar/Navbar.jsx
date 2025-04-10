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
                    <a className="btn">Home</a>
                    <a className="btn">Auctions</a>
                    <a className="btn">Categories</a>
                    <a className="btn">How to works</a>
                </div>

                <div className="flex-none flex items-center space-x-4">
                    {/* Notifications Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-base-300">
                            <div className="indicator bell-container">
                                <FaRegBell className="h-5 w-5 text-current" />
                                <span className="badge badge-sm indicator-item bell-badge">3</span>
                            </div>
                        </div>
                        <ul className="dropdown-content bg-white p-4 rounded-lg shadow-lg w-64 text-sm">
                            <li className="flex gap-2 pb-3 border-b border-gray-200">
                                <span className="text-lg">🎉</span>
                                <p className="m-0">You won the bid for <strong>“Vintage Typewriter”</strong></p>
                            </li>
                            <li className="flex gap-2 py-3 border-b border-gray-200">
                                <span className="text-lg">⏳</span>
                                <p className="m-0">
                                <strong>“Antique Clock”</strong> ends in <span className="text-yellow-500 font-semibold">10 mins</span>
                                </p>
                            </li>
                            <li className="flex gap-2 pt-3">
                                <span className="text-lg">📈</span>
                                <p className="m-0">New bid on <strong>“Signed Baseball”</strong></p>
                            </li>
                        </ul>

                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;