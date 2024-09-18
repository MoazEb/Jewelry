import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='relative flex w-full justify-around items-center font-poppins py-4 mt-8'>
            <h1 className='text-4xl font-sunmora'>Serenity</h1>
            <ul className='hidden lg:flex'>
                <li className='mx-8 font-light text-2xl cursor-pointer'>Home</li>
                <li className='mx-8 font-light text-2xl cursor-pointer'>About Us</li>
                <li className='mx-8 font-light text-2xl cursor-pointer'>Pages</li>
                <li className='mx-8 font-light text-2xl cursor-pointer'>Catalog</li>
            </ul>
            <button
                className='lg:hidden text-2xl pt-0.5 cursor-pointer'
                onClick={() => setIsOpen(prv => !prv)}
            >
                {isOpen ? <IoMdClose className="text-4xl" /> : <FaBars className="text-3xl" />}
            </button>
            {isOpen && <ul className='absolute top-20 flex flex-col w-full gap-0 items-center lg:hidden'>
                <li className='mx-8 my-3 font-light text-2xl cursor-pointer'>Home</li>
                <li className='mx-8 my-3 font-light text-2xl cursor-pointer'>About Us</li>
                <li className='mx-8 my-3 font-light text-2xl cursor-pointer'>Pages</li>
                <li className='mx-8 my-3 font-light text-2xl cursor-pointer'>Catalog</li>
            </ul>}
        </nav>
    )
}

export default Navbar