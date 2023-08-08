import React from 'react';
import Slider from 'react-slick';
import {Card} from "./CardData"

const Partner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='mt-20 px-20'>
           <h1 className='text-black text-center text-4xl font-bold'>Our Partner</h1>

           <Slider {...settings}>
                    {Card.map((item) => (
                        <div className="card w-96">
                        <figure className="px-10 pt-10">
                          <img src={item.img} alt="Shoes" className="rounded-xl h-20" />
                        </figure>
                      </div>
                    ))}
                </Slider>
        </div>
    );
};

export default Partner;