import React from 'react'
import { FaBus } from 'react-icons/fa'

const WhyChoose = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto py-14 md:py-28 bg-bray-80 px-10 md:px-0'>
                {/* Heading section  */}
                <h1 className='pb-16 tracking-wider text-2xl font-semibold text-dark text-center'>Why Choose Us</h1>
                {/* card section */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-4'>
                        {/* first card  */}
                        <div className='text-center flex flex-col gap-2 px-2 items-center justify-center'>
                            <p className='text-dark/70 font-semibold '>Lorem ipsum dolor sit amet consectetur</p>
                            <p className='text-5xl rotate-90 text-[#E83667] text-center translate-x-5'>....</p>
                            <FaBus className='text-4xl text-[#E63667] ml-2'></FaBus>
                        </div>

                        <div className='text-center flex flex-col gap-2 px-2 items-center justify-center'>
                            <FaBus className='text-4xl text-[#21D4B9] ml-2'></FaBus>
                            <p className='text-5xl rotate-90 text-[#E83667] text-center translate-x-5'>....</p>
                            <p className='text-dark/70 font-semibold '>Lorem ipsum dolor sit amet consectetur</p>
                        </div>

                        <div className='text-center flex flex-col gap-2 px-2 items-center justify-center'>
                            <p className='text-dark/70 font-semibold '>Lorem ipsum dolor sit amet consectetur</p>
                            <p className='text-5xl rotate-90 text-[#E83667] text-center translate-x-5'>....</p>
                            <FaBus className='text-4xl text-[#E63667] ml-2'></FaBus>
                        </div>

                        <div className='text-center flex flex-col gap-2 px-2 items-center justify-center'>
                            <FaBus className='text-4xl text-[#21D4B9] ml-2'></FaBus>
                            <p className='text-5xl rotate-90 text-[#E83667] text-center translate-x-5'>....</p>
                            <p className='text-dark/70 font-semibold '>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
