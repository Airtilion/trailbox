import React from 'react'
import cncThird from '../../assets/images/cnc/cnc-3.webp'

const Services = () => {
    return (
        <section className="mt-[128px] mb-[256px] relative h-[528px]">
            <img src={cncThird} alt="Zdjęcie na tle sekcji zakresu usług" loading='lazy' className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='absolute top-0 left-0 bg-[#000000]/70 w-full h-full' />
            <article className='mt-[94px] w-[1240px] mx-auto z-10 relative top-[64px] max-xl:w-[1000px] max-lg:w-[90%]'>
                
                <div className='bg-white rounded-[40px] w-[800px] h-[550px] absolute right-0 px-[48px] pt-[32px] pb-[24px] shadow-[4px_4px_20px_0_rgba(0,0,0,0.25)]'>
                    <div className='w-[310px] h-[125px] absolute z-20 bottom-0 bg-white left-0 rounded-tr-[40px] custom-corners-b'></div>
                    
                    <h2 className='font-semibold text-[30px]'>Zakres Naszych Usług <span className='text-[#898989]'>CNC</span></h2>
                    <p className='mt-[8px] text-[16px] max-w-[550px]'>Nasza oferta obejmuje przede wszystkim precyzyjną obróbkę frezowaniem, ze szczególnym uwzględnieniem gotowych produktów, takich jak panele Sandwich. Wykonujemy:</p>
                    <ul className='mt-[32px] list-disc pl-[32px]'>
                        <li>Frezowanie CNC – obróbka różnego rodzaju materiałów, w tym metali, tworzyw sztucznych i kompozytów.</li>
                        <li>Obróbka Paneli Sandwich – dostosowanie wymiarów, kształtu oraz struktury do indywidualnych wymagań klienta.</li>
                        <li>Precyzyjne wiercenie i cięcie – zapewniamy wysoką dokładność wykonania oraz powtarzalność elementów.</li>
                        <li>Personalizowane projekty – dostosowujemy proces produkcji do specyficznych wymagań klienta, oferując indywidualne rozwiązania.</li>
                    </ul>
                    <span className='absolute bottom-[24px] right-[24px] outline-[2px] outline-[#898989] rounded-[40px] text-[15px] text-[#898989] font-medium px-[36px] py-[10px]'>Gwarancja jakości</span>
                
                </div>

            </article>
        </section>
    )
}

export default Services