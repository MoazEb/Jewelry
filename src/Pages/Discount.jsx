import React from 'react'
import BgImg from '../assets/imgs/Discount/1.png'
const Discount = () => {
    return (
        <div className='relative h-[40vh] h-[40dvh] px-4 md:h-[50dvh] md:h-[50vh] flex justify-center items-center bg-transparent'>
            <img className='absolute top-0 object-cover object-center w-full h-full' src={BgImg} alt="Discount Background" />
            <div className='absolute top-0 bg-[#957461] opacity-60 w-full h-full'></div>
            <div className='flex flex-col gap-12 max-w-3xl h-full justify-center items-center z-20 bg-transparent'>
                <h1 className='text-3xl md:text-5xl capitalize  text-white z-10 bg-transparent text-center font-sunmora'>Get your Serenity Jewelry set today - 25% discount applied</h1>
                <div className='z-20 bg-transparent w-full flex justify-center items-center'>
                    <input className='w-2/3 lg:w-3/4 px-6 py-4' type="text" placeholder='Enter email address...' />
                    <button className='bg-[#957461] font-sunmora text-white px-6 py-4'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Discount