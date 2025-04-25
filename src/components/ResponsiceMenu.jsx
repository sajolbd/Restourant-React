import React from 'react'
import { FaTimes } from 'react-icons/fa'

const ResponsiceMenu = ({ open, navToggle }) => {
    return (
        <div>
            <div className={`${open ? 'right-0' : '-right-[100%]'} fixed bg-white text-black 
        shadow-lg w-3/5 top-0 bottom-0 md:hidden flex flex-col justify-center px-5 transform duration-200`}>
                <div className='absolute top-4 right-5'>
                    <FaTimes size={30} onClick={navToggle}></FaTimes>
                </div>
                <ul className='flex flex-col gap-4 absolute top-25 justify-center'>
                    <li >Home</li>
                    <li >About</li>
                    <li >Contact</li>
                    <li >Vegetable</li>
                    <li >Grains</li>
                    <li >Fruits</li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiceMenu
