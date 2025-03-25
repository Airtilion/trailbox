import React from 'react'
import cncThird from '../../assets/images/cnc/cnc-3.webp'
import { Link } from 'react-router-dom'
import useIntersectionObserver from '../../hooks/useObserver';

const Services = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className="mt-[128px] relative h-[528px] max-xs:!h-[875px]">
            <img src={cncThird} alt="Zdjęcie na tle sekcji zakresu usług" loading='lazy' className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='absolute top-0 left-0 bg-[#000000]/70 w-full h-full' />

            <article className={`mt-[156px] w-[1240px] flex justify-end mx-auto z-10 relative max-xl:w-[1000px] max-lg:justify-center max-lg:w-[90%] max-sm:mt-[32px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>

                <div className='rounded-[40px] w-[800px] h-[500px] relative right-[-64px] px-[48px] pt-[32px] pb-[24px] dropShadow-customCnc max-2xl:right-[0px] max-sm:w-[400px] max-sm:h-[700px] max-xs:!px-[24px] max-xs:!w-[270px] max-xs:!h-[1025px]'>

                    <div className='absolute bottom-[-450px] top-0 left-0 w-full h-full z-10 bg-white clip-customCnc rounded-[20px]' />

                    <Link to="/#contact" aria-label="Przejdź do kontaktu" className='absolute bottom-0 left-0 max-sm:bottom-[2px]'>
                        <button className='relative cursor-pointer text-[16px] text-white font-light rounded-[40px] px-[54px] py-[16px] max-sm:px-[36px] max-sm:py-[12px] max-xs:!px-[44px] bg-[#898989] shadow-[0_4px_4px_rgba(0,0,0,0.40)] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
                            <span className='z-10 relative'>Napisz do nas</span>
                        </button>
                    </Link>

                    <div className='relative z-10'>
                        <h2 className='font-semibold text-[30px] max-lg:text-[25px] max-sm:text-[22px]'>Zakres Naszych Usług <span className='text-[#898989]'>CNC</span></h2>
                        <p className='mt-[8px] text-[16px] max-w-[550px] max-md:text-[14px]'>Nasza oferta obejmuje przede wszystkim precyzyjną obróbkę frezowaniem, ze szczególnym uwzględnieniem gotowych produktów, takich jak panele Sandwich. Wykonujemy:</p>
                        <ul className='mt-[32px] list-disc pl-[32px] max-md:text-[15px]'>
                            <li>Frezowanie CNC – obróbka różnego rodzaju materiałów, w tym metali, tworzyw sztucznych i kompozytów.</li>
                            <li>Obróbka Paneli Sandwich – dostosowanie wymiarów, kształtu oraz struktury do indywidualnych wymagań klienta.</li>
                            <li>Precyzyjne wiercenie i cięcie – zapewniamy wysoką dokładność wykonania oraz powtarzalność elementów.</li>
                            <li>Personalizowane projekty – dostosowujemy proces produkcji do specyficznych wymagań klienta, oferując indywidualne rozwiązania.</li>
                        </ul>
                    </div>

                    <div className='z-20 absolute bottom-[24px] right-[24px] max-sm:relative max-sm:bottom-auto max-sm:right-0 max-sm:mt-[32px] max-sm:flex max-sm:justify-center'>
                        <span className='outline-[2px] outline-[#898989] rounded-[40px] text-[15px] text-[#898989] font-medium px-[36px] py-[10px]'>Gwarancja jakości</span>
                    </div>
                </div>

            </article>
        </section>
    )
}

export default Services