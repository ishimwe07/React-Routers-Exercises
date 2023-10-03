import { Link } from "react-router-dom"
export default function About(){
    return (
        <div className="">
            <img 
            src="/backgroundImageAbout2.png" alt="Image of a man sitting on a van." 
            className="w-full h-72 xl:h-96"
            />
            <h1 className="text-4xl font-extrabold px-20 xl:w-1/2 pt-5">Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className="font-normal xl:w-3/5 text-lg px-20 py-5">
                Our mission is to enliven your road trip with the perfect travel van rental.
                 Our vans are recertified before each trip to ensure your travel plans can go
                  off without a hitch. (Hitch costs extra 😉)
            </p>
            <p className="font-normal xl:w-3/5 text-lg px-20">
                Our team is full of vanlife enthusiasts who know 
                firsthand the magic of touring the world on 4 wheels.
            </p>
            <div className="bg-[#FFCC8D] mx-20 pl-14 py-5 lg:w-1/2 rounded-lg text-3xl font-extrabold my-5">
                <h1>Your destination is waiting.</h1>
                <h1 className="mb-5">Your van is ready.</h1>
                <Link to="/vans" className="text-lg text-white bg-[#161616] px-4 py-2 rounded-lg">Explore our vans</Link>
            </div>
        </div>
    )
}