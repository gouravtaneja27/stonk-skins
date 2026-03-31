// import React from "react";
// import { FaWallet } from "react-icons/fa";
// import { FaCaretDown } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";
// import Category from "./Category";
// import Icons from "./Icons";

// const Navbar = () => {
//     return (
//         <div className="w-full mx-auto bg-black backdrop-blur-[10px]">
//             <div className="max-w-287 mx-auto w-full flex flex-col items-center justify-center pt-3">
//                 <div className="flex items-center justify-between w-full mb-4">
//                     <div className="flex items-center gap-7.75">
//                         <img src="/assets/logo.webp" alt="" className="w-29 h-13.75" />
//                         <div className="flex items-center backgroung-img relative max-w-[320px] w-full max-h-13">
//                             <input
//                                 type="search"
//                                 placeholder="Search Skins..."
//                                 className="py-4 w-[268px] h-[52px] focus:outline-none pl-8 font-medium  text-base leading-[125%] text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px] "
//                             />
//                             <button className="flex items-center justify-center left-66.5 bg-[#FFFFFF0F]/6  h-13 w-13 rounded-[500px]">
//                                 <Icons icon={"search"} />
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center">
//                         <p className="font-medium text-base text-[#F5F5F5] leading-[125%] mr-16 cursor-pointer">
//                             Market
//                         </p>
//                         <p className="font-bold text-base leading-[150%] text-[#F5F5F5] flex items-center gap-2 mr-8 cursor-pointer">
//                             <span className="text-[#FFFFFF]/10 ">
//                                 <FaWallet />
//                             </span>
//                             $0
//                         </p>
//                         <div className="flex items-center">
//                             <p className="font-normal text-base leading-[150%] text-[#F5F5F5] mr-2">
//                                 John Doe
//                             </p>
//                             <div className="h-11 w-11 img flex items-center justify-center text-[#FFFFFF]">
//                                 <FaUserAlt />
//                             </div>
//                             <p className="text-white cursor-pointer "><FaCaretDown /></p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="border-t border-t-[#43344C8C] w-full pt-3.5 pb-4.5">
//                     <Category />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client";

import React, { useState } from "react";
import { FaWallet, FaCaretDown, FaUserAlt } from "react-icons/fa";
import Category from "./Category";
import Icons from "./Icons";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <div className="w-full mx-auto bg-black backdrop-blur-[10px]">
            <div className="max-w-287 mx-auto w-full flex flex-col items-center justify-center pt-3 px-4 lg:px-0">

                {/* Top Row */}
                <div className="flex items-center justify-between w-full mb-4">

                    {/* Left: Logo + Search */}
                    <div className="flex items-center gap-4 lg:gap-7.75">
                        <img src="/assets/logo.webp" alt="Logo" className="w-24 h-11 lg:w-29 lg:h-13.75 object-contain" />

                        {/* Search — hidden on mobile */}
                        <div className="hidden md:flex items-center relative max-w-[320px] w-full max-h-13">
                            <input
                                type="search"
                                placeholder="Search Skins..."
                                className="py-4 w-[268px] h-[52px] focus:outline-none pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px]"
                            />
                            <button className="flex items-center justify-center absolute right-0 bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                                <Icons icon={"search"} />
                            </button>
                        </div>
                    </div>

                    {/* Right: Nav items — hidden on mobile */}
                    <div className="hidden md:flex items-center justify-center">
                        <p className="font-medium text-base text-[#F5F5F5] leading-[125%] mr-16 cursor-pointer hover:text-purple-400 transition-colors">
                            Market
                        </p>
                        <p className="font-bold text-base leading-[150%] text-[#F5F5F5] flex items-center gap-2 mr-8 cursor-pointer">
                            <span className="text-[#FFFFFF]/10">
                                <FaWallet />
                            </span>
                            $0
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="font-normal text-base leading-[150%] text-[#F5F5F5]">
                                John Doe
                            </p>
                            <div className="h-11 w-11 flex items-center justify-center text-[#FFFFFF] bg-[#FFFFFF0F] rounded-full">
                                <FaUserAlt />
                            </div>
                            <p className="text-white cursor-pointer">
                                <FaCaretDown />
                            </p>
                        </div>
                    </div>

                    {/* Hamburger — visible on mobile only */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
                        aria-label="Toggle Menu"
                    >
                        {/* Animated hamburger → cross */}
                        <span
                            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${menuOpen ? "opacity-0 scale-x-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-4 pb-4 border-b border-b-[#43344C8C]">

                        {/* Mobile Search */}
                        <div className="flex items-center relative w-full">
                            <input
                                type="search"
                                placeholder="Search Skins..."
                                className="py-3 w-full h-[48px] focus:outline-none pl-5 pr-14 font-medium text-sm text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px]"
                            />
                            <button className="flex items-center justify-center absolute right-1 bg-[#FFFFFF0F]/6 h-11 w-11 rounded-[500px]">
                                <Icons icon={"search"} />
                            </button>
                        </div>

                        {/* Mobile Nav Links */}
                        <p className="font-medium text-base text-[#F5F5F5] cursor-pointer hover:text-purple-400 transition-colors px-1">
                            Market
                        </p>

                        <div className="flex items-center gap-2 px-1">
                            <span className="text-white/60">
                                <FaWallet />
                            </span>
                            <p className="font-bold text-base text-[#F5F5F5]">$0</p>
                        </div>

                        <div className="flex items-center gap-3 px-1">
                            <div className="h-10 w-10 flex items-center justify-center text-white bg-[#FFFFFF0F] rounded-full">
                                <FaUserAlt />
                            </div>
                            <p className="font-normal text-base text-[#F5F5F5]">John Doe</p>
                            <FaCaretDown className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Category Bar — always visible */}
                <div className="border-t border-t-[#43344C8C] w-full pt-3.5 pb-4.5">
                    <Category />
                </div>
            </div>
        </div>
    );
};

export default Navbar;