import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TimeCard from "./TimeCard"

function TimeDetails() {
    // the state that stores all the Detail information
    const [detail, setDetail] = useState([])
    // this parameter grabs the selected Id to render the correct information
    const detailParam = useParams()
    const detailId = detailParam.id
    // sets the state for associated historical events
    const [history, setHistory] = useState([])

    // Fetches the detail information on load
    useEffect(() => {
        fetch(`http://localhost:4000/history/${detailId}`)
            .then(r => r.json())
            .then(data => {
                setDetail(data)
            })
    }, [detailId])

    // Is used for grabbing all the cards at the bottom of detail
    useEffect(() => {
        detail.associatedcardid?.map((id) => {
            fetch(`http://localhost:4000/history/${id}`)
                .then(r => r.json())
                .then(data => {
                    setHistory(old => [...old, data])
                })
        })
    }, [detail])

    // Scrolls to the top of the window when detail is clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // resets the cards at the bottom of details and scrolls
    const handleDetailLinkClick = () => {
        setHistory([]);
        scrollToTop();
    };

    // Renders the associated events at the bottom of details
    const historyDetail = history.map((history, index) => {
        return <TimeCard time={history} key={index} handleDetailLinkClick={handleDetailLinkClick}/>
    })

    // Renders the paragraph
    const paragraphs = detail.details?.map((detail, index) => {
        return <p key={index} className="p-2 m-5 text-2xl font-Inter">{detail}</p>
    })

    // renders all the details of the event
    return (
        <>
            <Link to="/" className="button">Home</Link>
            <h1 className="text-7xl my-20 text-center">{detail.title}</h1>
            <div className="flex flex-row m-5 font-Inter">
                <img alt="" src={detail.image} className="m-5 h-3/5 w-3/5" />
                <div className="flex flex-col items-end w-full">
                    <h3 className="text-7xl p-2 m-12">{detail.year}</h3>
                    <h2 className="text-5xl p-3 m-8">{detail.company}</h2>
                </div>
            </div>
            {paragraphs}
            <a href={detail.wikipedia} target="_blank" rel="noreferrer" className="border-2 border-gray-400 rounded-lg p-2 m-6 text-center font-Inter shadow-lg hover:border-gray-900">Wikipedia</a>
            <h2 className="m-36 text-center p-2 text-3xl font-Inter">Associated Historical events:</h2>
            {historyDetail}
        </>
    )
}

export default TimeDetails