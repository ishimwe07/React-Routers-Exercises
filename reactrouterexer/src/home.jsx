import { Link } from "react-router-dom"
export default function Home(){
    return (
        <div className="bg-[url(/backgroundImage1.png)] text-white h-[78vh] grid items-center justify-items-center text-center">
            <p className="text-6xl font-extrabold w-3/4">You got the travel plans, we got the travel vans.</p>
            <p className="text-2xl font-medium w-1/2">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className="bg-[#FF8C38] py-3 text-lg font-semibold rounded-md w-1/4">Find your van</Link>
        </div>
    )
}