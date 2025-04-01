import React from 'react'
import Card from './Card'

import superPlus from '../../assets/images/sandwich/cards/super-plus-small.webp'
import highGloss from '../../assets/images/sandwich/cards/high-gloss-small.webp'
import highStrength from '../../assets/images/sandwich/cards/high-strength-extreme-small.webp'
import waterRain from '../../assets/images/sandwich/cards/water-rain-drop-effect-small.webp'
import highImpact from '../../assets/images/sandwich/cards/high-impact-small.webp'
import gewebe from '../../assets/images/sandwich/cards/gewebe-small.webp'

import useIntersectionObserver from '../../hooks/useObserver';

const cardsItems = [
    {
        title: "Panel Super Plus",
        link: "panel-super-plus",
        img: superPlus
    },
    {
        title: "Panel High Gloss",
        link: "panel-high-gloss",
        img: highGloss
    },
    {
        title: "Panel High Strength Extreme",
        link: "panel-high-strength-extreme",
        img: highStrength
    },
    {
        title: "Panel Water Rain Drop Effect",
        link: "panel-water-rain",
        img: waterRain
    },
    {
        title: "Panel High Impact",
        link: "panel-high-impact",
        img: highImpact
    },
    {
        title: "Panel Gewebe",
        link: "panel-gewebe",
        img: gewebe
    }
]

const Cards = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const [ref2, isVisible2] = useIntersectionObserver();
    return (
        <section className='mt-[64px]'>
            <div className='w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[95%]'>
                <h2 ref={ref2} className={`text-[30px] font-semibold max-lg:text-[25px] max-lg:w-[95%] max-lg:mx-auto transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-left' : 'element-hidden-left'}`}>Innowacyjne rozwiązania dla branży automotive i budownictwa</h2>
                <p className={`mt-[16px] text-[18px] font-light max-lg:text-[16px] max-lg:w-[95%] max-lg:mx-auto transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-left' : 'element-hidden-left'}`}>W naszej ofercie znajdują się panele sandwich, które cieszą się popularnością przede wszystkim w branży automotive oraz budownictwie. Produkując panele sandwich, wykorzystujemy zaawansowane technologie, co gwarantuje ich wysoką niezawodność i przewagę nad konkurencyjnymi rozwiązaniami. Nasze panele sandwich wyróżniają się doskonałą jakością techniczną i estetycznym wykończeniem. Stosujemy wyłącznie najlepsze, sprawdzone materiały, dzięki czemu oferujemy panele sandwich odporne na warunki atmosferyczne i charakteryzujące się wyjątkową trwałością. Zachęcamy do zapoznania się z szeroką gamą naszych paneli sandwich i odkrycia ich zastosowań w Twoim projekcie.</p>

                <div ref={ref} className='mt-[64px] flex flex-wrap justify-center items-center gap-[32px]'>
                    {cardsItems.map((cardItem, index) => (
                        <Card card={cardItem} key={index} index={index} isVisible={isVisible}/>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Cards