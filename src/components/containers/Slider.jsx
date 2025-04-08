import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import slider1 from '../../assets/images/containers/slider/slider-1.webp'
import slider2 from '../../assets/images/containers/slider/slider-2.webp'
import slider3 from '../../assets/images/containers/slider/slider-3.webp'
import slider4 from '../../assets/images/containers/slider/slider-4.webp'
import slider5 from '../../assets/images/containers/slider/slider-5.webp'
import slider6 from '../../assets/images/containers/slider/slider-6.webp'

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const elements = [
    {
        img: slider1,
    },
    {
        img: slider2,
    },
    {
        img: slider3,
    },
    {
        img: slider4,
    },
    {
        img: slider5,
    },
    {
        img: slider6,
    },
]

const Slider = () => {
    return (
        <section className='my-[64px]'>
            <article className='w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
                <h3 className='text-[30px] font-semibold mb-[32px] max-sm:text-[22px]'>Zobacz wybrane realizacje</h3>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        }
                    }}
                >
                    {elements.map((element, index) => (
                        <SwiperSlide key={index}>
                            <img src={element.img} alt="Zdjęcie przedstawiające zabudowę kontenerową" className='object-cover h-[221.5px] rounded-[20px]' />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex justify-center mt-[32px]'>
                    <Link to="/realizacje">
                        <button className='cursor-pointer relative overflow-hidden custom-button bg-[#898989] w-[400px] h-[55px] rounded-full text-white flex items-center justify-center gap-[16px] shadow-[0px_4px_20px_#00000040]'>
                            <Icon icon="solar:gallery-bold" width="24" height="24" className='z-10 relative' />
                            <span className='relative z-10 '>Kliknij aby przejść do pełnej galerii</span>
                        </button>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Slider