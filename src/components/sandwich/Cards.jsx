import React from 'react'
import Card from './Card'

const cardsItems = [
    {
        title: "Panel Super Plus",
        link: "/",
        img: ""
    },
    {
        title: "Panel High Gloss",
        link: "/",
        img: ""
    },
    {
        title: "Panel High Strength Extreme",
        link: "/",
        img: ""
    },
    {
        title: "Panel Water Rain Drop Effect",
        link: "/",
        img: ""
    },
    {
        title: "Panel High Impact",
        link: "/",
        img: ""
    },
    {
        title: "Panel Gewebe",
        link: "/",
        img: ""
    }
]

const Cards = () => {
    return (
        <section className='mt-[64px]'>
            <div className='w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
                <h2 className='text-[30px] font-semibold'>Innowacyjne rozwiązania dla branży automotive i budownictwa</h2>
                <p className='mt-[16px] text-[18px] font-light'>W naszej ofercie znajdziecie Państwo płyty warstwowe typu Sandwich, znajdujące swoje zastosowanie głównie w branży automotive oraz w budownictwie. W produkcji płyt łączymy wiele technologii, aby wydobyć wysoką niezawodność naszych paneli na tle tych konkurencyjnych. Nasze płyty wyróżniają się wysoką jakością pod względem technicznym, jak i estetycznym. Korzystając z najlepszych sprawdzonych na rynku produktów tworzymy płyty wyjątkowo trwałe i odporne na warunki atmosferyczne. Zapraszamy do zapoznania się z poszczególnymi rodzajami naszych paneli.</p>

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