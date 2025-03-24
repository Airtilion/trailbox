import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                const offset = 130;

                if (window.innerWidth <= 768) {
                    offset = 50;
                }

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({  top: offsetPosition, behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
}

export default ScrollToSection