import { Link } from "react-router-dom"

function ErrorPage() {
    return (
        <>
            <div className="my-6">
                <Link to="/TechHistoria" className="button">⬅ Home</Link>
            </div>
            <h1 className="text-5xl m-6 text-center font-Inter">404 not found</h1>
            <h1 className="text-3xl m-10 text-center font-Inter">Looks like this page doesn't exist. So sad. Anyway here's a cool youtube video:</h1>
            <iframe
                width="966"
                height="543"
                className="mx-auto"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" // Add autoplay parameter
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            />
        </>
    )
}

export default ErrorPage