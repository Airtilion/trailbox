import React from 'react'

import zestawyBg from '../../assets/images/home/zestawy.webp'
import plytyBg from '../../assets/images/home/z2_4.webp'
import cncBg from '../../assets/images/home/cnc.webp'
import OfferTile from './OfferTile'
import useIntersectionObserver from '../../hooks/useObserver'

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
    const [ ref, isVisible ] = useIntersectionObserver();
    const [ ref2, isVisible2 ] = useIntersectionObserver();

  return (
    <section className='w-full bg-[#F3F7F8] my-[64px] py-[64px]'>
        <article className='w-[1240px] mx-auto flex flex-col gap-[64px] max-2xl:w-[1000px] max-xl:w-[960px] max-lg:w-[90%]'>
            <div ref={ref2} className={`flex gap-[64px] items-center max-lg:flex-col max-lg:gap-[16px] transition-all duration-1000 ease-in-out ${isVisible2 ? 'element-visible-bottom' : 'element-hidden-bottom'}`}>
                <h2 ref={ref} className='text-[30px] font-semibold w-[450px] max-lg:w-full max-md:text-[20px]'>Kompleksowe rozwiązania dla Twojego biznesu</h2>
                <p className='text-[16px] font-light flex-1 max-lg:text-[15px] max-md:text-[14px]'>Specjalizujemy się w usługach związanych z płytami warstwowymi, oferując zestawy kontenerowe do samodzielnego montażu oraz precyzyjne frezowanie CNC. Nasze płyty warstwowe są kluczowym elementem tych rozwiązań, zapewniając niezawodność i trwałość w każdym zastosowaniu. W naszej ofercie znajdą Państwo szeroki wachlarz usług, które odpowiadają na różnorodne potrzeby zarówno w budownictwie, jak i branży przemysłowej.</p>
            </div>
            <div className='flex justify-between max-lg:flex-col max-lg:gap-[32px] max-lg:items-center'>
                {cards.map((item, index) => (
                    <OfferTile key={index} title={item.title} desc={item.desc} link={item.link} img={item.image} isVisible={isVisible} index={index}/>
                ))}
            </div>
        </article>
    </section>
  )
}

export default Offer