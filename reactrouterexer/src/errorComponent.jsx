import { Link, useRouteError } from "react-router-dom";

export default function ErrorComponent(){

    const error = useRouteError()

    return(
        <div className="h-[78vh] flex items-center flex-col text-center justify-center gap-5">
            <h1 className="xl:w-[3/4] text-6xl font-bold">
                Sorry, there was an error. <br/>
                Damn... &#x1F60A;!
            </h1>
            <h2>Error message: <span>{error.message}</span></h2>
            {error.status && <h2>{error.statusText} <span>{error.status}</span></h2>}
            <Link to="/" className="px-28 py-4 rounded-md bg-slate-900 text-yellow-100 font-semibold text-2xl">
                But You Can Return Home
            </Link>
        </div>
    )
}