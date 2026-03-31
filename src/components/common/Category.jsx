// "use client";
// import React, { useState } from "react";

// const Category = () => {
//     const [open, setOpen] = useState(false);
//     const [activeTop, setActiveTop] = useState(null);
//     const [activeSub, setActiveSub] = useState(0);

//     const categories = Array(8).fill("Category");

//     return (
//         <div className="flex flex-col items-center justify-center">
//             {/* 🔹 Top Categories */}
//             <div className="flex items-center w-full gap-8.25 cursor-pointer">
//                 {categories.map((item, index) => (
//                     <div
//                         key={index}
//                         onClick={() => {
//                             if (activeTop === index) {
//                                 setOpen(false);
//                                 setActiveTop(null);
//                             } else {
//                                 setActiveTop(index);
//                                 setOpen(true);
//                             }
//                         }}
//                         className="flex items-center gap-2"
//                     >
//                         <p
//                             className={`font-medium text-base leading-[125%] flex items-center gap-2.75
//               ${activeTop === index
//                                     ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
//                                     : "text-[#F5F5F5]"
//                                 }`}
//                         >
//                             {item}
//                         </p>

//                         <span className="w-[31px] h-[26px] flex items-center justify-center rounded-lg border-2  bg-[#220E2D] opacity-75 border-[#432755] shadow-[0px_3.5px_0px_0px_#3B214B]">
//                             <p
//                                 className={`
//               ${activeTop === index ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent" : " text-[#f5f5f5]"}
//              `}
//                             >
//                                 C
//                             </p>
//                         </span>
//                     </div>
//                 ))}
//             </div>

//             {/* 🔹 Dropdown Box */}
//             {open && (
//                 <div className="mt-4 w-full max-w-[1167px] bg-[#2C1638]/90 rounded-2xl pt-5.75 pb-8.25 pr-6 shadow-lg">
//                     {/* Sub Categories */}
//                     <div className="flex gap-7.5 mb-5.75 pl-[39px]">
//                         {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
//                             <p
//                                 key={item}
//                                 onClick={() => setActiveSub(index)}
//                                 className={`cursor-pointer text-base leading-[125%] font-medium transition-all
//                 ${activeSub === index
//                                         ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent underline"
//                                         : "text-[#F5F5F5]"
//                                     }`}
//                             >
//                                 Sub-Category {item}
//                             </p>
//                         ))}
//                     </div>

//                     {/* Products */}
//                     <div className="flex gap-6.5 pl-[39px]">
//                         {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//                             <div key={item} className="max-w-[115px] px-[4.5px] w-full">
//                                 <div className="bg-[#3A1A4D] rounded-xl">
//                                     <img
//                                         src="/assets/component.png"
//                                         alt="product"
//                                         className="w-[106px] h-[73px]"
//                                     />
//                                 </div>

//                                 <p className="text-[#F5F5F5] text-[15px] font-medium leading-[121%] mt-2">Product</p>
//                                 <p className="text-[#F5F5F5]/31 text-[13px] font-medium">From $687.58</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Category;

"use client";
import React, { useState } from "react";

const Category = () => {
    const [open, setOpen] = useState(false);
    const [activeTop, setActiveTop] = useState(null);
    const [activeSub, setActiveSub] = useState(0);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const categories = Array(8).fill("Category");

    return (
        <div className="flex flex-col items-center justify-center w-full">

            {/* ── Desktop: Top Categories ── */}
            <div className="hidden md:flex items-center w-full gap-8.25 cursor-pointer overflow-x-auto scrollbar-hide">
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
                        className="flex items-center gap-2 shrink-0"
                    >
                        <p
                            className={`font-medium text-base leading-[125%] flex items-center gap-2.75 whitespace-nowrap
                                ${activeTop === index
                                    ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                                    : "text-[#F5F5F5]"
                                }`}
                        >
                            {item}
                        </p>
                        <span className="w-[31px] h-[26px] flex items-center justify-center rounded-lg border-2 bg-[#220E2D] opacity-75 border-[#432755] shadow-[0px_3.5px_0px_0px_#3B214B]">
                            <p className={activeTop === index
                                ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                                : "text-[#f5f5f5]"
                            }>
                                C
                            </p>
                        </span>
                    </div>
                ))}
            </div>

            {/* ── Mobile: Category Button + Drawer toggle ── */}
            <div className="md:hidden w-full flex items-center justify-between">
                <p className="text-[#F5F5F5] font-medium text-sm">Browse Categories</p>
                <button
                    onClick={() => setMobileDrawerOpen((prev) => !prev)}
                    className="flex items-center gap-2 text-sm font-medium text-[#F5F5F5] bg-[#220E2D] border border-[#432755] rounded-xl px-3 py-1.5 shadow-[0px_3.5px_0px_0px_#3B214B]"
                >
                    <span className={`transition-all duration-300 ${mobileDrawerOpen
                        ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent"
                        : ""
                        }`}>
                        {activeTop !== null ? categories[activeTop] : "All"}
                    </span>
                    <svg
                        className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${mobileDrawerOpen ? "rotate-180" : ""}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* ── Mobile: Category Drawer ── */}
            <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${mobileDrawerOpen ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-wrap gap-2">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (activeTop === index) {
                                    setActiveTop(null);
                                    setOpen(false);
                                } else {
                                    setActiveTop(index);
                                    setOpen(true);
                                }
                                setMobileDrawerOpen(false);
                            }}
                            className={`px-3 py-1.5 rounded-xl text-sm font-medium border transition-all duration-200
                                ${activeTop === index
                                    ? "border-[#9B1FE8] bg-[#2C1638] text-transparent bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text"
                                    : "border-[#432755] bg-[#220E2D] text-[#F5F5F5]"
                                }`}
                        >
                            {item} {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Dropdown Box (Desktop + Mobile) ── */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${open ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                <div className="w-full bg-[#2C1638]/90 rounded-2xl pt-5 pb-6 pr-4 md:pr-6 shadow-lg">

                    {/* Sub Categories — scrollable on mobile */}
                    <div className="flex gap-4 md:gap-7.5 mb-5 pl-4 md:pl-[39px] overflow-x-auto scrollbar-hide pb-1">
                        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                            <p
                                key={item}
                                onClick={() => setActiveSub(index)}
                                className={`cursor-pointer text-sm md:text-base leading-[125%] font-medium transition-all shrink-0
                                    ${activeSub === index
                                        ? "bg-gradient-to-r from-[#E9AD83] to-[#9B1FE8] bg-clip-text text-transparent underline"
                                        : "text-[#F5F5F5]"
                                    }`}
                            >
                                Sub-Cat {item}
                            </p>
                        ))}
                    </div>

                    {/* Products — 4 col on mobile, 8 on desktop */}
                    <div className="grid grid-cols-4 md:flex md:flex-row gap-3 md:gap-6.5 pl-4 md:pl-[39px] overflow-x-auto scrollbar-hide">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="w-full md:max-w-[115px] md:px-[4.5px] shrink-0">
                                <div className="bg-[#3A1A4D] rounded-xl flex items-center justify-center p-1">
                                    <img
                                        src="/assets/component.png"
                                        alt="product"
                                        className="w-full h-[55px] md:w-[106px] md:h-[73px] object-contain"
                                    />
                                </div>
                                <p className="text-[#F5F5F5] text-[12px] md:text-[15px] font-medium leading-[121%] mt-1.5 truncate">Product</p>
                                <p className="text-[#F5F5F5]/50 text-[11px] md:text-[13px] font-medium truncate">From $687.58</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;