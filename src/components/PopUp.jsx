import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const PopUp = ({ showPopup, setShowPopup }) => {
    return (
        <div>
            {
                showPopup && (
                    <div>
                        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blue-md'>
                            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-1/2 p-4 shadow-lg bg-white rounded-md duration-200 w-[300px]'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='text-2xl font-semibold text-dark'>Login</h1>
                                    <FaTimes className='text-2xl cursor-pointer' onClick={()=>setShowPopup(false)}></FaTimes>
                                </div>
                                {/* login Form  */}
                                <div className='mt-4'>
                                    <input type="email" className='w-full rounded-md border p-1 mb-4 border-gray-300 dark:border-gray-500' placeholder='Enter Email' />
                                    <input type="password" className='w-full rounded-md border p-1 mb-4 border-gray-300 dark:border-gray-500' placeholder='Enter Password' />
                                    <button className='bg-[#E83667] text-white w-full p-1 rounded-md'>Login Now</button>
                                    <h1 className='text-center p-1'>or Login with</h1>
                                    <div className='flex justify-center items-center gap-3'>
                                        <FaFacebook size={20}></FaFacebook>
                                        <FaGoogle size={20}></FaGoogle>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
            )
        
}

export default PopUp
