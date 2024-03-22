import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
function TimeDetails() {
    const [detail, setDetail] = useState([])
    const detailParam = useParams()
    const detailId = detailParam.id

    useEffect(() => {
        fetch(`http://localhost:4000/history/${detailId}`)
            .then(r => r.json())
            .then(data => {
                setDetail(data)
            })
    }, [])

    const paragraphs = detail.details?.map((detail, index) => {
        return <p key={index}>{detail}</p>
    })

    return (
        <>
            <Link to="/">Home</Link>
            <h1>{detail.title}</h1>
            <h2>{detail.company}</h2>
            <img src={detail.image} />
            {paragraphs}
        </>
    )
}

export default TimeDetails