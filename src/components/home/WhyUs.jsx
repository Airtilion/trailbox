import React from 'react'

import c1_2xl from '../../assets/images/home/whyus/wh-1-2xl.webp'
import c2_2xl from '../../assets/images/home/whyus/wh-2-2xl.webp'
import c3_2xl from '../../assets/images/home/whyus/wh-3-2xl.webp'
import c4_2xl from '../../assets/images/home/whyus/wh-4-2xl.webp'

import c1_xl from '../../assets/images/home/whyus/wh-1-xl.webp'
import c2_xl from '../../assets/images/home/whyus/wh-2-xl.webp'
import c3_xl from '../../assets/images/home/whyus/wh-3-xl.webp'
import c4_xl from '../../assets/images/home/whyus/wh-4-xl.webp'

import c1_lg from '../../assets/images/home/whyus/wh-1-lg.webp'
import c2_lg from '../../assets/images/home/whyus/wh-2-lg.webp'
import c3_lg from '../../assets/images/home/whyus/wh-3-lg.webp'
import c4_lg from '../../assets/images/home/whyus/wh-4-lg.webp'

import c1_md from '../../assets/images/home/whyus/wh-1-md.webp'
import c2_md from '../../assets/images/home/whyus/wh-2-md.webp'
import c3_md from '../../assets/images/home/whyus/wh-3-md.webp'
import c4_md from '../../assets/images/home/whyus/wh-4-md.webp'

import c1_xs from '../../assets/images/home/whyus/wh-1-xs.webp'
import c2_xs from '../../assets/images/home/whyus/wh-2-xs.webp'
import c3_xs from '../../assets/images/home/whyus/wh-3-xs.webp'
import c4_xs from '../../assets/images/home/whyus/wh-4-xs.webp'
import WhyUsTile from './WhyUsTile'
import useIntersectionObserver from '../../hooks/useObserver'

const elements = [
  {
    title: "Indywidualne podejście i fachowe doradztwo",
    desc: "Oferujemy fachowe doradztwo i precyzyjnie wykonane płyty warstwowe, które wyróżniają się trwałością i jakością na tle konkurencji.",
    img: [c1_2xl, c1_xl, c1_lg, c1_md, c1_xs]
  },
  {
    title: "Szybki kontakt i wsparcie",
    desc: "Zapewniamy pełne wsparcie w komunikacji, pomagając dobrać najlepsze płyty warstwowe dla Twojego projektu z dbałością o każdy szczegół.",
    img: [c2_2xl, c2_xl, c2_lg, c2_md, c2_xs]
  },
  {
    title: "Profesjonalizm i uczciwość",
    desc: "Stawiamy na najwyższe standardy obsługi i transparentność, budując zaufanie w sektorze płyt warstwowych na każdym etapie współpracy.",
    img: [c3_2xl, c3_xl, c3_lg, c3_md, c3_xs]
  },
  {
    title: "Jakość na której możesz polegać",
    desc: "Nasze płyty warstwowe są synonimem trwałości i niezawodności, dzięki czemu służą przez lata, spełniając najwyższe oczekiwania.",
    img: [c4_2xl, c4_xl, c4_lg, c4_md, c4_xs]
  },
]

const WhyUs = () => {
  const [ ref, isVisible ] = useIntersectionObserver();

  return (
    <section className='w-full'>
      <h2 className='text-[30px] font-semibold w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] max-md:text-[25px]'><span className='text-[#898989]'>Dlaczego</span> warto nam zufać?</h2>
      <p className='text-[16px] font-light mb-[64px] w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] max-md:text-[14px]'>Nasze płyty warstwowe gwarantują najwyższą jakość i trwałość. Oferujemy indywidualne podejście, szybkie wsparcie i profesjonalizm. Dzięki dbałości o szczegóły, nasze płyty warstwowe spełniają oczekiwania nawet najbardziej wymagających klientów.</p>

      <article ref={ref} className='flex flex-col gap-[32px] max-lg:gap-[16px] w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[700px] max-md:w-[400px] max-xs:!w-[290px]'>
        <div className='relative w-full h-[360px] max-lg:h-[660px] max-md:h-[516px]'>
          <WhyUsTile title={elements[0].title} desc={elements[0].desc} img={elements[0].img} index={0} isVisible={isVisible}/>
          <WhyUsTile title={elements[1].title} desc={elements[1].desc} img={elements[1].img} index={1} isVisible={isVisible}/>
        </div>

        <div className='relative w-full h-[360px] max-lg:h-[660px] max-md:h-[516px]'>
          <WhyUsTile title={elements[2].title} desc={elements[2].desc} img={elements[2].img} index={2} isVisible={isVisible}/>
          <WhyUsTile title={elements[3].title} desc={elements[3].desc} img={elements[3].img} index={3} isVisible={isVisible}/>
        </div>
      </article>
    </section>
  )
}

export default WhyUs