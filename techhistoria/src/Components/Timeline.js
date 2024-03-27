import { Link } from "react-router-dom"
import TimeCard from "./TimeCard"
import Search from "./Search"
import DecadeFilter from "./DecadeFilter"

function Timeline({ timeLine, searchTimeline, setSearchTimeLine, decade, setDecade }) {

    // Filters through timeline for the Search function
    const filteredTimeLine = timeLine.filter((time) => {
        if (decade === "All") {
            return time.title.toLowerCase().includes(searchTimeline.toLowerCase())
        } else {
            const decadeNum = Number(decade)
            const decadeFilter = (decadeNum + 9)
            return time.title.toLowerCase().includes(searchTimeline.toLowerCase()) && time.year >= decadeNum && time.year <= decadeFilter
        }
    })

    // Renders all the images, years, and titles
    const timeLineInfo = filteredTimeLine.map((time) => {
        return <TimeCard key={time.id} time={time} />
    })

    // The entire home Page
    return (
        <>
            <h1 className="font-IBM text-blue-400 sm:text-5xl m-5 md:text-7xl lg:text-9xl">TechHistoria</h1>
            <Search setSearchTimeLine={setSearchTimeLine} />
            <DecadeFilter setDecade={setDecade} />
            {timeLineInfo}
            <Link className="button" to="/createhistory">Make History</Link>
        </>
    )
}

export default Timeline