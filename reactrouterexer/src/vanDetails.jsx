import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetails(){

    const params = useParams();
    const [van, setVan] = useState(null);

    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then((response) => response.json())
            .then(data => setVan(data.vans));
    }, [params.id])



    return (
        <>
             {van ? (
                <div className="grid items-center xl:justify-items-center gap-5 m-20 my-5">
                    <img src={van.imageUrl} className="rounded h-[70vh]" alt={`The Image of a van named ${van.name}.`} />
                    <button                  className=
                        {`px-5 py-1 xl:w-1/4 ${van.type === "simple"? "bg-[#E17654]" : (van.type === "rugged"? "bg-[#115E59]" : "bg-[#161616]")} rounded-md text-white font-medium`}
                        >{van.type}
                    </button>
                    <h2 className='text-3xl font-extrabold'>{van.name}</h2>
                        <p className="font-medium">${van.price} /day</p> 
                    <p className="xl:w-1/2">
                        {van.description}
                    </p>
                    <button className="text-white font-extrabold bg-[#FF8C38] rounded-md px-20 py-4 xl:w-1/4">
                        Rent This Van
                    </button>
                </div>
            ) : <h2 className="h-96 flex items-center justify-center text-blue-200 text-5xl font-semibo">Loading...</h2>}
            
        </>
    )

}