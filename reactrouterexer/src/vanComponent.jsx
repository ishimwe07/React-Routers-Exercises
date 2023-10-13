import { Link } from "react-router-dom"

export default function VanComponent({imageUrl, name, price, id,type,search, typeParam}){
    return (
        <Link 
            to={`${id}`}
            state={{ search: search, type:typeParam}}
        >
            <img src={imageUrl} className="rounded" alt={`The Image of a van named ${name}.`} />
            <div className="flex justify-between">
               <h2 className='text-2xl font-bold'>{name}</h2>
               <span>
                    <p className="font-medium">${price}</p> 
                    <p>/day</p>
               </span>
            </div>
            <button                  
            className=
                {`px-5 py-1 ${type === "simple"? "bg-[#E17654]" : (type === "rugged"? "bg-[#115E59]" : "bg-[#161616]")} rounded-md text-white font-medium`}
                >{type}
            </button>
        </Link>
    )
}