import { Link } from "react-router-dom"
import TimeCard from "./TimeCard"
import Search from "./Search"
import DecadeFilter from "./DecadeFilter"

function Timeline({ timeLine, searchTimeLine, setSearchTimeLine, decade, setDecade }) {

    // Filters through timeline for the Search function and decade filter
    const filteredTimeLine = timeLine.filter((time) => {
        const decadeNum = Number(decade)
        const decadeFilter = (decadeNum + 9)
        if (decade === "All") {
            return time.title.toLowerCase().includes(searchTimeLine.toLowerCase())
        } else {
            return time.title.toLowerCase().includes(searchTimeLine.toLowerCase()) && time.year >= decadeNum && time.year <= decadeFilter
        }
    })

    // Renders all the images, years, and titles
    const timeLineInfo = filteredTimeLine.map((time) => {
        return <TimeCard key={time.id} time={time} />
    })

    // The entire home Page
    return (
        <>
            <h1 className="font-IBM text-blue-400 text-center text-3xl my-8 pt-10 sm:text-5xl lg:text-6xl xl:text-9xl sm:my-12 md:my-12 lg:my-28 ">TechHistoria</h1>
            <Search setSearchTimeLine={setSearchTimeLine} />
            <DecadeFilter setDecade={setDecade} />
            {timeLineInfo}
            <div className="my-12 xl:m-16">
                <Link className="button mb-20" to="/createhistory">Make History 📜</Link>
            </div>
        </>
    )
}

export default Timeline