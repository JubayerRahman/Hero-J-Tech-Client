import React from 'react'

const Subscribeus = () => {
  return (
    <div className='p-[10px] pt-[50px] pb-[50px] bg-[#CCD2D8] mb-[50px] flex flex-col md:flex-row items-center justify-between gap-5'> 
       <div className='flex flex-col i items-center md:items-start gap-3 md:w-[50%]'>
        <h1 className='text-3xl md:text-5xl font-bold mt-[15px] mb-[15px] text-[#225A8D]'>Subscribe our news letter</h1>
        <p  className='text-[#F27364] text-[16px] leading-5'>Stay ahead of the curve with our newsletter, delivering the latest tech updates, exclusive offers, and our newest services directly to your inbox. Join our community of innovators and never miss out on the latest developments in the tech world. Subscribe now to unlock a world of opportunities!</p>
       </div>
       <div className='md:w-[50%] flex gap-1'>
        <input className='text-[20px] outline-none rounded p-[10px] bg-transparent border-[2px] border-[#F27364] w-[70%]' type="text" name="" placeholder='Your email' id="" />
        <button className='bg-[#F27364] text-[white] text-[20px] p-[8px] rounded'>Subscribe</button>
       </div>
    </div>
  )
}

export default Subscribeus
