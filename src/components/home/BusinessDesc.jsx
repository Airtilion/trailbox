import React from 'react'

import sectionPhoto from '../../assets/images/home/businessDesc.webp'
import useIntersectionObserver from '../../hooks/useObserver';
import { Link } from 'react-router-dom';

const BusinessDesc = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const [ref2, isVisible2] = useIntersectionObserver();
    return (
        <section className='w-[1240px] mx-auto flex flex-col gap-[80px] mt-[32px] max-2xl:w-[1000px] max-xl:w-[960px] max-lg:w-[90%] max-sm:gap-[64px] scroll-mt-[1240px]' id="o-nas">
            <article className={`w-full flex gap-[96px] max-lg:flex-col-reverse max-md:gap-[64px] `}>

                <div ref={ref} className={`mix-blend-darken rounded-[40px] flex-1 relative max-lg:w-[600px] max-lg:mx-auto max-md:w-[90%] max-lg:rounded-[30px] max-sm:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <div className='l-corners absolute top-0 right-0 bg-white w-[300px] h-[96px] flex justify-center items-center rounded-bl-[40px] z-20 max-md:w-[50%] max-sm:w-[75%]'>
                        <h2 className='text-[25px] font-semibold text-[#898989] max-md:text-[20px]'>Pasja i precyzja <br /> <span className='text-black'>w każdym detalu</span></h2>
                    </div>
                    <img src={sectionPhoto} alt="Zdjęcie pokryć paneli wartstowych" lading="lazy" className='rounded-[40px] relative z-10 h-full object-cover max-lg:rounded-[30px] max-sm:min-h-[350px]' />
                    <span className='dotted w-[170px] h-[170px] absolute bottom-[-30px] right-[-30px] z-0 max-md:w-[120px] max-md:h-[120px] max-sm:bottom-[-18px] max-sm:right-[-18px]'></span>
                </div>

                <div ref={ref2} className={`flex-1 flex flex-col gap-[16px] self-end max-lg:w-[90%] max-lg:mx-auto max-sm:w-full transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-right' : 'element-hidden-right'}`}>
                    <h3 className='text-[18px] font-semibold max-xl:text-[16px]'>Realizujemy to, co możesz mieć w zasięgu ręki.</h3>
                    <p className='text-[15px] font-light max-xl:text-[14px]'>Firma TrailBOX od początku swojego istnienia buduje swoja działalność w oparciu o przejrzystość współpracy, lojalność i troskę o jak najlepiej pojęte dobro klienta. Posiadamy rozwinięta sieć odbiorców na rynku polskim oraz na rynkach zagranicznych. Stale poszerzamy nasze doświadczenie w różnych segmentach rynku, oferując nowatorskie rozwiązania.</p>
                    <p className='text-[15px] font-light max-xl:text-[14px]'>Jako firma staramy się uzyskać zaufanie także nowych Klientów, oferując wysoką konkurencyjność i dbałość o każdy szczegół. Dzięki starannemu procesowi produkcji oraz najnowszym technologiom gwarantujemy najwyższa jakość naszych produktów. Wysoki standard utrzymujemy poprzez wykorzystywanie materiałów trwałych i innowacyjnych pod względem funkcjonalnym, stale proponując je naszym obecnym i nowym Klientom. Obsługujemy Klientów kompleksowo, zarówno w otoczeniu krajowym, jak i miedzy narodowym, budując partnerskie relacje.</p>
                </div>

            </article>

            <article className={`w-full flex flex-col items-center gap-[16px] max-lg:w-[90%] max-lg:mx-auto max-sm:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
                <p className='text-[18px] font-medium max-xl:text-[16px] text-center'>Zapraszamy do zapoznania sie z naszą ofertą oraz zachęcamy do kontaktu.</p>
                <Link to='/#kontakt'>
                    <button className='relative rounded-full bg-[#898989] text-white text-[18px] h-[50px] px-[48px] cursor-pointer overflow-hidden custom-button max-xl:text-[16px]'>
                        <span className='relative z-10'>Napisz do nas</span>
                    </button>
                </Link>
            </article>
        </section>
    )
}

export default BusinessDesc