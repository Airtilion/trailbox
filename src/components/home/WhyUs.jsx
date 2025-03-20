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

const elements = [
  {
    title: "Indywidualne podejście i fachowe doradztwo",
    desc: "Nasze produkty są precyzyjnie wykonane i trwałe, co wyróżnia nas na tle konkurencji.",
    img: [c1_2xl, c1_xl, c1_lg, c1_md, c1_xs]
  },
  {
    title: "Szybki kontakt i wsparcie",
    desc: "Oferujemy pełne wsparcie w komunikacji – doradzamy, pomagamy i dbamy o każdy szczegół.",
    img: [c2_2xl, c2_xl, c2_lg, c2_md, c2_xs]
  },
  {
    title: "Profesjonalizm i uczciwość",
    desc: "Dbamy o najwyższe standardy obsługi i transparentność na każdym etapie współpracy.",
    img: [c3_2xl, c3_xl, c3_lg, c3_md, c3_xs]
  },
  {
    title: "Jakość na której możesz polegać",
    desc: "Dzięki naszej dbałości o jakość nasze produkty będą służyć przez lata.",
    img: [c4_2xl, c4_xl, c4_lg, c4_md, c4_xs]
  },
]

const WhyUs = () => {
  return (
    <section className='w-full'>
      <h2 className='text-[30px] font-semibold w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] max-md:text-[25px]'><span className='text-[#898989]'>Dlaczego</span> warto nam zufać?</h2>
      <p className='text-[16px] font-light mb-[64px] w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] max-md:text-[14px]'>Tworzymy solidne rozwiązania, doradzamy najlepsze opcje i zawsze jesteśmy do Twojej dyspozycji. <br /> Dowiedz się, dlaczego warto nam zaufać!</p>

      <article className='flex flex-col gap-[32px] max-lg:gap-[16px] w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[700px] max-md:w-[400px] max-xs:!w-[290px]'>
        <div className='relative w-full h-[360px] max-lg:h-[660px] max-md:h-[516px]'>
          <WhyUsTile title={elements[0].title} desc={elements[0].desc} img={elements[0].img} index={0}/>
          <WhyUsTile title={elements[1].title} desc={elements[1].desc} img={elements[1].img} index={1}/>
        </div>

        <div className='relative w-full h-[360px] max-lg:h-[660px] max-md:h-[516px]'>
          <WhyUsTile title={elements[2].title} desc={elements[2].desc} img={elements[2].img} index={2}/>
          <WhyUsTile title={elements[3].title} desc={elements[3].desc} img={elements[3].img} index={3}/>
        </div>
      </article>
    </section>
  )
}

export default WhyUs