import React from 'react'

import zestawyBg from '../../assets/images/home/zestawy.webp'
import plytyBg from '../../assets/images/home/plyty.webp'
import cncBg from '../../assets/images/home/cnc.webp'
import OfferTile from './OfferTile'

const cards = [
    {
        title: "Zestawy kontenerowe",
        desc: "Oferujemy zestawy kontenerowe do samodzielnego montażu",
        link: '/zestawy',
        image: zestawyBg,
    },
    {
        title: "Płyty warstwowe Sandwich",
        desc: "Produkujemy ze starannie dobranych materiałów",
        link: '/plyty-sandwich',
        image: plytyBg,
    },
    {
        title: "Usługa CNC",
        desc: "Wykonujemy precyzyjne usługi frezowania CNC",
        link: '/cnc',
        image: cncBg,
    },
]

const Offer = () => {
  return (
    <section className='w-full bg-[#F3F7F8] my-[64px] py-[64px]'>
        <article className='w-[1240px] mx-auto flex flex-col gap-[64px] max-2xl:w-[1000px] max-xl:w-[960px] max-lg:w-[90%]'>
            <div className='flex gap-[64px] max-lg:flex-col max-lg:gap-[16px]'>
                <h2 className='text-[30px] font-semibold w-[450px] max-lg:w-full max-md:text-[20px]'>Kompleksowe rozwiązania dla Twojego biznesu</h2>
                <p className='text-[16px] font-light flex-1 max-lg:text-[15px] max-md:text-[14px]'>W naszej ofercie znajdą Państwo szeroki wachlarz usług, które odpowiadają na różnorodne potrzeby zarówno w budownictwie, jak i branży przemysłowej. Dzięki doświadczeniu i nowoczesnym technologiom oferujemy rozwiązania, które gwarantują niezawodność, trwałość oraz estetykę.</p>
            </div>
            <div className='flex justify-between max-lg:flex-col max-lg:gap-[32px] max-lg:items-center'>
                {cards.map((item, index) => (
                    <OfferTile key={index} title={item.title} desc={item.desc} link={item.link} img={item.image}/>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Offer