"use client";
import React, { useState } from "react";

const Category = () => {
    const [open, setOpen] = useState(false);
    const [activeTop, setActiveTop] = useState(null);
    const [activeSub, setActiveSub] = useState(0);

    const categories = Array(8).fill("Category");

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Top Categories */}
            <div className="flex items-center w-full gap-4 sm:gap-6 md:gap-8.25 overflow-x-auto cursor-pointer  px-4">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            if (activeTop === index) {
                                setOpen(false);
                                setActiveTop(null);
                            } else {
                                setActiveTop(index);
                                setOpen(true);
                            }
                        }}
                        className="flex items-center h-6.5 gap-2 min-w-max">
                        <p
                            className={`font-medium  text-sm sm:text-base leading-[125%] flex items-center gap-2.75 whitespace-nowrap
              ${activeTop === index
                                    ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                                    : "text-[#F5F5F5]"
                                }`}
                        >
                            {item}
                        </p>

                        <span className="w-[28px] sm:w-[31px] h-[24px] sm:h-[26px] flex items-center justify-center rounded-lg border-2 bg-[#220E2D] opacity-75 border-[#432755] shadow-[0px_3.5px_0px_0px_#3B214B]">
                            <p
                                className={`${activeTop === index
                                        ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                                        : "text-[#f5f5f5]"
                                    }`}
                            >
                                C
                            </p>
                        </span>
                    </div>
                ))}
            </div>

            {/* Dropdown Box */}
            {open && (
                <div className="mt-4 w-full absolute top-32 max-w-[1167px] bg-[#2C1638]/90 rounded-2xl pt-5.75 pb-8.25 pr-4 sm:pr-6 shadow-lg mx-4">

                    {/* Sub Categories */}
                    <div className="flex gap-4 sm:gap-6 md:gap-7.5 mb-5.75 pl-4 sm:pl-[39px] overflow-x-auto">
                        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                            <p
                                key={item}
                                onClick={() => setActiveSub(index)}
                                className={`cursor-pointer text-sm sm:text-base leading-[125%] font-medium transition-all whitespace-nowrap
                ${activeSub === index
                                        ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent underline"
                                        : "text-[#F5F5F5]"
                                    }`}
                            >
                                Sub-Category {item}
                            </p>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="flex gap-4 sm:gap-5 md:gap-6.5 pl-4 sm:pl-[39px] overflow-x-auto">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div
                                key={item}
                                className="max-w-[115px] min-w-[100px] px-[4.5px] w-full flex-shrink-0"
                            >
                                <div className="bg-[#3A1A4D] rounded-xl">
                                    <img
                                        src="/assets/gun.png"
                                        alt="product"
                                        className="w-full h-[65px] sm:h-[73px] object-contain"
                                    />
                                </div>

                                <p className="text-[#F5F5F5] text-[13px] sm:text-[15px] font-medium leading-[121%] mt-2">
                                    Product
                                </p>
                                <p className="text-[#F5F5F5]/31 text-[11px] sm:text-[13px] font-medium">
                                    From $687.58
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Category;