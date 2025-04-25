import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='px-10 md:px-0 mb-5 md:md-0'>
            <div className='max-w-7xl mx-auto bg-[#E83667] px-10 md:px-0 rounded-2xl mt-20'>
                <div>
                    <h1 className='pt-15 tracking-wider text-4xl font-semibold text-white text-center'>Contuct Us</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 flex-grow py-10'>
                    <div className='flex flex-col justify-center items-center space-y-2 p-4 text-white'>
                        <FaLocationDot size={30}></FaLocationDot>
                    <p>Dhaka,Bangladesh</p>
                    <p>Nalta Sharif,Kaligonj, Satkhira</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 p-4 text-white'>
                    <FaEnvelope size={30}></FaEnvelope>
                    <p>info@sajol.com</p>
                    <p>Nalta Sharif,Kaligonj, Satkhira</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-2 p-4 text-white'>
                    <BsFillTelephoneFill size={30}></BsFillTelephoneFill>
                    <p>+880 12121212</p>
                    <p>+91 252969475 85445</p>
                </div>
            </div>
            <hr className='pt-7 w-3/4 mx-auto text-white'/>
            <h1 className='text-center pb-4 text-white'>@all rights reserved. Restourant</h1>
        </div>
        
    </div >
  )
}

export default Footer
