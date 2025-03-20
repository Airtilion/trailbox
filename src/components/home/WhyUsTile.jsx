import React from 'react'

const WhyUsTile = ({title, desc, img, index, isVisible}) => {
    return (
        <div className={`absolute top-0 ${index === 0 || index === 2 ? 'left-0' : 'right-0 max-lg:top-auto max-lg:bottom-0'} transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}
            style={{transitionDelay: 200*index + 'ms'}}
        >
            <div className={`absolute w-[310px] top-[50%] translate-y-[-50%] ${index === 0 || index === 2 ? 'left-[64px] max-xs:!mt-[-8px]' : 'right-[128px] max-xl:right-[64px] max-md:mt-[24px] max-xs:!mt-[16px]'} max-lg:w-[90%] max-lg:left-[50%] max-lg:right-auto max-lg:translate-x-[-50%]`}>
                <h3 className='text-[25px] text-white font-bold max-md:text-[20px]'>{title}</h3>
                <p className='text-[16px] font-light text-white mt-[16px] max-md:text-[15px]'>{desc}</p>
            </div>

            <img src={img[0]} alt="Pierwsza część zdjęcia tła sekcji" className='max-xl:hidden'/>
            <img src={img[1]} alt="Pierwsza część zdjęcia tła sekcji" className='hidden max-xl:block max-lg:hidden'/>
            <img src={img[2]} alt="Pierwsza część zdjęcia tła sekcji" className='hidden max-lg:block max-md:hidden'/>
            <img src={img[3]} alt="Pierwsza część zdjęcia tła sekcji" className='hidden max-md:block max-xs:!hidden'/>
            <img src={img[4]} alt="Pierwsza część zdjęcia tła sekcji" className='hidden max-xs:block'/>
        </div>
    )
}

export default WhyUsTile