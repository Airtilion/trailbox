import React from 'react'
import cncThird from '../../assets/images/cnc/cnc-3.webp'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <section className="mt-[128px] relative h-[528px]">
            <img src={cncThird} alt="Zdjęcie na tle sekcji zakresu usług" loading='lazy' className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='absolute top-0 left-0 bg-[#000000]/70 w-full h-full' />

            <article className='mt-[156px] w-[1240px] flex justify-end mx-auto z-10 relative max-xl:w-[1000px] max-lg:w-[90%]'>

                <div className='rounded-[40px] w-[800px] h-[500px] relative right-[-64px] px-[48px] pt-[32px] pb-[24px] dropShadow-customCnc'>

                    <div className='absolute bottom-[-450px] top-0 left-0 w-full h-full z-10 bg-white clip-customCnc rounded-[20px]' />

                    <Link to="/#contact" aria-label="Przejdź do kontaktu" className='absolute bottom-0 left-0'>
                        <button className='relative cursor-pointer text-[16px] text-white font-light rounded-[40px] px-[54px] py-[16px] bg-[#898989] shadow-[0_4px_4px_rgba(0,0,0,0.40)] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
                            <span className='z-10 relative'>Napisz do nas</span>
                        </button>
                    </Link>

                    <div className='relative z-10'>
                        <h2 className='font-semibold text-[30px]'>Zakres Naszych Usług <span className='text-[#898989]'>CNC</span></h2>
                        <p className='mt-[8px] text-[16px] max-w-[550px]'>Nasza oferta obejmuje przede wszystkim precyzyjną obróbkę frezowaniem, ze szczególnym uwzględnieniem gotowych produktów, takich jak panele Sandwich. Wykonujemy:</p>
                        <ul className='mt-[32px] list-disc pl-[32px]'>
                            <li>Frezowanie CNC – obróbka różnego rodzaju materiałów, w tym metali, tworzyw sztucznych i kompozytów.</li>
                            <li>Obróbka Paneli Sandwich – dostosowanie wymiarów, kształtu oraz struktury do indywidualnych wymagań klienta.</li>
                            <li>Precyzyjne wiercenie i cięcie – zapewniamy wysoką dokładność wykonania oraz powtarzalność elementów.</li>
                            <li>Personalizowane projekty – dostosowujemy proces produkcji do specyficznych wymagań klienta, oferując indywidualne rozwiązania.</li>
                        </ul>
                    </div>

                    <span className='z-20 absolute bottom-[24px] right-[24px] outline-[2px] outline-[#898989] rounded-[40px] text-[15px] text-[#898989] font-medium px-[36px] py-[10px]'>Gwarancja jakości</span>
                </div>

            </article>
        </section>
    )
}

export default Services