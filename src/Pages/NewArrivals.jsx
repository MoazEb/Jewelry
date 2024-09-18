import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/imgs/NewArrivals/1.png'
import Img2 from '../assets/imgs/NewArrivals/2.png'
import Img3 from '../assets/imgs/NewArrivals/3.png'
function NewArrival() {
    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        // slidesToScroll: 1,
        freeMode: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        // centerMode: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    const Products = [
        {
            img: Img1,
            id: 1,
            name: "Serenity Sparkle",
            oldPrice: 287.00,
            currentPrice: 174.00
        },
        {
            img: Img2,
            id: 2,
            name: "Nature's Delight",
            oldPrice: 652.00,
            currentPrice: 445.00
        },
        {
            img: Img3,
            id: 3,
            name: "Regal Splendor",
            oldPrice: 492.00,
            currentPrice: 385.00
        },

    ];
    const slider = React.useRef(null);
    return (
        <div className="w-full py-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sunmora text-center mb-12">New Arrivals</h2>
            <div className="max-w-5xl cursor-grab active:cursor-grabbing mx-auto px-6 relative">
                <Slider ref={slider} {...settings}>
                    {
                        Products.map((item) => (
                            <div className="flex flex-col items-center" key={item.id}>
                                <img className="max-w-40 mx-2 md:max-w-60 lg:max-w-72 mb-4" src={item.img} alt={item.name} />
                                <h3 className="text-sm md:text-lg font-medium mb-1 ml-2">{item.name}</h3>
                                <div className="flex items-center ml-2">
                                    <h2 className="text-lg md:text-xl font-bold mr-4">${item.currentPrice.toFixed(2)}</h2>
                                    <h3 className="text-md md:text-lg text-gray-500 line-through">${item.oldPrice.toFixed(2)}</h3>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default NewArrival;