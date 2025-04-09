import React from 'react'
import bg from '../assets/images/cnc.webp'

const BgImage = () => {
    return (
        <div className='fixed z-[-1] w-full h-dvh top-0 left-0 bg-white'>
            <img src={bg} alt="Zdjęcia tła" className='w-full h-full object-cover opacity-10 brightness-75' />
        </div>
    )
}

export default BgImage