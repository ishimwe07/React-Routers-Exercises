import { Link } from "react-router-dom"

export default function HostVanComponent({imageUrl, name, price, id}){
    return (
        <Link 
            to={`${id}`}
            className="flex gap-5 items-center"
        >
            <img src={imageUrl} className="rounded h-72" alt={`The Image of a van named ${name}.`} />
            <div>
               <h2 className='text-2xl font-bold'>{name}</h2>
                <p className="font-medium">${price} /day</p> 
            </div>
            
        </Link>
    )
}