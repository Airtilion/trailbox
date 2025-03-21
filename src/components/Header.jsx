import React from 'react'
import videoBg from '../assets/video/test.mp4'
import Navbar from './Navbar'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <header className='w-full h-dvh relative bg-white'>
      <Navbar />

      <section className='absolute z-0 w-[calc(100%-100px)] h-[calc(100%-100px)] top-[32px] left-[50%] translate-x-[-50%] max-xl:w-[calc(100%-40px)] max-sm:w-[calc(100%-20px)]'>

        <div className='h-full'>
          <div className='w-[80%] h-[128px] absolute z-10 bg-white top-0 left-0 rounded-br-[40px] r-corners max-2xl:h-[112px] max-xl:h-[96px] max-xl:w-[83%] max-xl:rounded-br-[30px] max-lg:w-[30%] max-md:w-[50%] max-sm:w-[60%]' />
          <div className='w-[270px] h-[75px] absolute z-20 bg-white bottom-0 right-0 rounded-tl-[40px] r-corners-b max-xl:rounded-tl-[30px] max-xl:w-[240px] max-md:hidden' />
          {data !== '' ?
          <div className='cp  rounded-[40px] h-full w-full z-0 max-xl:rounded-[30px] overflow-hidden'>
              <img src={data.image} alt="Zdjęcie headeru" className='object-cover brightness-30 h-full w-full header-loading'/>
          </div>
           :
            <video className='cp object-cover brightness-30 rounded-[40px] h-full w-full z-0 max-xl:rounded-[30px]' autoPlay muted loop>
              <source src={videoBg} type="video/mp4" />
            </video>
           }

        </div>

        <div className='fixed top-[48px] flex gap-[16px] z-20 right-0 w-[calc(100%-80%)] justify-center max-2xl:top-[36px] max-xl:gap-[8px] max-xl:top-[32px] max-xl:w-[calc(100%-83%)] max-lg:hidden'>
          <div className='absolute w-[32px] h-[1px] bg-white top-[50%] translate-x-[-50%] left-[52px] max-2xl:left-[26px] max-2xl:w-[16px] max-xl:hidden'></div>
          <Link to="#">
            <Icon icon="twemoji:flag-poland" width="36" height="36" className='hover:scale-105 duration-300 max-xl:w-[28px]' />
          </Link>
          <Link to="#">
            <Icon icon="twemoji:flag-united-kingdom" width="36" height="36" className='hover:scale-105 duration-300 max-xl:w-[28px]' />
          </Link>
          <Link to="#">
            <Icon icon="twemoji:flag-germany" width="36" height="36" className='hover:scale-105 duration-300 max-xl:w-[28px]' />
          </Link>
          <div className='absolute w-[32px] h-[1px] bg-white top-[50%] translate-x-[-50%] right-[20px] max-2xl:w-[16px] max-2xl:right-[16px] max-xl:hidden'></div>
        </div>

        <div className='absolute top-[50%] left-[128px] max-xl:left-[64px] max-sm:left-[50%] max-sm:translate-x-[-50%] max-sm:w-[90%]'>
          <h1 className='text-[70px] text-white font-extrabold z-20 max-xl:text-[55px] max-lg:text-[40px] max-sm:text-center max-sm:text-[30px] left-loading'>{data !== '' ? data.title : 'PŁYTY WARSTWOWE'}</h1>
          <p className='text-[30px] text-white max-xl:text-[25px] max-lg:text-[20px] max-sm:text-center max-sm:text-[15px] left-loading delay-500'>{data !== '' ? data.subtitle : 'dla wielu zastosowań'}</p>
        </div>

        <button className='w-[250px] h-[55px] rounded-full z-20 bg-[#898989] hover:bg-[#676767] duration-300 cursor-pointer absolute bottom-0 right-0 flex justify-center items-center gap-[8px] shadow-[0px_4px_20px_#00000040] max-xl:w-[220px] max-md:hidden'>
          <Icon icon="solar:letter-bold" width="26" height="26" className="text-white max-xl:w-[24px]" />
          <p className='text-white text-[20px] max-xl:text-[16px]'>Napisz do nas</p>
        </button>

        <div className='absolute bottom-[16px] left-[50%] translate-x-[-50%] flex flex-col items-center gap-[8px]'>
          <div className='w-[25px] h-[50px] border-2 border-white rounded-full flex justify-center items-center relative bounce-lines'>
            <div className='w-[15px] h-[15px] rounded-full bg-white animate-bounce'></div>
          </div>
          <p className='text-[15px] font-light text-white'>Dowiedz się więcej</p>
        </div>
      </section>

    </header>
  )
}

export default Header