import React from 'react'

const CustomCheckbox = ({checkboxRef, isDialogOpen = false}) => {
    return (
        <div className={`flex gap-[8px] items-start max-lg:w-full max-lg:mb-[14px] w-full`}>
            <input ref={checkboxRef} type="checkbox" id="rulebook" required className='peer opacity-0 absolute h-0 w-0' />
            <label htmlFor="rulebook" className="w-5 h-5 border-2 border-[#898989] flex items-center justify-center cursor-pointer peer-checked:bg-[#898989] peer-checked:border-[#898989] transition-all duration-200">
                <span className="hidden peer-checked:block text-white">✓</span>
            </label>

            <p className='text-[10px] leading-[14px] flex-1 max-xs:!text-[9px]'>Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania poprzez formularz kontaktowy bądź wysłania informacji handlowej. Jestem świadomy/-a iż przysługuje mi prawo dostępu do swoich danych, możliwości ich przetwarzania oraz żądania zaprzestania ich przetwarzania. Administratorem Państwa danych osobowych jest Trailbox Holding Sp. z o.o. Glinno 3K, 98-290 Warta (NIP: 8272325281, REGON: 387548703, Tel. kontaktowy: +48 882 143 803, e-mail: w.rasche@trailbox.pl). Wszystkie informacje na temat przetwarzania danych znaleźć można w zakładce „Polityka prywatności” na naszej stronie www.trailbox.pl</p>
        </div>
    )
}

export default CustomCheckbox