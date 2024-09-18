import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-[#957461]'>
            <div className='relative h-fit grid grid-cols-2 md:grid-cols-3 items-start py-8 mx-4 md:mx-12 bg-[#957461] '>
                <div className='flex flex-col gap-6 justify-center max-w-lg items-start bg-transparent '>
                    <h1 className='text-2xl tracking-wider font-sunmora bg-transparent text-white'>Serenity</h1>
                    <p className='bg-transparent text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mi rutrum, lobortis dolor nec, feugiat sapien. </p>

                </div>
                <div className='bg-transparent flex justify-center items-center'>
                    <div className='flex flex-col gap-4  bg-transparent '>
                        <h1 className='text-2xl tracking-wider font-sunmora bg-transparent text-white'>Quick Links</h1>
                        <a className='bg-transparent cursor-pointer text-white'>Home</a>
                        <a className='bg-transparent cursor-pointer text-white'>About Us</a>
                        <a className='bg-transparent cursor-pointer text-white'>Catalog</a>
                        <a className='bg-transparent cursor-pointer text-white'>Blog</a>
                    </div>
                </div>
                <div className='flex justify-start md:justify-center items-center col-span-2 bg-transparent mt-4 md:mt-0 md:col-span-1'>
                    <div className='flex flex-col gap-4  bg-transparent '>
                        <h1 className='text-2xl tracking-wider font-sunmora bg-transparent text-white'>Contact Us</h1>
                        <p className='bg-transparent text-white'>424-947-9877</p>
                        <p className='bg-transparent text-white'>Luminary.@gmail.com</p>
                        <p className='bg-transparent text-white'>9256 Abigail Forges, Sao Tome and Principe</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer