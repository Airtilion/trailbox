import React, { useRef, useState } from 'react';
import CustomCheckbox from '../CustomCheckbox';
import emailjs from '@emailjs/browser';

const ContactForm = ({ isVisible }) => {
    const chRef = useRef();
    const formRef = useRef();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('')
    const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });

    const changeData = (e, type) => setData({ ...data, [type]: e.target.value });

    const validateForm = () => {
        if (data.name.trim() === "") return setError("Imię i nazwisko / nazwa firmy jest wymagane"), false;
        if (data.email.trim() === "") return setError("Email jest wymagany"), false;
        if (!/\S+@\S+\.\S+/.test(data.email)) return setError("Email jest niepoprawny"), false;
        if (data.phone.trim() === "") return setError("Numer telefonu jest wymagany"), false;
        if (data.phone.trim() === "") return setError("Numer telefonu jest wymagany"), false;

        const cleanedPhone = data.phone.replace(/\s+/g, ""); // Usuwa wszystkie spacje

        if (!/^\+\d+$/.test(cleanedPhone)) return setError("Numer telefonu jest niepoprawny (np. +48 123 456 789)"), false;
        if (data.message.trim() === "") return setError("Treść wiadomości jest wymagana"), false;
        if (!chRef.current.checked) return setError("Zgoda jest wymagana"), false;
        return setError(''), true;
    };

    const sendEmail = () => {
        if (formRef.current.additional.value !== "") {
            console.log("Bot wykryty!");
            return;
        }

        if (validateForm()) emailjs.sendForm("service_8yfnsbk", "template_jla4nnw", formRef.current, { publicKey: "58_2ipNp6ORoplODi" })
            .then(() => {
                console.log("Wysłano Email");
                setData({ name: "", email: "", phone: "", message: "" });
                chRef.current.checked = false;
                setMessage('Pomyślnie wysłano email')
            })
            .catch((err) => {
                console.error(err);
                setError("Wystąpił błąd podczas wysyłania formularza.");
            });
    };

    return (
        <section className={`flex-1 relative z-10 px-[64px] py-[32px] max-xl:pb-[80px] max-md:px-[32px] max-md:pb-[75px] max-xs:!pb-[78px] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-right' : 'element-hidden-right'}`}>
            <h3 className='text-[25px] font-semibold relative z-10 max-md:text-[20px] max-md:mt-[12px]'>Wyślij zapytanie</h3>
            <p className='text-[16px] mb-[32px] relative z-10 max-md:text-[14px] max-md:mt-[8px]'>Napisz do nas, aby dowiedzieć sie więcej o naszych produktach</p>


            {error && <div className="text-red-500 text-[12px] absolute z-20 top-[100px]">{error}</div>}
            {message && <div className="text-green-500 text-[12px] absolute z-20 top-[100px]">{message}</div>}
            <form ref={formRef} className='flex flex-wrap justify-between gap-[32px] relative z-10 max-xl:gap-[24px]'>
                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="name" className='text-[14px] text-[#696969]'>Imię i nazwisko / nazwa firmy</label>
                    <input type="text" id="name" name="name" placeholder='Jan Nowak' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' value={data.name} onChange={(e) => changeData(e, "name")} required />
                </div>

                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="email" className='text-[14px] text-[#696969]'>Email</label>
                    <input type="email" id="email" name="email" placeholder='jan.nowak@example.pl' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' value={data.email} onChange={(e) => changeData(e, "email")} required />
                </div>

                <div className='flex flex-col w-[330px] max-xl:w-full'>
                    <label htmlFor="phone" className='text-[14px] text-[#696969]'>Numer telefonu</label>
                    <input type="text" id="phone" name="phone" placeholder='+48 000 000 000' className='border-b-2 border-[#898989] h-[40px] text-[14px] outline-none' value={data.phone} onChange={(e) => changeData(e, "phone")} required />
                </div>

                <div className='flex flex-col w-full'>
                    <label htmlFor="message" className='text-[14px] text-[#696969]'>Treść wiadomości</label>
                    <textarea id="message" name="message" placeholder='Dzień dobry...' className='border-b-2 border-[#898989] h-[150px] mt-[16px] outline-none resize-none text-[14px]' value={data.message} onChange={(e) => changeData(e, "message")} required />
                </div>
                <input type="text" name="additional" className='hidden' />
                <CustomCheckbox checkboxRef={chRef} />
            </form>

            <button onClick={sendEmail} className='absolute bottom-0 right-0 cursor-pointer text-white text-[20px] font-light rounded-full bg-[#898989] h-[65px] px-[64px] max-xs:!text-[18px] max-xs:!h-[50px] max-xs:!px-[62px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
                <span className='relative z-10'>Wyślij</span>
            </button>

            <div className='w-full h-full absolute top-0 left-0 bg-white clip-contact z-0'></div>
        </section>
    );
};

export default ContactForm;