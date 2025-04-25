import React from 'react'
import polygon from '../assets/polygon.png'
import { FaUser } from 'react-icons/fa'
import vector from '../assets/vector-wave.png'

const BgStyle = {
    backgroundImage: `url(${polygon})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
}

const About = () => {
  return (
    <div style={BgStyle} className='relative'>
        <div className='max-w-7xl min-h-[500px] mx-auto px-10 md:px-10'>
            <h1 className='pt-40 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
            {/* card section  */}
            <div className='bg-white/80 p-10 my-10'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti est? In voluptatibus asperiores doloribus, qui illo sint dignissimos quasi quo tenetur delectus quas quaerat? Reprehenderit velit distinctio error. Dignissimos minima doloribus ea, illum quibusdam qui? Sed voluptatibus quisquam a adipisci obcaecati nesciunt, fugiat natus rerum totam inventore, tempore voluptates libero. Saepe provident corporis possimus quod reprehenderit ratione omnis quas dolore, illo et quae laudantium corrupti facilis explicabo aspernatur fugiat, expedita laborum accusamus voluptas beatae cupiditate nisi laboriosam consectetur magni. Atque dolores dolorem doloremque, nostrum a ullam voluptas recusandae enim explicabo modi minima officiis ipsa corrupti saepe dicta perspiciatis. Labore.</h1>
               <div className='flex gap-2 item-center justify-center py-5'>
               <button className='bg-[#E83667] py-2 text-white px-4 flex gap-2 item-center'><FaUser></FaUser>My Account </button>
               </div>
            </div>
        </div>
        {/* wave vector */}
        <img src={vector} alt="" className='absolute top-0 right-0 w-full'/>
    </div>
  )
}

export default About