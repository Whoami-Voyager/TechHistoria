import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function TimeDetails() {
    // the state that stores all the Detail information
    const [detail, setDetail] = useState([])
    // this parameter grabs the selected Id to render the correct information
    const detailParam = useParams()
    const detailId = detailParam.id

    // Fetches the detail information on load
    useEffect(() => {
        fetch(`http://localhost:4000/history/${detailId}`)
            .then(r => r.json())
            .then(data => {
                setDetail(data)
            })
    }, [])

    // Renders the paragraph
    const paragraphs = detail.details?.map((detail, index) => {
        return <p key={index} className="m-5">{detail}</p>
    })

    // renders all the details of the event
    return (
        <>
            <Link to="/" className="bg-blue-700 text-4xl my-3 rounded-md">Home</Link>
            <h1 className="text-7xl my-20 text-center">{detail.title}</h1>
            <h2 className="float-right text-5xl m-7">{detail.company}</h2>
            <img src={detail.image} className="float-left mx-12 h-3/5 w-3/5" />
            {paragraphs}
            <a href={detail.wikipedia} target="_blank">Wikipedia</a>
        </>
    )
}

export default TimeDetails