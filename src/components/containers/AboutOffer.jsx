import React from 'react'
import useIntersectionObserver from '../../hooks/useObserver';

const AboutOffer = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className='mt-[64px]'>
            <article className={`w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                <h2 className='text-[30px] font-semibold max-lg:text-[25px]'>Profesjonalne zestawy kontenerowe - kompleksowe rozwiązania do samodzielnego montażu</h2>
                <p className='mt-[16px] text-[16px] max-lg:text-[16px]'>Gotowe zestawy kontenerowe to idealne rozwiązanie dla osób poszukujących szybkich, elastycznych i ekonomicznych opcji zabudowy. Nasze zestawy do samodzielnego montażu umożliwiają łatwe i szybkie złożenie kontenera bez konieczności zatrudniania ekipy montażowej. Dzięki modułowej konstrukcji, nasze kontenery można dostosować do różnorodnych potrzeb – od magazynów, przez biura, po przestrzenie mieszkalne. Oferujemy trzy główne typy zestawów: Standard-BOX, Izo-BOX i Termo-BOX, a także zestawy niestandardowe, projektowane zgodnie z Twoimi wymaganiami. Skontaktuj się z nami, aby dowiedzieć się więcej i wybrać idealny zestaw dla siebie!</p>
            </article>
        </section>
    )
}

export default AboutOffer