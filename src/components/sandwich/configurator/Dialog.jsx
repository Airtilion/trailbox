import React, { useRef } from 'react'
import logo from '../../../assets/images/logo.svg'
import FormQuestion from './FormQuestion'

const Dialog = ({ dialogRef, selectedFilling, selectedCore, closeDialog, isDialogOpen, type }) => {
  const chRef = useRef()
  const filling = selectedFilling ?? "brak danych";
  const core = selectedCore ?? "brak danych";

  return (
    <>
      <dialog ref={dialogRef} className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[800px] h-[725px] rounded-[40px] p-[36px] max-lg:w-full max-lg:h-full max-sm:px-[16px]'>

        <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt="Logo trailbox" width="150" height="51" loading='lazy' />
          <h2 className='mt-[32px] text-[25px] font-medium max-sm:text-[22px]'>Wyślij zapytanie</h2>
          <p className='mt-[8px] text-[16px]'>o wypełnienie '{filling}' o grubości rdzenia '{core} mm'</p>
          <p className='mt-[8px] text-[14px]'>Pamiętaj, że wysłanie wiadomości nie jest równoznaczne ze złożeniem zamówienia – stanowi jedynie zapytanie o ofertę. Skontaktujemy się z Tobą w celu przedstawienia szczegółów.</p>

          <FormQuestion chRef={chRef} isDialogOpen={isDialogOpen} selectedFilling={filling} selectedCore={core} type={type} />


          <div className='mt-[32px] w-full flex justify-between max-sm:flex-col-reverse max-sm:gap-[16px]'>
            <button onClick={closeDialog} className='text-black duration-700 hover:text-white relative cursor-pointer text-[18px] font-light rounded-full outline-[1px] outline-[#898989] h-[45px] px-[64px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
              <span className='relative z-10'>Anuluj</span>
            </button>

            <button className='relative cursor-pointer text-white text-[18px] font-light rounded-full bg-[#898989] h-[45px] px-[64px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
              <span className='relative z-10'>Wyślij</span>
            </button>

          </div>
        </div>

      </dialog>
    </>
  )
}

export default Dialog