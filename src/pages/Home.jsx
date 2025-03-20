import React from 'react'
import BusinessDesc from '../components/home/BusinessDesc'
import Offer from '../components/home/Offer'
import WhyUs from '../components/home/WhyUs'
import Contact from '../components/home/Contact'

import test from '../assets/images/home/cnc.webp'

const Home = () => {
  return (
    <>
      <BusinessDesc/>
      <Offer/>
      <WhyUs/>
      <Contact/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79076.14691362072!2d18.595689441980895!3d51.73066502445226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471af0a8386e8837%3A0x72eb4fec28f60e87!2sGlinno%203k%2C%2098-290%20Warta!5e0!3m2!1spl!2spl!4v1742470727860!5m2!1spl!2spl" width="1920" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
      {/* <div className='fixed z-[-1] w-full h-dvh top-0 left-0 bg-white'>
        <img src={test} alt="" className='w-full h-full object-cover opacity-10'/>
      </div> */}
    </>
  )
}

export default Home