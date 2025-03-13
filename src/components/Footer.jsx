import React from 'react'

const Footer = () => {
  return (
    <div className='text-white text-center bg-blue-400 flex-col  items-center mx-auto py-2 font-bold  ' >
      <div className="logo hover:cursor-pointer text-3xl my-2">
            <span className='text-blue-600 font-bold'>&lt;</span>
            <span>Word</span>
            <span className='text-blue-600 font-bold'> Wrap/&gt;</span>
        </div>
        <div className="img flex mx-auto my-auto justify-center text-center items-center gap-2 text-xl">
          Just learning <img className='w-10 gap-3 rounded-xl mx-1 text-center' src="/coder.png" alt="" /> experience 
        </div>
    </div>
  )
}

export default Footer
