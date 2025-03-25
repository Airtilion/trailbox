import React from 'react'

import contactBg from '../../assets/images/home/contact-bg.webp'

import emailIcon from '../../assets/icons/email.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import addressIcon from '../../assets/icons/address.svg'
import companyIcon from '../../assets/icons/company.svg'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import useIntersectionObserver from '../../hooks/useObserver'

const elements = [
    {
        icon: emailIcon,
        text: ["w.rasche@trailbox.pl", "a.rasche@trailbox.pl"]
    },
    {
        icon: phoneIcon,
        text: ["+48 882 143 803"]
    },
    {
        icon: addressIcon,
        text: ["Glinno 3K", "98-290 Warta", "woj. łódzkie, Polska"]
    },
    {
        icon: companyIcon,
        text: ["NIP PL 8272325281", "KRS 0000870363", "Regon 387548703"]
    },
]

const Contact = () => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section className='relative w-full mt-[64px] py-[64px] scroll-mt-[120px] overflow-hidden' id="kontakt">
            <article ref={ref} className='w-[1240px] mx-auto flex justify-between gap-[16px] max-xl:w-[960px] max-lg:flex-col max-lg:w-[700px] max-md:w-[400px] max-xs:!w-[290px]'>
                <aside className={`z-10 relative text-white w-[400px] bg-[#898989] rounded-[40px] p-[32px] max-lg:w-full transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
                    <h2 className='text-[25px] font-semibold max-md:text-[20px]'>Informacje kontaktowe</h2>
                    <p className='text-[16px] font-light mt-[8px] max-md:text-[15px] max-xs:!text-[14px]'>Jesteśmy do Twojej dyspozycji! Masz pytania? Skontaktuj się z nami mailowo lub telefonicznie – chętnie pomożemy!</p>

                    <div className='flex flex-col gap-[48px] mt-[32px] max-lg:flex-row max-lg:flex-wrap max-lg:justify-between max-sm:gap-[32px]'>
                        {elements.map((element, index) => (
                            <ContactInfo key={index} text={element.text} icon={element.icon}/>
                        ))}
                    </div>
                </aside>

                <ContactForm isVisible={isVisible}/>
            </article>
            <img src={contactBg} alt="" className='absolute w-full h-full top-0 left-0 object-cover z-0 scale-[1.1]' />
        </section>
    )
}

export default Contact