import { useState, useEffect } from "react";
import HostVanComponent from "./hostVanComponent";
import "../../server"
export default function Vans(){

    const [hostVansData, setHostvansData] = useState([]);

    useEffect(()=> {
      fetch("/api/host/vans")
          .then(response => response.json())
          .then((data)=>setHostvansData(data.vans))
    }, []);
  
    const allHostVansComponents = hostVansData.map(van => (<HostVanComponent 
        key={van.id}
        id={van.id}
        name={van.name} 
        description={van.description}
        imageUrl={van.imageUrl}
        price={van.price}
        />))

    return (
        <div className="m-14">
            <h1 className="text-5xl font-bold my-5 -ml-8">Your listed vans</h1>

            <div className="flex flex-col gap-10 ">
                {
                    allHostVansComponents.length? allHostVansComponents : 
                    <h1 className="h-[40vh] flex items-center justify-center text-5xl text-blue-500 font-semibold">Loading ...</h1>
                }
            </div>
        </div>
    )
}