import React from 'react'
import cncFourth from '../../assets/images/cnc/cnc-4.webp'
import useIntersectionObserver from '../../hooks/useObserver';

const Precision = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className='mt-[256px] bg-[#F3F7F8] py-[100px] mb-[64px]'>
            <article className='w-[1240px] mx-auto flex gap-[64px] max-xl:w-[1000px] max-lg:w-[90%] max-lg:flex-col max-lg:items-center'>
                
                <div className={`w-[660px] relative max-xl:w-[500px] max-lg:flex max-lg:justify-center max-sm:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <img src={cncFourth} alt="Zdjęcie przedstawiające maszynę CNC" loading='lazy' className='object-cover rounded-[5px] shadow-[4px_4px_20px_0_rgba(0,0,0,0.25)]' />
                    <div className='absolute w-[50px] h-[10px] bg-[#898989] right-[10px] top-[41px] max-xl:right-[-15px] max-xl:w-[15px] max-sm:hidden' />
                    <div className='absolute w-[10px] h-[50px] bg-[#898989] rounded-bl-[10px] left-[38px] bottom-[-50px] max-xl:bottom-[22px] max-lg:bottom-[-25px] max-lg:h-[25px] max-sm:hidden
                        after:content-[""] after:w-[602px] after:h-[10px] after:bg-[#898989] after:absolute after:bottom-[0px] after:left-[10px] max-xl:after:w-[465px] max-sm:after:hidden
                        before:content-[""] before:w-[10px] before:h-[359px] before:bg-[#898989] before:rounded-r-[10px] before:absolute before:left-[612px] before:top-[-309px] max-xl:before:left-[475px] max-xl:before:h-[300px] max-xl:before:top-[-250px] max-lg:before:h-[276px] max-lg:before:top-[-251px] max-sm:before:hidden
                    '/>
                </div>
                
                <div className={`w-[500px] max-xl:w-[436px] max-lg:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
                    <h2 className='text-[25px] font-semibold max-w-[400px] max-sm:text-[22px]'>Profesjonalne usługi CNC<span className='text-[#898989]'> - Gdy Milimetry Mają Znaczenie</span></h2>
                    <p className='mt-[32px] text-[16px] max-sm:text-[14px]'>W nowoczesnej obróbce CNC kluczowe są nie tylko zaawansowane technologie, ale również perfekcja wykonania. Każdy detal i frezowany element musi spełniać najwyższe standardy jakości. Nasze profesjonalne usługi CNC pozwalają na realizację nawet najbardziej wymagających projektów, łącząc funkcjonalność z estetyką.</p>
                    <p className='mt-[16px] text-[16px] max-sm:text-[14px]'>Dzięki zastosowaniu innowacyjnych metod oraz precyzyjnych narzędzi zapewniamy najwyższą jakość obróbki. </p>
                </div>
            </article>
        </section>
    )
}

export default Precision