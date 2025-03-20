import React from 'react'

const ContactInfo = ({icon, text}) => {
  return (
    <div className='flex gap-[32px] items-center max-lg:w-[250px]'>
        <img src={icon} alt="Ikona kontakowa" width={50} height={50} className='max-sm:w-[40px] max-sm:h-[40px]'/>
        <div>
            {text.map((p, index) => (
                <p key={index} className='text-[16px] font-light max-sm:text-[14px]'>{p}</p>
            ))}
        </div>
    </div>
  )
}

export default ContactInfo