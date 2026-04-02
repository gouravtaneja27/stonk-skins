"use client";
import React, { useState } from "react";
import {
    FaCaretDown,
    FaUserAlt,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import Icons from "./Icons";
import Category from "./Category";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full fixed z-10 mx-auto backdrop-blur-[10px] ">
            <div className="max-w-287 mx-auto w-full flex flex-col items-center justify-center pt-3 px-4 lg:px-0">
                <div className="flex items-center justify-between w-full mb-4 sm:gap-0 gap-3 gap-y-3">
                    <div className="flex items-center gap-7.75 w-full min-[810px]:w-auto">
                        <img src="/assets/logo.webp" alt="" className="w-29 h-13.75" />

                        <div className="hidden min-[810px]:block">
                            <div className="flex items-center backgroung-img max-w-[320px] w-full h-13">
                                <input
                                    type="search"
                                    placeholder="Search Skins..."
                                    className="py-4 max-w-67 focus:outline-none w-full h-[52px] pl-8 font-medium text-base leading-[125%] text-[#F5F5F56E]/43 bg-[#FFFFFF0F]/6 rounded-[68px]"
                                />
                                <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                                    <Icons icon={"search"} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="min-[810px]:hidden">
                        <div className="flex items-center image w-25.75 h-13">
                            <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                                <Icons icon={"search"} />
                            </button>
                            <button
                                onClick={() => setMenuOpen(true)}
                                className="min-[810px]:hidden ml-4 text-white text-xl"
                            >
                                <FaBars />
                            </button>
                        </div>
                    </div>
                    <div className="hidden min-[810px]:flex items-center justify-center flex-wrap gap-x-8 gap-y-2 w-full min-[810px]:w-auto">
                        <p className="font-medium text-base text-[#F5F5F5] pr-8 leading-[125%] cursor-pointer">
                            Market
                        </p>

                        <p className="font-bold text-base leading-[150%] text-[#F5F5F5] flex items-center gap-2">
                            <span className="text-[#FFFFFF]/10">
                                <Icons icon={"wallet"} />
                            </span>
                            $0
                        </p>

                        <div className="flex items-center cursor-pointer">
                            <p className="font-normal text-base leading-[150%] text-[#F5F5F5] mr-2">
                                John Doe
                            </p>
                            <div className="h-11 w-11 img flex items-center justify-center text-[#FFFFFF]">
                                <FaUserAlt />
                            </div>
                            <p className="text-white">
                                <FaCaretDown />
                            </p>
                        </div>
                    </div>
                </div>
                {menuOpen && (
                    <div
                        onClick={() => setMenuOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 min-[810px]:hidden"
                    />
                )}
                <div
                    className={`fixed top-0 right-0 h-screen w-full bg-[#7b41a7] z-70 transform transition-transform duration-300 min-[810px]:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col gap-6 p-6 pt-6">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-xl"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        <p className="font-medium text-base text-[#F5F5F5] cursor-pointer ">
                            Market
                        </p>

                        <p className="font-bold text-base text-[#F5F5F5] flex items-center gap-2">
                            <span className="text-[#FFFFFF]/10">
                                <Icons icon={"wallet"} />
                            </span>
                            $0
                        </p>

                        <div className="flex items-center">
                            <p className="text-[#F5F5F5] mr-2">John Doe</p>
                            <div className="h-11 w-11 flex items-center justify-center text-white">
                                <FaUserAlt />
                            </div>
                            <FaCaretDown className="text-white ml-1" />
                        </div>

                    </div>
                </div>
                <div className="border-t border-t-[#43344C8C]  w-full pt-3.5 pb-4.5 overflow-x-auto">
                    <Category />
                </div>

            </div>
        </div>
    );
};

export default Navbar;