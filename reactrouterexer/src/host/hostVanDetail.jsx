import { useEffect, useState } from "react";
import { useParams,NavLink, Link, Outlet } from "react-router-dom";

export default function HostVanDetails(){

    const params = useParams();
    const [Hostvan, setHostVan] = useState(null);

    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then((response) => response.json())
            .then(data => setHostVan(data.vans[0]));
    }, [params.id])

    const activelinkStyling = ({isActive})=> isActive? "font-bold text-[#161616] underline" : null;

    return (
        <>
             {Hostvan ? (
                <div className="ml-16">
                    <Link
                        to=".."
                        relative="path"
                        className="text-lg hover:underline"
                        >&larr; <span>Back to all vans</span></Link>

                    <div className="flex gap-5 items-center mt-5">
                        <img src={Hostvan.imageUrl} className="rounded h-72" alt={`The Image of a van named ${Hostvan.name}.`} />
                        <div>
                            <button className=
                                    {`px-7 py-1 mb-7 ${Hostvan.type === "simple"? "bg-[#E17654]" : (Hostvan.type === "rugged"? "bg-[#115E59]" : "bg-[#161616]")} rounded-md text-white font-medium`}
                            >
                                {Hostvan.type}
                            </button>
                            <h2 className='text-2xl font-bold'>{Hostvan.name}</h2>
                            <p className="font-medium">${Hostvan.price} /day</p> 
                        </div>
                    </div>
                    <div className="flex gap-10 my-10 text-2xl">
                        <NavLink to="." end className={activelinkStyling}>Details</NavLink>
                        <NavLink to="pricing" className={activelinkStyling}>Pricing</NavLink>
                        <NavLink to="photos" className={activelinkStyling}>Photos</NavLink>
                    </div>
                    
                    <Outlet context={{Hostvan}}/>
                </div>
            ) : <h2 className="h-96 flex items-center justify-center text-blue-200 text-5xl font-semibo">Loading...</h2>}
            
        </>
    )

}