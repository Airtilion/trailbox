import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const BackTo = () => {
    return (
        <Link to="/plyty-sandwich" aria-label="Powrót na stronę z wyborem paneli" className='flex items-center gap-[8px] duration-700 hover:text-[#898989]'>
            <Icon icon="solar:arrow-left-linear" width="24" height="24" />
            <p className='text-[16px]'>Powrót na stronę z wyborem paneli</p>
        </Link>
    )
}

export default BackTo