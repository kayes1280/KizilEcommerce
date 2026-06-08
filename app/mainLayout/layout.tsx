import { Outlet } from "react-router";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";

export default function MainLayout(){
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}