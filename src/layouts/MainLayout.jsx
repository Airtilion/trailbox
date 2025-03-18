import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col relative">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
