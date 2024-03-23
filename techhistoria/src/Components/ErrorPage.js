import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <Link to="/">Back Home</Link>
            <h1>Looks like this page doesn't exist. So sad. Anyway here's a cool youtube video:</h1>
            <iframe className="aspect-auto" width="1440" height="900" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </>
    )
}

export default ErrorPage