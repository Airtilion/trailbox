import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <article className='relative h-[320px] rounded-[20px] dropShadow-custom w-[370px] max-xs:w-[290px] max-xs:h-[270px]'>

            <div className='absolute top-0 left-0 w-full h-full z-10 bg-white clip-custom rounded-[20px]' />
            
            <div className='relative z-[20] w-full h-full flex flex-col items-center pt-[24px] max-xs:px-[15px]'>
                <img src={card.img} alt={`Zdjęcie przedstawiające ${card.title}`} width="330" height="185" loading='lazy' className='rounded-[20px] object-cover' />

                <div className='absolute top-[60%] bg-white w-[240px] h-[60px] rounded-t-[10px] max-xs:top-[53%] max-xs:w-[200px]'>
                    <h3 className='pt-[10px] px-[10px] text-[20px] font-semibold text-center max-lg:text-[18px]'>{card.title}</h3>
                </div>

                <Link to={card.link}>
                    <button className='absolute right-0 bottom-0 cursor-pointer bg-[#898989] rounded-[20px] font-light text-[16px] text-white w-[155px] max-xs:w-[150px] h-[45px] max-xs:h-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.25)] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
                        <span className='relative z-10'>Skonfiguruj</span>
                    </button>
                </Link>
            </div>
        </article>
    )
}

export default Card