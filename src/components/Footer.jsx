import React from 'react'
import footerBg from '../assets/images/footer-bg.webp'
import logo from '../assets/images/logo-white.svg'
import { Link } from 'react-router-dom'

import logoAirtilion from '../assets/images/airtilion-footer.svg'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full relative flex flex-col gap-[48px] py-[32px]'>
      <article className='relative z-10 flex justify-between w-[1240px] mx-auto max-2xl:w-[960px] max-lg:w-[90%] max-lg:flex-col max-lg:items-center max-lg:gap-[32px]'>
        <img src={logo} width={170} alt="Logo trailbox" className='fill-white' />

        <div className='flex flex-col gap-[16px] max-lg:items-center'>
          <h2 className='text-white text-[16px]'>Trailbox Holding Sp. z o.o.</h2>
          <div className='text-white flex gap-[32px] max-xs:!flex-col'>
            <div>
              <p className='font-extralight text-[16px] max-lg:text-center'>Glinno 3K</p>
              <p className='font-extralight text-[16px] max-lg:text-center'>98-290 Warta,</p>
              <p className='font-extralight text-[16px] max-lg:text-center'>woj. łódzkie, Polska</p>
            </div>
            <div>
              <p className='font-extralight text-[16px] max-lg:text-center'>NIP PL 8272325281</p>
              <p className='font-extralight text-[16px] max-lg:text-center'>KRS 0000870363</p>
              <p className='font-extralight text-[16px] max-lg:text-center'>REGON 387548703</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[16px] max-lg:text-center'>
          <h2 className='text-white text-[16px]'>Nasze usługi</h2>
          <div className='flex flex-col gap-[8px] text-white'>
            <Link to="/zestawy" className='font-extralight hover:text-[#DCDCDC] duration-500'>Zestawy kontenerowe</Link>
            <Link to="/cnc" className='font-extralight hover:text-[#DCDCDC] duration-500'>Usługi CNC</Link>
            <Link to="/plyty-sandwich" className='font-extralight hover:text-[#DCDCDC] duration-500'>Płyty sandwich</Link>
          </div>
        </div>

        <div className='flex flex-col gap-[16px] max-lg:text-center'>
          <h2 className='text-white text-[16px]'>Firma</h2>
          <div className='flex flex-col gap-[8px] text-white'>
            <Link to="/#o-nas" className='font-extralight hover:text-[#DCDCDC] duration-500'>O nas</Link>
            <Link to="/realizacje" className='font-extralight hover:text-[#DCDCDC] duration-500'>Realizacje</Link>
          </div>
        </div>
      </article>

      <p className='w-[960px] mx-auto text-center text-white text-[12px] relative z-10 font-light max-2xl:w-[760px] max-lg:w-[90%]'>Trailbox Holding Sp. z o.o. Glinno 3K, 98-290 Warta, wpisana do rejestru przedsiębiorców Krajowego rejestru Sądowego przez Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi, XX Wydział Gospodarczy Krajowego Rejestru Sądowego pod nr KRS 0000870363, kapitał zakładowy w kwocie X zł w całości opłacony, NIP: 8272325281</p>

      <article className='w-[1240px] mx-auto relative z-10 flex justify-between text-[#DCDCDC] max-2xl:w-[960px] max-lg:w-[90%] max-lg:flex-col max-lg:items-center max-lg:gap-[16px]'>
        <p className='text-center'>© Trailbox Holding {currentYear}</p>

        <Link to="#">Polityka prywatności</Link>

        <Link to="https://airtilion.com" aria-label="Przejdź do strony Airtillion - projekt i wykonanie" target='_blank' rel="noreferrer noopener" className="text-[#9D9D9D] text-[14px] flex justify-center items-center gap-[10px] duration-700 hover:scale-110 max-xs:!flex-col">
          <span>Projekt i wykonanie</span>
          <img src={logoAirtilion} alt="Logo Airtilion - projekt i wykonanie" width="138" height="20" loading="lazy" />
        </Link>
      </article>

      <img src={footerBg} alt="Zdjęcie maszyny CNC w stopce strony" loading='lazy' className='absolute w-full h-full object-cover top-0 left-0 object-top' />
    </footer>
  )
}

export default Footer