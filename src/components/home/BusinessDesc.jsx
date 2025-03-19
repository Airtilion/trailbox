import React from 'react'

import sectionPhoto from '../../assets/images/home/businessDesc.webp'

const BusinessDesc = () => {
  return (
    <section className='w-[1240px] mx-auto flex flex-col gap-[80px] mt-[32px]'>
        <article className='w-full flex gap-[96px]'>
            <div className='rounded-[40px] flex-1 relative'>
                <div className='l-corners absolute top-0 right-0 bg-white w-[300px] h-[96px] flex justify-center items-center rounded-bl-[40px] z-20'>
                    <h2 className='text-[25px] font-semibold text-[#898989]'>Pasja i precyzja <br /> <span className='text-black'>w każdym detalu</span></h2>
                </div>
                <img src={sectionPhoto} alt="Zdjęcie pokryć paneli wartstowych"  className='rounded-[40px] relative z-10'/>
                <span className='dotted w-[170px] h-[170px] bg-red-500 absolute bottom-[-30px] right-[-30px] z-0'></span>
            </div>
            <div className='flex-1 flex flex-col gap-[16px] self-end'>
                <h3 className='text-[18px] font-semibold'>Realizujemy to, co możesz mieć w zasięgu ręki.</h3>
                <p className='text-[15px] font-light'>Firma TrailBOX od początku swojego istnienia buduje swoja działalność w oparciu o przejrzystość współpracy, lojalność i troskę o jak najlepiej pojęte dobro klienta. Posiadamy rozwinięta sieć odbiorców na rynku polskim oraz na rynkach zagranicznych. Stale poszerzamy nasze doświadczenie w różnych segmentach rynku, oferując nowatorskie rozwiązania.</p>
                <p className='text-[15px] font-light'>Jako firma staramy się uzyskać zaufanie także nowych Klientów, oferując wysoką konkurencyjność i dbałość o każdy szczegół. Dzięki starannemu procesowi produkcji oraz najnowszym technologiom gwarantujemy najwyższa jakość naszych produktów. Wysoki standard utrzymujemy poprzez wykorzystywanie materiałów trwałych i innowacyjnych pod względem funkcjonalnym, stale proponując je naszym obecnym i nowym Klientom. Obsługujemy Klientów kompleksowo, zarówno w otoczeniu krajowym, jak i miedzy narodowym, budując partnerskie relacje.</p>
            </div>
        </article>
        <article className='w-full flex flex-col items-center gap-[16px]'>
            <p className='text-[18px] font-medium'>Zapraszamy do zapoznania sie z naszą ofertą oraz zachęcamy do kontaktu.</p>
            <button className='rounded-full bg-[#898989] text-white text-[18px] h-[50px] px-[48px]'>Napisz do nas</button>
        </article>
    </section>
  )
}

export default BusinessDesc