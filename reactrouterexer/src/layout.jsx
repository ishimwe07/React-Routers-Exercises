import { Outlet } from "react-router-dom"
import NavBar from "./header"
import Footer from "./footer"
export default function Layout(){
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>

    )
}