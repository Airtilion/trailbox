import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import plyty_cnc from '../assets/images/cnc_photo.webp'
import plyty_realizacje from '../assets/images/headers/realizacje-bg.webp'
import plyty_zestawy from '../assets/images/headers/zestawy_bg.webp'
import ScrollToSection from "../components/ScrollToSection";

const headers = [
    {
        title: 'GOTOWE ZESTAWY KONTENEROWE',
        subtitle: 'Funkcjonalne i modułowe rozwiązania dla każdej przestrzeni',
        image: plyty_zestawy
    },
    {
        title: 'USŁUGI CNC',
        subtitle: 'Funkcjonalne i modułowe rozwiązania dla każdej przestrzeni',
        image: plyty_cnc
    },
    {
        title: 'REALIZACJE',
        subtitle: 'Funkcjonalne i modułowe rozwiązania dla każdej przestrzeni',
        image: plyty_realizacje
    }
]

const sandwichHeaders = {
    "panel-super-plus": {
        title: 'Panel Super Plus do Zabudowy Nadwozi',
        subtitle: 'Idealne rozwiązanie dla trwałych i estetycznych konstrukcji',
    },
    "panel-high-gloss": {
        title: 'Panel High Gloss do Zabudowy Nadwozi',
        subtitle: 'Estetyczne i nowoczesne rozwiązanie dla Twoich projektów',
    },
    "panel-high-strength-extreme": {
        title: 'Panel High Strength Extreme do Zabudowy Nadwozi',
        subtitle: 'Maksymalna wytrzymałość dla wymagających zastosowań',
    },
    "panel-water-rain": {
        title: 'Panel Water Rain Drop Effect do Zabudowy Nadwozi',
        subtitle: 'Unikalny design i wysoka jakość w jednym',
    },
    "panel-high-impact": {
        title: 'Panel High Impact do Zabudowy Nadwozi',
        subtitle: 'Niezawodna ochrona i trwałość w każdych warunkach.',
    },
    "panel-gewebe": {
        title: 'Panel Gewebe do Zabudowy Nadwozi',
        subtitle: 'Wyjątkowa struktura i wysoka funkcjonalność dla Twoich projektów.',
    },
}


const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const segments = location.pathname.split('/');
    const panel = segments[segments.length - 1];

    let headerData = '';

    if (path.startsWith('/plyty-sandwich')) {
        if (panel && sandwichHeaders[panel]) {
            headerData = sandwichHeaders[panel];
        } else {
            headerData = 'ps';
        }
    } else if (path === '/zestawy') {
        headerData = headers[0];
    } else if (path === '/cnc') {
        headerData = headers[1];
    } else if (path === '/realizacje') {
        headerData = headers[2];
    }

    return (
        <>
            <Header key={location.pathname} data={headerData} />
            <main className="flex flex-col relative overflow-hidden">
                <Outlet />
            </main>
            <Footer />
            <ScrollToSection />
        </>
    );
};

export default MainLayout;
