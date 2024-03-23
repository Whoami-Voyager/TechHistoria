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
            <h1>TechHistoria</h1>
            <Search setSearchTimeLine={setSearchTimeLine} />
            {timeLineInfo}
            <Link to="/createhistory">Create History</Link>
        </>
    )
}

export default Timeline