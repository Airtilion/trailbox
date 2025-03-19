import React from 'react'
import Card from './Card'

import superPlus from '../../assets/images/sandwich/cards/super-plus-small.webp'
import highGloss from '../../assets/images/sandwich/cards/high-gloss-small.webp'
import highStrength from '../../assets/images/sandwich/cards/high-strength-extreme-small.webp'
import waterRain from '../../assets/images/sandwich/cards/water-rain-drop-effect-small.webp'
import highImpact from '../../assets/images/sandwich/cards/high-impact-small.webp'
import gewebe from '../../assets/images/sandwich/cards/gewebe-small.webp'

const cardsItems = [
    {
        title: "Panel Super Plus",
        link: "/",
        img: superPlus
    },
    {
        title: "Panel High Gloss",
        link: "/",
        img: highGloss
    },
    {
        title: "Panel High Strength Extreme",
        link: "/",
        img: highStrength
    },
    {
        title: "Panel Water Rain Drop Effect",
        link: "/",
        img: waterRain
    },
    {
        title: "Panel High Impact",
        link: "/",
        img: highImpact
    },
    {
        title: "Panel Gewebe",
        link: "/",
        img: gewebe
    }
]

const Cards = () => {
    return (
        <section className='mt-[64px]'>
            <div className='w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[95%]'>
                <h2 className='text-[30px] font-semibold max-lg:text-[25px] max-lg:w-[95%] max-lg:mx-auto'>Innowacyjne rozwiązania dla branży automotive i budownictwa</h2>
                <p className='mt-[16px] text-[18px] font-light max-lg:text-[16px] max-lg:w-[95%] max-lg:mx-auto'>W naszej ofercie znajdziecie Państwo płyty warstwowe typu Sandwich, znajdujące swoje zastosowanie głównie w branży automotive oraz w budownictwie. W produkcji płyt łączymy wiele technologii, aby wydobyć wysoką niezawodność naszych paneli na tle tych konkurencyjnych. Nasze płyty wyróżniają się wysoką jakością pod względem technicznym, jak i estetycznym. Korzystając z najlepszych sprawdzonych na rynku produktów tworzymy płyty wyjątkowo trwałe i odporne na warunki atmosferyczne. Zapraszamy do zapoznania się z poszczególnymi rodzajami naszych paneli.</p>

                <div className='mt-[64px] flex flex-wrap justify-center items-center gap-[32px]'>
                    {cardsItems.map((cardItem, index) => (
                        <Card card={cardItem} key={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Cards