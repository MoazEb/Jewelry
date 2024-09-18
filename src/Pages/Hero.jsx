import React from 'react'
import Img from '../assets/imgs/1.png'
const Hero = () => {
    return (
        <div className='text-center mx-8 md:mx-20 flex flex-col items-center mt-12 md:mt-16 gap-4'>
            <h2 className='font-poppins text-3xl my-4 md:text-[2.75rem] leading-relaxed'>Serenity Jewelry</h2>
            <h1 className='font-poppins uppercase font-light  text-4xl md:text-6xl -mt-6 lg:-mt-8 '>Adorn Yourself in Elegance</h1>

            <div className='flex lg:px-28 flex-col mt-4 w-full '>
                <img src={Img} className='min-h-44 object-cover object-center my-2 md:mt-6 rounded-lg' alt="" />
                <div className='flex flex-col justify-between mx-2 my-4 md:flex-row text-lg' >
                    <p className='max-w-sm md:text-left lg:max-w-2xl '>Make the beauty of your body with accessories on Serenity</p>
                    <div className='w-full flex justify-center items-center mt-4 md:w-fit md:mt-0'>
                        <a href="#" className='flex items-center'>Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero