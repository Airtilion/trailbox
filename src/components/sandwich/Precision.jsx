import React from 'react'
import useIntersectionObserver from '../../hooks/useObserver';

const Precision = () => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <section ref={ref} className='my-[64px] bg-[#F3F7F8]'>
        <article className={`w-[1240px] mx-auto py-[64px] max-xl:w-[1000px] max-lg:w-[90%] transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
            <h2 className='text-[30px] text-[#898989] font-semibold max-lg:text-[25px]'>Precyzja i trwałość<br /><span className='text-black'>w każdym detalu dzięki panelom sandwich</span></h2>
            <p className='mt-[32px] font-light text-[18px] max-lg:text-[16px]'>Realizacja każdego projektu z użyciem naszych paneli sandwich to połączenie nowoczesnych technologii, precyzji wykonania i dbałości o najdrobniejsze szczegóły. Wieloletnie doświadczenie w branży oraz bliska współpraca z klientami pozwalają nam dostarczać panele sandwich spełniające najwyższe standardy jakości. Rozumiemy, jak ważne jest dostosowanie materiałów do specyficznych potrzeb – dlatego nasze panele sandwich łączą estetykę z trwałością i niezawodnością na lata.</p>
            <p className='mt-[16px] font-light text-[18px] max-lg:text-[16px]'>Bez względu na to, czy potrzebujesz paneli sandwich odpornych na trudne warunki pogodowe, o wyjątkowej wytrzymałości czy idealnie gładkiej powierzchni, u nas znajdziesz rozwiązanie idealnie dopasowane do Twoich wymagań. Wybierając nasze panele sandwich, stawiasz na innowacyjność, jakość i profesjonalizm, które wyróżniają nas na rynku.</p>
        </article>
    </section>
  )
}

export default Precision