import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import VanComponent from "./vanComponent"
import "../server"

export default function Vans(){

    const [vansData, setvansData] = useState([]);

    useEffect(()=> {
      fetch("/api/vans")
          .then(response => response.json())
          .then((data)=>setvansData(data.vans))
    }, []);
  
  console.log(vansData)
    const allVansComponents = vansData.map(van => (<VanComponent 
        key={van.id}
        id={van.id}
        name={van.name} 
        description={van.description}
        imageUrl={van.imageUrl}
        price={van.price}
        type={van.type}
        />))

    return (
        <div className="m-14">
            <h1 className="text-4xl font-extrabold mb-5">Explore our van options</h1>
            <div className="flex gap-10 mb-10">
                <Link to="/thevan" className="bg-[#FFEAD0] rounded-lg px-6 py-1">Simple</Link>
                <Link to="/thevan" className="bg-[#FFEAD0] rounded-lg px-6 py-1">Luxury</Link>
                <Link to="/thevan" className="bg-[#FFEAD0] rounded-lg px-6 py-1">Rugged</Link>
                <Link to="/thevan" className="underline bg-[#FFEAD0] rounded-lg px-6 py-1">Clear Filters</Link>
            </div>
            <div className="grid xl:grid-cols-3 grid-cols-2 gap-10 justify-around">
            {allVansComponents}
            </div>
        </div>
    )
}