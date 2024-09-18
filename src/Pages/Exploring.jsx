import React from 'react'
import Img1 from '../assets/imgs/Catalogs/Old/1.png'
import Img2 from '../assets/imgs/NewArrivals/1.png'

const Exploring = () => {
    return (
        <div className=''>
            <div className='gap-32 mt-32 -mb-2 lg:ml-20 xl:mb-6 text-lg flex flex-col lg:flex-row justify-center items-center'>
                <div className='relative border shadow-2xl border-black border-solid w-40 h-40 '>
                    <img className='absolute max-w-44 -left-16 -top-16 shadow-2xl object-cover aspect-square object-center' src={Img1} alt="" />
                    <img className='absolute max-w-44 -right-12 -bottom-16 shadow-2xl' src={Img2} alt="" />
                </div>
                <div className='flex flex-col gap-6 text-center lg:text-left mx-4 max-w-2xl'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl'>Exploring the Beauty of Adornments</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mi rutrum,
                        lobortis dolor nec, feugiat sapien. Vivamus dolor nisl,
                        rutrum quis libero non, lobortis mollis arcu. Ut neque dui,
                    </p>
                    <a className="flex my-4 text-xl items-center justify-center lg:justify-start" href="#">Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Exploring