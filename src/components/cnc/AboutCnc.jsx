import React from 'react'
import cncFirst from '../../assets/images/cnc/cnc-1.webp'
import cncSecond from '../../assets/images/cnc/cnc-2.webp'


const AboutCnc = () => {
    return (
        <section className='mt-[64px]'>
            <article className='w-[1240px] mx-auto flex gap-[32px] max-xl:w-[1000px] max-xl:flex-col max-xl:items-center max-lg:w-[90%]'>

                <div className='w-[817px] h-[483px] relative mix-blend-darken max-lg:w-full'>
                    <img src={cncFirst} alt="Zdjęcie przedstawiające maszynę CNC" loading="lazy" className='rounded-[40px] object-cover h-full w-full' />
                    <div className='bg-[#000000]/40 absolute top-0 left-0 w-full h-full rounded-[40px]' />
                    <div className='flex flex-col justify-center items-center w-[420px] h-[120px] absolute z-20 bg-white bottom-0 right-0 rounded-tl-[40px] r-corners-b max-xl:rounded-tl-[30px] max-xl:w-[300px] max-sm:w-[200px] max-sm:h-[100px] max-sm:text-center'>
                        <div className='text-[30px] font-bold max-xl:text-[25px] max-sm:text-[20px]'>
                            <h2 className='text-[#898989]'>Usługi CNC</h2>
                            <span>Precyzyjna Obróbka</span>
                        </div>
                    </div>
                </div>

                <div className='w-[391px] flex flex-col gap-[32px] max-xl:flex-row max-xl:w-full max-sm:flex-col'>
                    <div className='bg-white rounded-[40px] px-[25px] py-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] max-xl:w-[50%] max-sm:w-full'>
                        <span className='outline-[1px] outline-[#898989] text-[#898989] rounded-[40px] px-[24px] py-[10px] max-md:w-full max-md:flex max-md:text-center max-sm:justify-center'>Precyzja i nowoczesność</span>
                        <p className='mt-[32px] text-[16px] max-sm:text-[14px]'>Wykonujemy uslugi frezowania CNC. Wykorzystujemy przy tym rozwiązania nowoczesnych technologii, by dostarczać naszym klientom produkty spełniające ich oczekiwania oraz założenia projektowe.</p>
                    </div>

                    <div className='relative max-xl:w-[50%] max-sm:w-full'>
                        <img src={cncSecond} alt="Zdjęcie tła sekcji" loading='lazy' className='rounded-[40px] object-cover w-full h-full' />
                        <div className='bg-[#000000]/40 absolute top-0 left-0 w-full h-full rounded-[40px]' />
                        <p className='absolute top-[50%] -translate-y-[50%] text-white px-[24px] max-sm:text-[14px]'>Oferta obejmuje przede wszystkim obróbkę frezowania naszych gotowych produktów, czyli różnego rodzaju Paneli Sandwich.</p>
                    </div>

                </div>

            </article>
        </section>
    )
}

export default AboutCnc