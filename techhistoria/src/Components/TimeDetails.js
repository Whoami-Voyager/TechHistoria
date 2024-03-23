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
        return <p key={index} className="text-balance">{detail}</p>
    })

    // renders all the details of the event
    return (
        <>
            <Link to="/">Home</Link>
            <h1 className="text-7xl">{detail.title}</h1>
            <h2>{detail.company}</h2>
            <img src={detail.image} className="float-left"/>
            {paragraphs}
            <a href={detail.wikipedia} target="_blank">Wikipedia</a>
        </>
    )
}

export default TimeDetails