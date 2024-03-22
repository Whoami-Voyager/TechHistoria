import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <Link to="/">Back Home</Link>
            <h1>Looks like this page doesn't exist. So sad. Anyway here's a cool youtube video:</h1>
            <iframe width="1920" height="1080" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </>
    )
}

export default ErrorPage