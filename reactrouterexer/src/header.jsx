import { NavLink } from "react-router-dom"
export default function NavBar(){

    const activeStyling = ({isActive})=> isActive? "font-bold text-[#161616] underline" : null;

    return (
        <nav className="flex items-center justify-between px-14 py-8 text-4xl font-extrabold shadow-lg">
            <NavLink to="/">#VANLIFE</NavLink>
            <span className="text-xl font-light flex gap-5">
                <NavLink 
                    className={activeStyling}
                    to="/host" 
                >
                    Host
                </NavLink>
            
                <NavLink 
                    className={activeStyling}
                    to="/about" 
                >
                    About
                </NavLink>
            
                <NavLink 
                    className={activeStyling}
                    to="/vans"
                >
                    Vans
                </NavLink>
            </span>
        </nav>
    )
}