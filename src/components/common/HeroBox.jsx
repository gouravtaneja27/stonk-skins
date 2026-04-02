import React from 'react'
import Icons from './Icons'

const HeroBox = ({ icon, text }) => {
    return (
        <div className='max-w-max w-full flex items-center'>
            <div className='box.img flex items-center w-11 h-11 sm:w-15 sm:h-15 justify-center'>
                <Icons icon={icon} />
            </div>
            <p className='font-medium ml-2 sm:ml-4 text-sm sm:text-base tracking-[-6%] text-[#F5F5F5] leading-[142%] sm:leading-[125%]'>{text}</p>
        </div>
    )
}

export default HeroBox