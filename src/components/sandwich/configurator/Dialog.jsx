import React, { useRef, useState } from 'react'
import logo from '../../../assets/images/logo.svg'
import FormQuestion from './FormQuestion'
import emailjs from '@emailjs/browser';

const Dialog = ({ dialogRef, selectedFilling, selectedCore, closeDialog, isDialogOpen, type }) => {
  const chRef = useRef()
  const filling = selectedFilling ?? "brak danych";
  const core = selectedCore ?? "brak danych";

  const formRef = useRef();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('')
  const [data, setData] = useState({ name: "", email: "", phone: ""});

  const changeData = (e, type) => setData({ ...data, [type]: e.target.value });

  const validateForm = () => {
    if (data.name.trim() === "") return setError("Imię i nazwisko / nazwa firmy jest wymagane"), false;
    if (data.email.trim() === "") return setError("Email jest wymagany"), false;
    if (!/\S+@\S+\.\S+/.test(data.email)) return setError("Email jest niepoprawny"), false;
    if (data.phone.trim() === "") return setError("Numer telefonu jest wymagany"), false;
    if (data.phone.trim() === "") return setError("Numer telefonu jest wymagany"), false;

    const cleanedPhone = data.phone.replace(/\s+/g, ""); // Usuwa wszystkie spacje

    if (!/^\+\d+$/.test(cleanedPhone)) return setError("Numer telefonu jest niepoprawny (np. +48 123 456 789)"), false;
    if (!chRef.current.checked) return setError("Zgoda jest wymagana"), false;
    return setError(''), true;
  };

  const sendEmail = () => {
    if (formRef.current.additional.value !== "") {
      console.log("Bot wykryty!");
      return;
    }

    if (validateForm()) emailjs.sendForm("service_8yfnsbk", "template_v0h2wmr", formRef.current, { publicKey: "58_2ipNp6ORoplODi" })
      .then(() => {
        console.log("Wysłano Email");
        setData({ name: "", email: "", phone: "" });
        chRef.current.checked = false;
        setMessage('Pomyślnie wysłano email')
      })
      .catch((err) => {
        console.error(err);
        setError("Wystąpił błąd podczas wysyłania formularza.");
      });
  };

  return (
    <>
      <dialog ref={dialogRef} className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white w-[800px] rounded-[40px] p-[36px] max-lg:w-full max-lg:h-full max-sm:px-[16px]'>

        <div className='flex flex-col justify-center items-center'>
          <img src={logo} alt="Logo trailbox" width="150" height="51" loading='lazy' />
          <h2 className='mt-[32px] text-[25px] font-medium max-sm:text-[22px]'>Wyślij zapytanie</h2>
          <p className='mt-[8px] text-[16px] max-sm:text-[14px]'>o wypełnienie '{filling}' o grubości rdzenia '{core} mm'</p>
          <p className='mt-[8px] text-[14px]'>Pamiętaj, że wysłanie wiadomości nie jest równoznaczne ze złożeniem zamówienia – stanowi jedynie zapytanie o ofertę. Skontaktujemy się z Tobą w celu przedstawienia szczegółów.</p>
          <p className='mt-[8px] text-[12px]'>Jeśli chcesz zapytać o więcej niż jeden produkt skorzystaj z formularza kontaktowego lub napisz do nas bezpośrednio email.</p>

          {error && <div className="text-red-500 text-[12px] mt-[16px]">{error}</div>}
          {message && <div className="text-green-500 text-[12px] mt-[16px]">{message}</div>}

          <FormQuestion chRef={chRef} isDialogOpen={isDialogOpen} selectedFilling={filling} selectedCore={core} type={type} changeData={changeData} data={data} formRef={formRef}/>


          <div className='mt-[32px] w-full flex justify-between max-sm:flex-col-reverse max-sm:gap-[16px]'>
            <button onClick={closeDialog} className='text-black duration-700 hover:text-white relative cursor-pointer text-[18px] font-light rounded-full outline-[1px] outline-[#898989] h-[45px] px-[64px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
              <span className='relative z-10'>Anuluj</span>
            </button>

            <button onClick={sendEmail} className='relative cursor-pointer text-white text-[18px] font-light rounded-full bg-[#898989] h-[45px] px-[64px] overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#676767] before:scale-x-0 before:origin-left before:transition-transform before:duration-1000 hover:before:scale-x-100'>
              <span className='relative z-10'>Wyślij</span>
            </button>

          </div>
        </div>

      </dialog>
    </>
  )
}

export default Dialog