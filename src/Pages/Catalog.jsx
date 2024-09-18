import React from "react";
import Img1 from '../assets/imgs/Catalogs/1.png'
import Img2 from '../assets/imgs/Catalogs/2.png'
import Img3 from '../assets/imgs/Catalogs/3.png'
import Img4 from '../assets/imgs/Catalogs/4.png'

const Catalog = () => {
    return (
        <div className=" flex flex-col justify-center items-center w-full">
            <h1 className="text-5xl lg:text-6xl font-light my-12 lg:my-20 font-sunmora">Catalog</h1>
            <div className="mx-4 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-transparent">
                <div className=" max-w-56 cursor-pointer">
                    <h1 className="text-2xl  md:text-3xl lg:text-3xl text-center  lg:-mb-8">Rings</h1>
                    <img className="mt-2 lg:mt-12 object-cover mix-blend-multiply " src={Img1} alt="Ring catalog" />
                </div>
                <div className="flex flex-col max-w-56 cursor-pointer">
                    <img className="mt-2 lg:mb-12 order-2 lg:order-1  object-cover mix-blend-multiply " src={Img2} />
                    <h1 className="text-2xl md:text-3xl lg:text-3xl  text-center order-1 lg:order-2  lg:-mt-8">Necklace</h1>
                </div>
                <div className=" max-w-56 cursor-pointer">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl text-center  lg:-mb-8">Earings</h1>
                    <img className="mt-2 lg:mt-12 object-cover mix-blend-multiply " src={Img3} />
                </div>
                <div className="flex flex-col max-w-56 cursor-pointer">
                    <img className="mt-2 lg:mb-12 order-2 lg:order-1 object-cover mix-blend-multiply " src={Img4} />
                    <h1 className="text-2xl md:text-3xl lg:text-3xl  text-center order-1 lg:order-2 lg:-mt-8">Bracelet</h1>
                </div>
            </div>
            <a className="flex my-12 text-lg items-center" href="#">View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    )
}

export default Catalog;