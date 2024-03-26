import { Link } from "react-router-dom"
import TimeCard from "./TimeCard"
import Search from "./Search"

function Timeline({ timeLine, searchTimeline, setSearchTimeLine }) {

    // Filters through timeline for the Search function
    const filteredTimeLine = timeLine.filter((time) => {
        return time.title.toLowerCase().includes(searchTimeline.toLowerCase())
    })

    // Renders all the images, years, and titles
    const timeLineInfo = filteredTimeLine.map((time) => {
        return <TimeCard key={time.id} time={time} />
    })

    // The entire home Page
    return (
        <>
            <h1 className="text-9xl p-4 m-16 text-center font-IBM text-blue-400">TechHistoria</h1>
            <Search setSearchTimeLine={setSearchTimeLine} />
            {timeLineInfo}
            <Link className="border-2 border-gray-400 rounded-lg p-2 m-9 font-Inter hover:border-gray-900" to="/createhistory">Make History</Link>
        </>
    )
}

export default Timeline