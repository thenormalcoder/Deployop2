import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-950 flex justify-around p-5 text-white font-semibold text-xl'>
        {/* <div className='hover:cursor-pointer
        '>Logo</div> */}
        <div className="logo hover:cursor-pointer text-3xl">
            <span className='text-blue-600 font-bold'>&lt;</span>
            <span>Word</span>
            <span className='text-blue-600 font-bold'> Wrap/&gt;</span>
        </div>
        {/* <ul className='flex gap-6 my-2'>
            <a href="/"><li  className='hover:cursor-pointer hover:font-bold hover:transition-all'>Home</li></a>
            <a href="/about"><li  className='hover:cursor-pointer hover:font-bold hover:transition-all'>About</li></a>
            <a href="/contact"><li  className='hover:cursor-pointer hover:font-bold hover:transition-all'>Contact</li></a>
        </ul> */}
        <button className='flex justify-between items-center  bg-blue-700 rounded-full'>
          <img src="/github.png" className='p-1' width={40} alt="" />
          <span className='px-1'>Github</span>
        </button>
    </nav>
  )
}

export default Navbar
