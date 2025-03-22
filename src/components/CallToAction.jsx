import React from 'react'

import container from '../assets/images/container.webp'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className='w-full rounded-[40px] relative bg-[#898989] my-[64px] py-[64px] px-[128px] mix-blend-darken flex justify-between items-center gap-[128px] max-2xl:px-[64px] max-xl:gap-[32px] max-xl:pr-[32px] max-lg:px-[32px] max-lg:flex-col-reverse max-lg:py-[32px]'>
        <div className='flex flex-col gap-[16px] z-20 relative flex-1 max-lg:items-center'>
            <h2 className='font-bold text-[45px] text-white leading-[1.3] max-xl:text-[35px] max-lg:text-center max-sm:text-[25px]'>Jesteśmy gotowi <br /> odpowiedzieć na Twoje potrzeby</h2>
            <p className='text-white text-[18px] font-light leading-[1.3] max-xl:text-[16px] max-lg:text-center max-sm:text-[14px]'>Chcesz omówić szczegóły? <br /> Kliknij i wypełnij formularz – zaczniemy współpracę od razu!</p>
            <Link to="/#kontakt">
              <button className='bg-[#353432] text-white text-[15px] rounded-full h-[55px] w-[250px] cursor-pointer max-xl:h-[50px] max-sm:text-[14px] max-sm:w-[200px]'>Przejdź do formularza</button>
            </Link>
        </div>

        <div className='w-[35%] h-[100px] absolute top-0 right-0 bg-white rounded-b-[40px] max-2xl:w-[40%] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:w-[70%] max-md:rounded-b-[30px] max-sm:h-[80px] max-xs:!hidden'>
          <span className='absolute w-[80px] h-[80px] top-0 left-[-80px] shadow-[40px_-40px_#ffffff] rounded-[40px] max-md:rounded-[30px]'></span>
          <span className='absolute w-[80px] h-[80px] top-0 right-[-80px] shadow-[-40px_-40px_#ffffff] rounded-[40px] max-md:rounded-[30px] hidden max-lg:block'></span>
        </div>

        <div className='relative w-[540px] h-[300px] z-10 max-md:w-[320px] max-md:h-[170px] max-sm:w-[290px]'>
            <img src={container} alt="Zdjęcie konteneru" className='absolute top-[-128px] right-0 rotate-[-5deg] w-[590px] max-xl:w-[450px] max-xl:top-[-96px] max-lg:right-[-32px] max-md:w-[300px] max-sm:w-[250px] max-sm:top-[-64px] max-sm:right-[-16px] max-xs:!right-[-16px]'/>
            <img src={container} alt="Zdjęcie konteneru" className='absolute bottom-[-96px] left-[-150px] w-[400px] max-xl:w-[350px] max-xl:left-[-72px] max-xl:bottom-[-72px] max-lg:bottom-0 max-lg:left-[-40px] max-md:w-[200px] max-sm:w-[180px] max-sm:left-[-26px] max-xs:!left-[-16px]'/>
        </div>

    </section>
  )
}

export default CallToAction