import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../assets/imgs/Testimonials/1.png";
import Img2 from "../assets/imgs/Testimonials/2.jpg";
import Img3 from "../assets/imgs/Testimonials/3.jpg";

function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true,
        swipeToSlide: true,
    };

    const testimonials = [
        {
            img: Img1,
            id: 1,
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel mi rutrum, lobortis dolor nec, feugiat sapien.",
        },
        {
            img: Img2,
            id: 2,
            name: "Jane Smith",
            text: "Ut vel mi rutrum, lobortis dolor nec, feugiat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img: Img3,
            id: 3,
            name: "Bob Johnson",
            text: "Consectetur adipiscing elit. Lorem ipsum dolor sit amet, ut vel mi rutrum, lobortis dolor nec, feugiat sapien.",
        },
    ];
    const slider = React.useRef(null);
    return (
        <div className="w-full py-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sunmora text-center mb-12 px-2">What Our Customers Say</h2>
            <div className="md:max-w-lg mx-auto relative">
                <Slider ref={slider} {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-4">
                            <div className="flex items-center justify-center">
                                <button className="ml-2 md:ml-0 md:mr-6 rotate-180" onClick={() => slider?.current?.slickPrev()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-9 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                                <img src={testimonial.img} className="mb-4 mx-auto max-w-52 md:max-w-80 aspect-square object-cover" />
                                <button className="mr-2 md:mr-0 md:ml-6" onClick={() => slider?.current?.slickNext()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 md:w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                            <div className=" p-6 max-w-xl text-center mx-auto w-full">
                                <div className="flex items-center bg-transparent">
                                    <p className="text-lg mb-4 bg-transparent relative flex">
                                        {testimonial.text}
                                    </p>
                                </div>
                                <h2 className="font-sunmora text-2xl md:text-3xl">{testimonial.name}</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonials;