import React, { useEffect, useState, useRef } from 'react';
import CallToAction from '../components/CallToAction';
import test from '../assets/images/background.webp'
import useIntersectionObserver from '../hooks/useObserver';


const Portfolio = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Importujemy wszystkie pliki .webp z katalogu assets/images/gallery
  const images = import.meta.glob('/src/assets/images/gallery/*.webp', { eager: true });
  // Zamieniamy obiekt na tablicę poprawnych URLi
  const imageArray = Object.values(images).map(img => new URL(img.default, import.meta.url).href);

  // Stan określający ile obrazów jest aktualnie widocznych (infinite scroll)
  const [visibleCount, setVisibleCount] = useState(9);

  // Ref do elementu "sentinel", który monitorujemy Intersection Observerem
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCount(prevCount => {
            const newCount = prevCount + 9;
            return newCount > imageArray.length ? imageArray.length : newCount;
          });
        }
      });
    });

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [imageArray.length]);

  // Obrazy, które będą aktualnie renderowane
  const visibleImages = imageArray.slice(0, visibleCount);

  return (
    <>
      <section ref={ref} className='w-[1248px] mx-auto my-[64px] max-2xl:w-[932px] max-lg:w-[616px] max-sm:w-[90%]'>
        <h2 className={`text-[30px] font-semibold w-[450px] max-lg:w-full max-md:text-[20px] max-sm:w-[90%] max-sm:mx-auto transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
          Realizacje - Galeria zdjęć
        </h2>
        <p className={`text-[16px] font-light flex-1 max-lg:text-[15px] max-md:text-[14px] max-sm:w-[90%] max-sm:mx-auto transition-all duration-1000 ease-in-out ${isVisible ? 'element-visible-left' : 'element-hidden-left'}`}>
          Realizacje naszych klientów to najlepszy dowód na wysoką jakość wykonania oraz indywidualne podejście do każdego projektu.
          Zobacz, jak nasze panele sandwich sprawdzają się w praktyce i przekonaj się, że nasze rozwiązania mogą sprostać Twoim oczekiwaniom.
        </p>

        <article className='grid grid-cols-4 gap-[16px] my-[64px] max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center'>
          {visibleImages.map((src, index) => {
            // Ustalamy numer obrazka, licząc od 1 (bo warunki liczymy od 1)
            const imgNumber = index + 1;
            // Pierwszy ciąg: 5, 23, 41, ... (różnica 18)
            // Drugi ciąg: 16, 31, 46, ... (różnica 15)
            const isSpecial =
              (imgNumber >= 5 && (imgNumber - 5) % 18 === 0) ||
              (imgNumber >= 16 && (imgNumber - 16) % 18 === 0);

            const classes = isSpecial
              ? 'col-span-2 row-span-2 w-[620px] h-[420px] rounded-[5px] object-cover max-sm:w-[300px] max-sm:h-[200px] animation-show'
              : 'w-[300px] h-[200px] rounded-[5px] object-cover animation-show';

            return (
              <img
                key={imgNumber}
                src={src}
                alt={`Galeria ${imgNumber}`}
                className={classes}
              />
            );
          })}
        </article>

        {/* Element "sentinel" do infinite scroll */}
        <div ref={sentinelRef} className='h-1'></div>
      </section>
      <CallToAction />
      <div className='fixed z-[-1] w-full h-dvh top-0 left-0 bg-white'>
        <img src={test} alt="" className='w-full h-full object-cover opacity-10' />
      </div>
    </>
  );
};

export default Portfolio;
