import { useState, useEffect } from "react"
import TimeCard from "./TimeCard"
import Search from "./Search"
import CreateEvent from "./CreateEvent"

function Timeline() {
    const [timeLine, setTimeLine] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/history")
            .then(r => r.json())
            .then(data => {
                setTimeLine(data)
            })
    }, [])

    const timeLineInfo = timeLine.map((time) => {
        return <TimeCard key={time.id} time={time} />
    })

    return (
        <>
            <Search/>
            {timeLineInfo}
            <CreateEvent/>
        </>
    )
}

export default Timeline