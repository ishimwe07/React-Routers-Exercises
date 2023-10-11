import { useOutletContext } from "react-router-dom"
export default function HostVanInfo() {
    const {Hostvan:hostVanData} = useOutletContext()

    return (
        <section className="w-3/4 xl:w-1/2 mb-5">
            <h4><span className="font-bold text-lg">Name</span>: {hostVanData.name}</h4>
            <h4><span className="font-bold text-lg">Category</span>: {hostVanData.type}</h4>
            <h4><span className="font-bold text-lg">Description</span>: {hostVanData.description}</h4>
            <h4><span className="font-bold text-lg">Visibility</span>: public</h4>
        </section>
    )
}