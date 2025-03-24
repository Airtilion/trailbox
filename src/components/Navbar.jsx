import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { Icon } from '@iconify/react/dist/iconify.js'

const elements = [
    { name: 'O nas', link: '/#o-nas' },
    { name: 'Płyty sandwich', link: '/plyty-sandwich' },
    { name: 'Zestawy kontenerowe', link: '/zestawy' },
    { name: 'Usługa CNC', link: '/cnc' },
    { name: 'Realizacje', link: '/realizacje' },
    { name: 'Kontakt', link: '/#kontakt' }
]

const Navbar = () => {
    const menuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    // Flaga, która wskazuje czy użytkownik przewinął stronę przynajmniej raz
    const [hasScrolled, setHasScrolled] = useState(false);

    const menuVisibilityHandle = () => {
        const mButton = menuRef.current;
        const mMenu = mobileMenuRef.current;
        if(mButton.classList.contains("active")){
            mButton.classList.remove("active");
        } else {
            mButton.classList.add("active");
        }
        if(mMenu.classList.contains("flex")){
            mMenu.classList.remove("flex");
            mMenu.classList.add("hidden");
        } else {
            mMenu.classList.add("flex");
            mMenu.classList.remove("hidden");
        }
    };

    const handleResize = () => {
        if (window.innerWidth > 1023) {
            mobileMenuRef.current.classList.add("hidden");
            mobileMenuRef.current.classList.remove("flex");
            menuRef.current.classList.remove("active");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true);
                setHasScrolled(true); // Ustawiamy flagę, że nastąpił scroll
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Przy formowaniu klas dodajemy animacje tylko, gdy użytkownik przewinął stronę (hasScrolled === true)
    const navAnimationClass = hasScrolled 
        ? (isScrolled ? 'animate-header' : 'animate-header-reverse')
        : '';

    return (
        <>
            <div
                ref={menuRef}
                onClick={menuVisibilityHandle}
                className='hidden max-lg:flex hamburger-menu duration-500 w-14 h-14 bg-white fixed flex-col justify-between items-center py-4 px-3 right-[48px] top-[64px] rounded-[10px] z-70 max-sm:right-[40px]'
                style={{ background: isScrolled && '#898989', top: isScrolled && '24px' }}
            >
                <span className={`w-8 h-1 bg-[#898989] duration-500 rounded-full ${isScrolled && 'bg-white'}`}></span>
                <span className={`w-8 h-1 bg-[#898989] duration-500 rounded-full ${isScrolled && 'bg-white'}`}></span>
                <span className={`w-8 h-1 bg-[#898989] duration-500 rounded-full ${isScrolled && 'bg-white'}`}></span>
            </div>

            <nav
                className={`fixed z-60 transition-all duration-1500 rounded-br-[40px] bg-white ${navAnimationClass} ${
                    isScrolled
                        ? 'w-full shadow !px-[96px] top-0 h-[120px] !ml-0 max-sm:!justify-start max-sm:!px-[32px]'
                        : 'w-[calc(80%-100px)] h-[128px] mx-[50px] pr-[32px] top-[32px]'
                } flex justify-between items-center max-2xl:pr-[24px] max-2xl:h-[112px] max-xl:mx-[20px] max-xl:w-[calc(83%-40px)] max-xl:h-[96px] max-lg:w-[calc(30%-40px)] max-lg:justify-center max-lg:pr-0 max-md:w-[calc(50%-40px)] max-sm:w-[calc(60%-20px)] max-sm:mx-[10px]`}
                style={{ borderEndEndRadius: isScrolled && '0' }}
            >
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo trailbox"
                        width={200}
                        className='mt-[-30px] max-2xl:w-[150px] max-2xl:mt-[-20px] max-sm:w-[140px]'
                        style={{ marginTop: isScrolled && '0' }}
                    />
                </Link>

                <ul className='flex gap-[48px] max-2xl:gap-[28px] max-xl:gap-[24px] max-lg:hidden'>
                    {elements.map((element, index) => (
                        <li key={index} className='text-[16px] max-2xl:text-[15px] max-xl:text-[14px]'>
                            <Link to={element.link}>{element.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Menu mobilne */}
                <div
                    ref={mobileMenuRef}
                    className='menu-mobile fixed bottom-0 left-0 w-full h-dvh bg-[#000000c1] hidden backdrop-blur-[5px] flex-col gap-[32px] justify-center items-center z-20'
                >
                    <ul className='flex flex-col gap-8'>
                        {elements.map((item, index) => (
                            <li
                                key={index}
                                style={{ animationDelay: `${index * 100}ms` }}
                                onClick={menuVisibilityHandle}
                            >
                                <Link to={item.link} className='text-[18px] xl:text-[17px] text-white'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='flex gap-[16px] z-20 justify-center' style={{ animationDelay: `${700}ms` }}>
                        <Link to="#">
                            <Icon
                                icon="twemoji:flag-poland"
                                width="36"
                                height="36"
                                className='hover:scale-105 duration-300 max-xl:w-[28px]'
                            />
                        </Link>
                        <Link to="#">
                            <Icon
                                icon="twemoji:flag-united-kingdom"
                                width="36"
                                height="36"
                                className='hover:scale-105 duration-300 max-xl:w-[28px]'
                            />
                        </Link>
                        <Link to="#">
                            <Icon
                                icon="twemoji:flag-germany"
                                width="36"
                                height="36"
                                className='hover:scale-105 duration-300 max-xl:w-[28px]'
                            />
                        </Link>
                    </div>

                    <button className='w-[250px] h-[50px] rounded-full z-20 bg-[#898989] hover:bg-[#676767] duration-300 cursor-pointer flex justify-center items-center gap-[8px]' style={{ animationDelay: `${800}ms` }}>
                        <Icon
                            icon="solar:letter-bold"
                            width="26"
                            height="26"
                            className="text-white max-xl:w-[24px]"
                        />
                        <p className='text-white text-[20px] max-xl:text-[16px]'>Napisz do nas</p>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
