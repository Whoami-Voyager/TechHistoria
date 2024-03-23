import { Link } from "react-router-dom";

function TimeCard({ time }) {
    // Renders all the images, years, titles, and a Link to the details of each post
    return (
        <div>
            <h1>{time.year}</h1>
            <h3>{time.title}</h3>
            <img src={time.image} alt={`Image for ${time.title}`} />
            <Link to={`/history/${time.id}`}>Details</Link>
        </div>
    );
}

export default TimeCard;
