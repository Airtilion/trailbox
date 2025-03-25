import React from 'react'
import useIntersectionObserver from '../../hooks/useObserver';

const AboutOffer = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref} className='mt-[64px]'>
            <article className={`w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                <h2 className='text-[30px] font-semibold max-lg:text-[25px]'>Profesjonalne zestawy kontenerowe - kompleksowe rozwiązania do samodzielnego montażu</h2>
                <p className='mt-[16px] text-[16px] max-lg:text-[16px]'>W naszej ofercie znajdziecie Państwo zestawy kontenerowe do samodzielnego montażu. W zależności od przewidywanego zastosowania takiego zestawu możemy wyróżnić: Standard-BOX, Izo-BOX oraz Termo-BOX. W skład każdego zestawu wchodzą wszystkie niezbędne elementy składowe potrzebne do zbudowania zabudowy kontenerowej. Wychodząc naprzeciw potrzebom naszych klientów, doradzamy w wyborze odpowiednich laminatów i tym podobnych. Wykonujemy również zestawy konetnerowe niestandardowe o różnej konstrukcji. Produkty, których używamy są certyfikowane i starannie przez nas wyselekcjonowane pod względem jakości. Podczas realizacji projektów zapewniamy najwyższą jakość obsługi oferując specjalistyczną wiedzę. Zapraszamy do zapoznania się z ofertą naszych zestawów kontenerowych. W razie pytań prosimy o skorzystanie z formularza kontaktowego, bądź bezpośrednio telefonicznie lub mailowo.</p>
            </article>
        </section>
    )
}

export default AboutOffer