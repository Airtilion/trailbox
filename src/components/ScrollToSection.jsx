import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                const offset = 128;
                const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
        else{
            window.scrollTo(0,0)
        }
    }, [location]);

    return null;
}

export default ScrollToSection