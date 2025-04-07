import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const RequestButton = ({openDialog, selectedFilling, selectedCore, titlePanel}) => {
    const isDisabled = !selectedFilling || !selectedCore;

    return (
        <button onClick={openDialog} disabled={isDisabled} className={`absolute bottom-[-71px] left-[0px] flex items-center justify-center gap-[16px] bg-[#898989] rounded-[20px] text-white w-[415px] h-[55px] shadow-[4px_4px_20px_rgba(0,0,0,0.40)] overflow-hidden ${isDisabled ? 'cursor-not-allowed opacity-50 before:scale-x-100' : 'cursor-pointer before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'}  max-lg:left-[50%] max-lg:-translate-x-[50%] max-lg:bottom-[-87px] max-sm:w-full`} aria-label={`Wyslij zapytanie o Panel ${titlePanel}`}>
            <Icon icon="material-symbols:mail" width="35" height="35" className='relative z-10' />
            <span className='font-medium text-[18px] relative z-10 max-lg:text-[16px]'>Wyślij zapytanie</span>
        </button>
    )
}

export default RequestButton