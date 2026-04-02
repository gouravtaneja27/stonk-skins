import React from 'react'
import Icons from './Icons'

const Button = () => {
    return (
        <div>
            <div className="flex items-center btn-img  max-w-61.25 w-full h-13">
                <button className='flex items-center justify-center w-[193px] text-base font-medium leading-[125%] tracking-[-6%] text-[#F5F5F5] cursor-pointer'>Login with Steam</button>
                <button className="flex items-center justify-center bg-[#FFFFFF0F]/6 h-13 w-13 rounded-[500px]">
                    <Icons icon={"arrow"} />
                </button>
            </div>
        </div>
    )
}

export default Button