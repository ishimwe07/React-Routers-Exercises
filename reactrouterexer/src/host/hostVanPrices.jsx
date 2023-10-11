import { useOutletContext } from "react-router-dom"

export default function HostVanPrice() {

    const {Hostvan} = useOutletContext()
    

    return (
        <h2 className="text-3xl font-bold pb-3">$ {Hostvan.price} /day</h2>
    )
}