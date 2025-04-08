import React from 'react'
import Box from './Box'
import containers from '../../data/containers'
import nonStandardBox from '../../assets/icons/containers/nonstandard-box.svg'
import lightGrayImg from '../../assets/images/containers/bg-light-gray.webp'
import useIntersectionObserver from '../../hooks/useObserver'

const Boxes = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className='mt-[32px]'>
            {containers.map((element, index) => (
                <Box element={element} index={index} key={index} />
            ))}

            <div className='bg-[#F3F7F8] mt-[48px] pt-[36px] pb-[64px]'>
                <article ref={ref} className={`relative py-[48px] w-[1240px] h-[315px] mx-auto max-xl:w-[1000px] max-lg:w-[750px] max-md:w-[600px] max-sm:w-[90%] max-sm:h-[350px] max-xs:!h-[425px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
                    <img src={lightGrayImg} alt="Zdjęcie tła" loading="lazy" className='object-cover object-top w-full h-full absolute top-0 left-0 rounded-[40px] max-sm:rounded-[20px]' />
                    <div className='z-[1] absolute top-0 left-0 h-full w-full rounded-[40px] bg-[#898989]/90 max-sm:rounded-[20px]' />

                    <div className='flex items-center justify-center w-[330px] h-[100px] absolute z-10 bottom-0 right-[50%] -translate-x-[-50%] max-sm:w-[200px] bg-[#F3F7F8] rounded-t-[40px] custom-corners-non max-sm:rounded-t-[20px]'>
                        <img src={nonStandardBox} alt='Ikona przedstawiająca nonstandardBOX' loading='lazy' className='mt-[64px] max-sm:w-[150px] max-sm:mt-[16px]' />
                    </div>

                    <div className='text-white relative z-30 flex flex-col justify-center items-center gap-[16px] px-[36px]'>
                        <h3 className='text-[30px] font-semibold max-sm:text-[22px]'>NonstandardBOX</h3>
                        <p className='text-[16px] text-center max-w-[900px] max-sm:text-[14px]'>Zestaw kontenerowy Nonstandard-BOX to każdy zestaw, który tworzony jest na specjalne potrzeby klienta. Taki zestaw składa się z wykonanych przez nas paneli Sandwich, kompletu profili, drzwi, podłogi oraz wszystkich potrzebnych elementow złącznych. </p>
                    </div>


                </article>
            </div>

        </section>
    )
}

export default Boxes