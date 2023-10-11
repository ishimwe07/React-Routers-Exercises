import { useOutletContext } from "react-router-dom"
export default function HostVanPhotos() {

    const {Hostvan} = useOutletContext()

    return (
        <img src={Hostvan.imageUrl} alt={Hostvan.name} />
    )
}