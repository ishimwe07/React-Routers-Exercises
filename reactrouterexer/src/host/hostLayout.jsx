import { Outlet, NavLink } from "react-router-dom";

export function HostLayout(){

    const activeStyles = ({isActive})=> `bg-[#FFEAD0] rounded-lg px-6 py-1 ${isActive? "text-[#161616] underline font-bold" : ""}`
    
    return (
        <>
            <nav className="flex gap-10 m-10">
                <NavLink to="." end className={activeStyles}>Dashboard</NavLink>
                <NavLink to="income" className={activeStyles}>Income</NavLink>
                <NavLink to="vans" className={activeStyles}>Vans</NavLink>
                <NavLink to="reviews" className={activeStyles}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}