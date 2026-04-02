import React from "react";
import Button from "./common/Button";
import HeroBox from "./common/HeroBox";
import { BoxHelper } from "@/utils/helper";

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url('/assets/hero.webp')` }}
            className="w-full mx-auto min-h-203.25 bg-position-[80%] md:bg-center bg-cover">
            <div className="absolute min-h-203.25 inset-0 bg-black/20 flex flex-col w-full md:justify-end" />
            <div className="max-w-287 w-full flex items-center mx-auto">
                <div className="w-full px-2 sm:px-6 lg:px-2">
                    <div className="sm:px-0 px-3">
                        <h1 className="mt-40  lg:mt-63 max-w-full sm:max-w-181.75 text-white text-[40px] md:text-[52px] lg:text-[64px] leading-[140%] sm:leading-[120%] tracking-[-6%] font-medium text-left">
                            The Ultimate{" "}
                            <span className="text-[#E9AE82]"> CS 2 Marketplace </span> for
                            Gamers Who Mean Business
                        </h1>
                        <p className="mb-6 sm:mb-8 lg:mb-10.25 font-medium text-base leading-[140%] tracking-[-2%] text-[#F5F5F5] mt-3">
                            Buy, sell, and trade skins securely with unbeatable prices and
                            transparency
                        </p>
                        <div className="mt-4">
                            <Button />
                        </div>
                    </div>
                    <div className="max-w-287 mt-69 md:mt-16 lg:mt-20.5 bg-[#FFFFFF]/6 pt-5 sm:pt-6 lg:pt-[28px] pb-5 sm:pb-6 lg:pb-[29px] pl-4.5 pr-3.75 sm:px-6 lg:px-8 rounded-3xl backdrop-blur-[50px] shadow-[0_0_50px_rgba(0,0,0,0.2)]">
                        <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-10 md:gap-14 lg:gap-17.5 sm:justify-start">
                            {BoxHelper.map((item, index) => (
                                <HeroBox key={index} text={item.text} icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;