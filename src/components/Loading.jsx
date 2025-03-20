import React from 'react'

import logo from '../assets/images/logo.svg'

const Loading = () => {
  return (
    <section className='w-full h-dvh flex flex-col justify-center items-center gap-[16px]'>
        <img src={logo} alt="Logo mentorNGO"  width={200} className='h-[200px]'/>
        <div className='loader'></div>
    </section>
  )
}

export default Loading