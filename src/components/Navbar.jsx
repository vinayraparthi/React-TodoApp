import React from 'react'

const Navbar = () => {
  return (
 <nav className='flex justify-around bg-violet-900 text-white py-1'>
    <div className="logo">
        <span className='font-bold text-xl mx-9'>vTask</span>
    </div>
    <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all duration-200' >Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Your Tasks</li>
        <li></li>
    </ul>
 </nav>
  )
}

export default Navbar
