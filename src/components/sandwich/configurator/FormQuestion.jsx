import React from 'react'
import CustomCheckbox from '../../CustomCheckbox'

const FormQuestion = ({ chRef, isDialogOpen, selectedCore, selectedFilling, type }) => {
    return (
        <form action="" className='mt-[32px] flex flex-wrap justify-between gap-[24px] relative z-10'>
            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="name" className='text-[14px] text-[#696969]'>Imię i nazwisko / nazwa firmy</label>
                <input type="text" id="name" placeholder='Jan Nowak' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="email" className='text-[14px] text-[#696969]'>Email</label>
                <input type="email" id="email" placeholder='jan.nowak@example.pl' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="phone" className='text-[14px] text-[#696969]'>Numer telefonu</label>
                <input type="text" id="phone" placeholder='+48 000 000 000' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="phone" className='text-[14px] text-[#696969]'>Rodzaj płyty</label>
                <input type="text" id="phone" value={`Panel ${type}`} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required disabled />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="phone" className='text-[14px] text-[#696969]'>Wypełnienie</label>
                <input type="text" id="phone" value={selectedFilling} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required disabled />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="phone" className='text-[14px] text-[#696969]'>Grubość rdzenia</label>
                <input type="text" id="phone" value={`${selectedCore} mm`} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required disabled />
            </div>

            <CustomCheckbox checkboxRef={chRef} isDialogOpen={isDialogOpen} />
        </form>
    )
}

export default FormQuestion