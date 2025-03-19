import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ card }) => {
    return (
        <article className='relative w-[370px] h-[320px] rounded-[20px] dropShadow-custom'>

            <div className='absolute top-0 left-0 w-full h-full z-10 bg-white clip-custom rounded-[20px]' />

            {/* <div className="z-[15] absolute bottom-[0px]" style={{ filter: 'url(#goo) drop-shadow(0 4px 20px #00000040)', marginTop: '10vw' }}>
                <div className="w-[370px] h-[320px] bg-white" style={{ clipPath: 'polygon(0px 0px, 370px 0px, 370px 265px, 206px 265px, 206px 320px, 0px 320px)' }}></div>
            </div> */}

            <div className='relative z-[20] w-full h-full'>
                <h3>{card.title}</h3>

                <Link to={card.link}>
                    <button className='absolute right-0 bottom-0 cursor-pointer bg-[#898989] rounded-[20px] font-light text-[16px] text-white w-[155px] h-[45px] shadow-[0_4px_20px_rgba(0,0,0,0.25)] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
                        <span className='relative z-10'>Skonfiguruj</span>
                    </button>
                </Link>
            </div>
        </article>
    )
}

export default Card