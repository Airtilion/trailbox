import React from 'react'
import logo from '../assets/images/logo-white.svg'
import bg from '../assets/images/background.webp'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main>
      <section className='relative'>
        <img src={bg} alt="Zdjęcie tła" className='absolute top-0 left-0 w-full h-full' />
        <div className='bg-[#000000]/90 absolute top-0 left-0 w-full h-full'/>
        
        <div className='relative z-10 h-dvh flex flex-col justify-center items-center text-white'>
          <img src={logo} width="150" height="51" alt="Logo trailbox" />
          <h1 className='mt-[16px] text-[50px]'><span className='inline-flex font-bold'>404</span> – Strona nie znaleziona</h1>
          <p className='mt-[16px] text-[18px]'>Ale spokojnie! Możesz wrócić na <Link to="/" className='font-bold inline-flex duration-700 hover:translate-y-[-10px]'>stronę główną</Link> i kontynuować eksplorację.</p>
        </div>
        
      </section>
    </main>
  )
}

export default NotFound