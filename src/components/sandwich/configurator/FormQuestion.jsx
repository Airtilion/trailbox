import React from 'react'
import CustomCheckbox from '../../CustomCheckbox'

const FormQuestion = ({ chRef, isDialogOpen, selectedCore, selectedFilling, type, changeData, data, formRef }) => {
    return (
        <form ref={formRef} className='mt-[32px] flex flex-wrap justify-between gap-[24px] relative z-10'>
            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="name" className='text-[14px] text-[#696969]'>Imię i nazwisko / nazwa firmy</label>
                <input type="text" id="name" name="name" placeholder='Jan Nowak' value={data.name} onChange={(e) => changeData(e, "name")} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="email" className='text-[14px] text-[#696969]'>Email</label>
                <input type="email" id="email" name="email" placeholder='jan.nowak@example.pl' value={data.email} onChange={(e) => changeData(e, "email")} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="phone" className='text-[14px] text-[#696969]'>Numer telefonu</label>
                <input type="text" id="phone" name="phone" placeholder='+48 000 000 000' value={data.phone} onChange={(e) => changeData(e, "phone")} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="panel" className='text-[14px] text-[#696969]'>Rodzaj płyty</label>
                <input type="text" id="panel" name="panel" value={`Panel ${type}`} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required readOnly />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="fill" className='text-[14px] text-[#696969]'>Wypełnienie</label>
                <input type="text" id="fill" name="fill" value={selectedFilling} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required readOnly />
            </div>

            <div className='flex flex-col w-[330px] max-lg:w-full'>
                <label htmlFor="thickness" className='text-[14px] text-[#696969]'>Grubość rdzenia</label>
                <input type="text" id="thickness" name="thickness" value={`${selectedCore} mm`} className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required readOnly />
            </div>

            <input type="text" name="additional" className='hidden' />

            <CustomCheckbox checkboxRef={chRef} isDialogOpen={isDialogOpen} />
        </form>
    )
}

export default FormQuestion