import { Link } from "react-router-dom";

function TimeCard({ time }) {
    return (
        <div>
            <h1>{time.year}</h1>
            <img src={time.image} alt={`Image for ${time.title}`} />
            <Link to={`/history/${time.id}`}>Details</Link>
        </div>
    );
}

export default TimeCard;
