import React from 'react'
import useIntersectionObserver from '../../hooks/useObserver';

const Box = ({ element, index }) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <div ref={ref} className={`mt-[48px] ${index % 2 !== 0 ? 'bg-[#F3F7F8] py-[48px]' : 'bg-white'} transition-all duration-1000 ease-in-out ${isVisible ? index%2==0 ? 'element-visible-left' : 'element-visible-right' : index%2===0 ? 'element-hidden-left' : 'element-hidden-right'}`}>
            <article className='w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[90%]'>
                <div className={`h-[400px] relative max-lg:h-[625px] ${index !== 0 ? 'max-md:h-[700px] max-xs:!h-[1000px]' : 'max-sm:h-[750px]'}`}>
                    <img src={element.image} alt="Zdjęcie tła" loading="lazy" className='object-cover object-top w-full h-full absolute top-0 left-0 rounded-[40px]' />
                    <div className={`z-[1] absolute top-0 left-0 h-full w-full rounded-[40px] ${index % 2 !== 0 ? 'bg-[#898989]/90' : 'bg-[#353432]/90'}`} />

                    <div className={`flex items-center justify-center w-[330px] h-[100px] absolute z-10 top-0 max-sm:w-[200px]  ${index % 2 !== 0 ? 'bg-[#F3F7F8] right-0 rounded-bl-[40px] custom-corners' : 'bg-white r-corners left-0 rounded-br-[40px]'} `}>

                        <h3 className='relative z-30 text-[30px] font-semibold max-sm:text-[22px]'>{element.title}</h3>

                    </div>

                    <div className={`flex items-end justify-center w-[310px] h-[125px] absolute z-20 bottom-0 max-sm:h-[100px] max-sm:w-[200px] ${index % 2 !== 0 ? 'bg-[#F3F7F8] left-0 rounded-tr-[40px] custom-corners-b' : 'bg-white r-corners-b right-0 rounded-tl-[40px]'}`}>

                        <img src={element.icon} alt={`Ikona przedstawiająca ${element.title}`} loading='lazy' className='max-sm:w-[150px]' />

                    </div>

                    <div className={`h-full relative z-[30] text-white px-[36px] flex flex-col ${index === 0 ? 'justify-between py-[48px] max-lg:justify-center max-lg:gap-[32px]' : ' justify-center  py-[36px]'}`}>
                        {element.descriptions.map((desc, index) => (
                            <p key={index} className={`font-light max-sm:text-[14px] ${index !== 0 ? 'mt-[16px]' : 'mt-0'} ${desc.width == 'full' ? 'w-full' : 'w-[800px] max-xl:w-[600px] max-lg:w-full'} ${desc.type == 'left' ? 'mr-auto max-lg:mr-0' : 'ml-auto max-lg:ml-0'}`}>{desc.desc}</p>
                        ))}
                        <p className={`mt-[16px] w-[800px] font-light max-xl:w-[600px] max-lg:w-full max-sm:text-[14px] ${index % 2 !== 0 ? 'ml-auto max-lg:ml-0' : 'mr-auto max-lg:mr-0'} `}>{element.dimensions}</p>
                    </div>

                </div>


                <div className='mt-[32px]'>
                    <h4 className='text-[25px] font-medium max-lg:text-[20px]'>Zastosowanie</h4>
                    <p className='text-[16px] mt-[8px] max-sm:text-[14px]'>{element.use}</p>
                </div>
            </article>
        </div>
    )
}

export default Box