import { Link } from "react-router-dom"
export default function NavBar(){
    return (
        <nav className="flex items-center justify-between px-14 py-8 text-4xl font-extrabold shadow-lg">
            <Link to="/">#VANLIFE</Link>
            <span className="text-xl font-light flex gap-5">
                <Link to="/about" >About</Link>
                <Link to="/vans">Vans</Link>
            </span>
        </nav>
    )
}