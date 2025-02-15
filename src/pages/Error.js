import { Link } from "react-router-dom"
export default function Error(){
    return(
        <section className="flex flex-col items-center justify-center h-screen text-center">
            <h1>Page Not Found</h1>
            <Link to="/" className="btn">&larr; Back to Home Page</Link>
        </section>
    )
}