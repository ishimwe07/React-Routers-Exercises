import { Link, useSearchParams, useLoaderData } from "react-router-dom"
import VanComponent from "./vanComponent"
import { getVans } from "../api";
import "../server"

export async function loader (){
    return await getVans()
}

export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    const vansData = useLoaderData()
 

    const vansToDisplay = typeFilter? vansData.filter(van => van.type === typeFilter) : vansData;
  
    const allVansComponents = vansToDisplay.map(van => (<VanComponent 
        key={van.id}
        id={van.id}
        name={van.name} 
        description={van.description}
        imageUrl={van.imageUrl}
        price={van.price}
        type={van.type}
        search={`?${searchParams.toString()}`}
        typeParam = {typeFilter}
        />))

    return (
        <div className="m-14">
            <h1 className="text-4xl font-extrabold mb-5">Explore our van options</h1>
            <div className="flex gap-10 mb-10">
                <button
                 onClick={()=> setSearchParams({type: "simple"})} 
                 className={`${typeFilter === "simple"? "bg-red-400 underline" :"bg-[#FFEAD0]"} rounded-lg px-6 py-1`}
                 >
                    Simple
                </button>
                <button
                 onClick={()=> setSearchParams({type: "luxury"})} 
                 className={`${typeFilter === "luxury"? "bg-[#161616] text-yellow-100 underline" :"bg-[#FFEAD0]"} rounded-lg px-6 py-1`}
                 >
                    Luxury
                </button>
                <button
                 onClick={()=> setSearchParams({type: "rugged"})} 
                 className={`${typeFilter === "rugged"? "bg-[#115E59] underline" :"bg-[#FFEAD0]"} rounded-lg px-6 py-1`}
                 >
                    Rugged
                </button>
                {typeFilter && <Link to="" className="underline bg-[#FFEAD0] rounded-lg px-6 py-1">Clear Filters</Link>}
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-10 justify-around">
                {
                    vansData.length? allVansComponents :
                    <h1 className="flex items-center h-[40vh] justify-center text-5xl text-blue-500 font-semibold">Loading ...</h1>
                }
            </div>
        </div>
    )
}