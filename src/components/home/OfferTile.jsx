import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const OfferTile = ({title, desc, img, link, isVisible, index}) => {
  return (
    <div className={`w-[392px] h-[500px] relative flex flex-col justify-end gap-[8px] p-[32px] drop-shadow-[0px_4px_10px_#00000040] max-2xl:w-[312px] max-lg:w-[600px] max-md:w-[392px] max-sm:w-[290px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}
      style={{transitionDelay: 200*index + 'ms'}}
    >
        <h3 className='text-[25px] font-bold text-white relative z-30 max-sm:text-[20px]'>{title}</h3>
        <p className='text-[16px] text-white font-ligh z-40 max-sm:text-[14px]'>{desc}</p>

        <div className='absolute top-0 left-0 w-full h-full clip-offer'>
            <img src={img} alt="Zdjęcie promujące produkt" className='absolute top-0 left-0 h-full object-cover z-10 rounded-[40px]'/>
        </div>

        <Link to={link}>
            <div className='w-[80px] h-[80px] bg-[#898989] absolute top-[16px] right-[16px] z-40 rounded-full flex justify-center items-center duration-500 hover:bg-[#676767] hover:scale-105'>
                <Icon icon="radix-icons:arrow-top-right" width="40" height="40" className="text-white"/>
            </div>
        </Link>

        <div className='absolute w-full h-[50%] bottom-0 left-0 backdrop-blur-[10px] [-webkit-mask:linear-gradient(transparent,black_50%)] z-20 rounded-[40px]'></div>
        
    </div>
  )
}

export default OfferTile