import { Link } from "react-router-dom";

export default function NotFoundComponent(){
    return(
        <div className="h-[78vh] flex items-center flex-col text-center justify-center gap-5">
            <h1 className="xl:w-[3/4] text-6xl font-bold">
                Sorry, the page you were looking for was not found.
            </h1>
            <Link to="/" className="px-28 py-4 rounded-md bg-slate-900 text-yellow-100 font-semibold text-2xl">
                Return to Home
            </Link>
        </div>
    )
}