import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import TimeCard from "./TimeCard"

function TimeDetails({ setSearchTimeLine, setDecade }) {
    // the state that stores all the Detail information
    const [detail, setDetail] = useState([])
    // this parameter grabs the selected Id to render the correct information
    const detailParam = useParams()
    const detailId = detailParam.id
    // sets the state for associated historical events
    const [history, setHistory] = useState([])

    // Fetches the detail information on load
    useEffect(() => {
        fetch(`https://api.jsonbin.io/v3/b/6605e015ad19ca34f8515dee`)
            .then(r => r.json())
            .then(data => {
                setDetail(data.record.history[detailId])
            })
    }, [detailId])

    // Is used for grabbing all the cards at the bottom of detail
    useEffect(() => {
        detail.associatedcardid?.map((id) => {
            fetch(`https://api.jsonbin.io/v3/b/6605e015ad19ca34f8515dee`)
                .then(r => r.json())
                .then(data => {
                    setHistory(old => [...old, data.record.history[id]])
                })
        })
    }, [detail])

    // Resets search state when component renders
    useEffect(() => {
        setDecade("All")
        setSearchTimeLine("")
    }, [])

    // Scrolls to the top of the window when detail is clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    // Scrolls when details are initially loaded
    scrollToTop()

    // resets the cards at the bottom of details and scrolls
    const handleDetailLinkClick = () => {
        setHistory([]);
        scrollToTop();
    };

    // Renders the associated events at the bottom of details
    const historyDetail = history.map((history, index) => {
        return <TimeCard time={history} key={index} handleDetailLinkClick={handleDetailLinkClick} />
    })

    // Renders the paragraph
    const paragraphs = detail.details?.map((detail, index) => {
        return <p key={index} className="p-2 m-5 text-xl font-Inter">{detail}</p>
    })

    // renders all the details of the event
    return (
        <>
            <h1 className="font-IBM text-blue-400 text-center text-3xl my-12 pb-10 sm:text-5xl lg:text-6xl xl:text-9xl sm:my-12 md:my-12 lg:my-28 ">TechHistoria</h1>
            <div className="my-6">
                <Link to="/" className="button">⬅ Home</Link>
            </div>
            <h1 className="my-20 text-4xl text-center xl:text-7xl">{detail.title}</h1>
            <div className="flex flex-col m-5 font-Inter xl:flex-row">
                <img alt="" src={detail.image} className="m-5 xl:h-3/5 xl:w-3/5" />
                <div className="flex flex-col xl:items-end w-full">
                    <h3 className="text-4xl p-2 text-center xl:text-7xl xl:p-2 xl:m-12">{detail.year}</h3>
                    <h2 className="text-4xl p-2 text-center xl:text-5xl xl:p-3 xl:m-8">{detail.company}</h2>
                </div>
            </div>
            {paragraphs}
            <a href={detail.wikipedia} target="_blank" rel="noreferrer" className="button w-32 flex items-center justify-center">
                Wikipedia
                <img className="h-6 w-6 ml-2" src="https://www.freepnglogos.com/uploads/wikipedia-logo-png/file-wikipedia-svg-logo-free-download-4.png" alt="Wikipedia" />
            </a>
            <h2 className="m-12 text-center p-2 text-3xl font-Inter xl:m-36">Associated Historical events:</h2>
            {historyDetail}
        </>
    )
}

export default TimeDetails