import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import plyty_header from '../assets/images/headers/header-plyty.webp'
import plyty_cnc from '../assets/images/cnc_photo.webp'
import plyty_realizacje from '../assets/images/headers/realizacje-bg.webp'
import plyty_zestawy from '../assets/images/headers/zestawy_bg.webp'
import ScrollToSection from "../components/ScrollToSection";

const headers = [
    {
        title: 'PŁYTY TYPU SANDWICH',
        subtitle: 'Innowacyjna technologia łącząca lekkość z wytrzymałością',
        image: plyty_header
    },
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

const MainLayout = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <Header key={location.pathname} data={path.startsWith('/plyty-sandwich') ? 'ps' : path === '/cnc' ? headers[2] : path === '/realizacje' ? headers[3] : path === '/zestawy' ? headers[1] : ''}/>
            <main className="flex flex-col relative overflow-hidden">
                <Outlet />
            </main>
            <Footer />
            <ScrollToSection />
        </>
    );
};

export default MainLayout;
