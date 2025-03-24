import React, { useRef } from 'react'
import CustomCheckbox from '../CustomCheckbox'

const ContactForm = ({isVisible}) => {
    const chRef = useRef()
    return (
        <section className={`flex-1 relative z-10 px-[64px] py-[32px] max-xl:pb-[80px] max-md:px-[32px] max-md:pb-[75px] max-xs:!pb-[78px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
            <h3 className='text-[25px] font-semibold relative z-10 max-md:text-[20px] max-md:mt-[12px]'>Wyślij zapytanie</h3>
            <p className='text-[16px] mb-[32px] relative z-10 max-md:text-[14px] max-md:mt-[8px]'>Napisz do nas, aby dowiedzieć sie więcej o naszych produktach</p>

            <form action="" className='flex flex-wrap justify-between gap-[24px] relative z-10'>
                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="name" className='text-[14px] text-[#696969]'>Imię i nazwisko / nazwa firmy</label>
                    <input type="text" id="name" placeholder='Jan Nowak' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
                </div>

                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="email" className='text-[14px] text-[#696969]'>Email</label>
                    <input type="email" id="email" placeholder='jan.nowak@example.pl' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
                </div>

                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="phone" className='text-[14px] text-[#696969]'>Numer telefonu</label>
                    <input type="text" id="phone" placeholder='+48 000 000 000' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' required />
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="content" className='text-[14px] text-[#696969]'>Treść wiadomości</label>
                    <textarea type="text" id="content" placeholder='Dzień dobry...' className='border-b-2 border-[#898989] h-[100px] mt-[16px] outline-none resize-none text-[14px]' required />
                </div>

                <CustomCheckbox checkboxRef={chRef}/>
            </form>
            <button className='absolute bottom-0 right-0 cursor-pointer text-white text-[20px] font-light rounded-full bg-[#898989] h-[65px] px-[64px] max-xs:!text-[18px] max-xs:!h-[50px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>                        
                <span className='relative z-10'>Wyślij</span>
            </button>

            <div className='w-full h-full absolute top-0 left-0 bg-white clip-contact z-0'></div>
        </section>
    )
}

export default ContactForm