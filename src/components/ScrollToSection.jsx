import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "end" });
            }
        }
    }, [location]);

    return null;
}

export default ScrollToSection