import { Link } from "react-router-dom";

function TimeCard({ time, handleDetailLinkClick }) {
    // Renders all the images, years, titles, and a Link to the details of each post
    return (
        <div className="flex my-12 border-b-4 rounded-8 font-Inter">
            <img src={time.image} alt={`${time.title}`} className="h-3/5 w-3/5 object-cover m-8" />
            <div className="flex flex-col ml-5">
                <h1 className="text-7xl pt-12 mb-28">{time.year}</h1>
                <h3 className="text-4xl p-5 mb-6">{time.title}</h3>
                <Link to={`/history/${time.id}`} onClick={handleDetailLinkClick} className="button xl:w-20">Details</Link>
            </div>
        </div>
    );
}

export default TimeCard;
