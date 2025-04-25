import React from 'react'
import apple from '../assets/png/apple.png'
import kiwi from '../assets/png/kiwi.png'
import lemon from '../assets/png/lemon.png'
import leaf from '../assets/png/leaf.png'
import tomato from '../assets/png/tomato.png'
import { FaArrowRight } from 'react-icons/fa'
const Banner = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto relative py-10 px-10 md:px-0'>
                <h2 className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>
                    Taste the Healthy Difference
                </h2>
                {/* content  */}
                <div className='space-y-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
                        <div>
                            <p> We know the <span className='text-[#E83667] '>time</span> is the greatest value in the modern world.Our Healthy mean plan delivery service Good food in Dhaka in the answer for thoes who want to eat healthy, saving time, for buying food and prepareing delicious,healthy meals. </p>
                            <div></div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-10'>
                        <div></div>
                        <div>
                            <p> We know the <span className='text-[#E83667] '>time</span> is the greatest value in the modern world.Our Healthy mean plan delivery service Good food in Dhaka in the answer for thoes who want to eat healthy, saving time, for buying food and prepareing delicious,healthy meals. </p>
                            <div></div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                {/* button section  */}
                <div className='flex justify-center my-1m md:mt-14 group'>
                    <button className='bg-[#E83667] py-2 text-white px-4 '>Choose Your Meal Plan </button><FaArrowRight className='group-hover:!translate-x-2 duration-200  text-base bg-[#BB2C51] w-[37px] h-[37px] text-white'></FaArrowRight>
                </div>
                {/* bg fruits  */}
                <div className='absolute top-5 -left-8 md:bottom-0 md:left-0 opacity-50 md:opacity-100'>
                    <img src={leaf} alt="" className='max-w-[160px]'/>
                </div>
                <div className='absolute -bottom-5 -left-8 md:bottom-0 md:left-0 opacity-50 md:opacity-100'>
                    <img src={tomato} alt="" className='max-w-[280px]'/>
                </div>
                <div className='absolute top-10 -right-8 md:right-20 opacity-50 md:opacity-100'>
                    <img src={apple} alt="" className='max-w-[200px]'/>
                </div>
                <div className='absolute top-1/2 left-1/3 opacity-50 md:opacity-100'>
                    <img src={kiwi} alt="" className='max-w-[200px]'/>
                </div>
            </div>
        </div>
    )
}

export default Banner
