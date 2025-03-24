import React from 'react'

const AfterContact = () => {
  return (
    <section className='py-[16px] flex justify-center gap-[64px] text-white bg-[#898989] max-sm:flex-col max-sm:items-center max-sm:gap-[32px]'>
        <article className='flex flex-col items-center'>
          <h2 className='text-[25px] font-semibold max-sm:text-[20px]'>BIURO</h2>
          <p>Tel. +48 533 468 979</p>
          <p>a.rasche@trailbox.pl</p>
        </article>

        <article className='flex flex-col items-center'>
          <h2 className='text-[25px] font-semibold max-sm:text-[20px]'>DZIAŁ HANDLOWY</h2>
          <p>Tel. +48 882 143 803</p>
          <p>w.rasche@trailbox.pl</p>
        </article>
      </section>
  )
}

export default AfterContact