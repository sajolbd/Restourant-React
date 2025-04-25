import React, { useState } from 'react'
import { FaBars, FaCaretDown } from 'react-icons/fa'
import { FaUserAlt } from "react-icons/fa";
import ResponsiceMenu from './ResponsiceMenu';

const Navbar = ({setShowPopup}) => {
    const [open, setOpen] = useState(false)
    const navToggle = () => {
        setOpen(!open)
    }

    return (
        <div className='bg-white shadow-lg  fixed top-0 w-full z-[9999] '>
            <div className='max-w-7xl mx-auto py-3 flex justify-between items-center px-5 md:px-0'>
                {/* logo  */}
                <div>
                    <h1 className='text-2xl font-bold'><span className='text-[#E83667]'>R</span>estourant.</h1>
                </div>
                {/* Nav Menu  */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-7 '>
                        <li className='font-semibold hover:text-[#E83667]'>Home</li>
                        <li className='font-semibold hover:text-[#E83667]'>About</li>
                        <li className='font-semibold hover:text-[#E83667]'>Contact</li>
                        {/* Dropdown Menu  */}
                        <li className='font-semibold  cursor-pointer group '>
                            <div className='flex items-center'>Categories <span><FaCaretDown className='group-hover:rotate-180 duration-200 w-5'></FaCaretDown></span> </div>
                            <div className='absolute z-[9999] hidden group-hover:block w-[100px] shadow-ld bg-white'>
                                <ul className=''>
                                    <li className='font-semibold hover:bg-[#E83667]/20 p-1'>Vegetable</li>
                                    <li className='font-semibold hover:bg-[#E83667]/20 p-1'>Grains</li>
                                    <li className='font-semibold hover:bg-[#E83667]/20 p-1'>Fruits</li>
                                </ul>
                            </div>
                        </li>
                        <button className='flex items-center justify-center px-3 py-1 bg-[#21D4B9] text-base hover:scale-z-105' onClick={() => setShowPopup(true)}><FaUserAlt className='mr-2 text-white' ></FaUserAlt>My Account</button>
                    </ul>
                </div>
                {/* Nav Icon  */}
                <FaBars size={30} onClick={navToggle} className='md:hidden z-10'></FaBars>

            </div>
            <ResponsiceMenu open={open} navToggle={navToggle}></ResponsiceMenu>
        </div>
    )
}

export default Navbar
