import { Link } from "react-router-dom";

function TimeCard({ time }) {
    // Renders all the images, years, titles, and a Link to the details of each post
    return (
        <div className="flex my-12 border-2 rounded-8 font-Inter">
            <img src={time.image} alt={`Image for ${time.title}`} className="h-3/5 w-3/5 object-cover m-8" />
            <div className="flex flex-col ml-5">
                <h1 className="text-7xl pt-12 mb-36">{time.year}</h1>
                <h3 className="text-4xl p-5">{time.title}</h3>
                <Link to={`/history/${time.id}`} className="border-2 border-gray-400 w-20 rounded-lg p-2 m-9 hover:border-gray-900">Details</Link>
            </div>
        </div>
    );
}

export default TimeCard;
