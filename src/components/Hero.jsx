import React from 'react'
import hero from '../assets/hero.png'
import { FaArrowRight } from 'react-icons/fa'
import HeroBg from '../assets/heroBg.png'

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundPositon: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
}

const Hero = () => {
    return (
        <div >
            <div style={BgStyle}>
                <div className='max-w-7xl mx-auto px-5 md:px-0 py-16 md:py-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 min-h-[600px]'>
                        {/* text constx section  */}
                        <div className='space-y-7 text-dark order-2 md:order-1 '>
                            <h1 className='text-5xl '>Fresh and Healthy Meal Plan <span className='text-[#21D4B9] text-7xl'>Delivery</span><br /> In Dhaka</h1>
                            <p className='w-3/10'>Delicious Meals Delivered to Your Door from  $120 per week</p>
                            <div className='flex items-center group'>
                                <button className='bg-[#E83667] py-2 text-white px-4 '>Choose Your Meal Plan </button><FaArrowRight  className='group-hover:!translate-x-2 duration-200  text-base bg-[#BB2C51] w-[37px] h-[37px] text-white'></FaArrowRight>
                            </div>

                        </div>
                        {/* image section  */}
                        <div className='order-1 md:order-2 flex items-center justify-center'>
                            <img src={hero} alt="" className='w-3/4 sm:scale-105 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
