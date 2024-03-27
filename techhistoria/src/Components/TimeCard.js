import { Link } from "react-router-dom";

function TimeCard({ time, handleDetailLinkClick }) {
    // Renders all the images, years, titles, and a Link to the details of each post
    return (
        <div className="flex flex-col font-Inter border-b-4 rounded-8 p-8 mb-8 xl:m-20 xl:flex-row">
            <img src={time.image} alt={`${time.title}`} className="m-5 xl:h-3/5 xl:w-3/5 object-cover" />
            <div className="flex flex-col justify-center xl:ml-5">
                <h1 className="text-4xl m-4 text-center xl:text-7xl xl:pt-4 xl:mb-4 xl:mb-28">{time.year}</h1>
                <h3 className="text-2xl m-4 text-center xl:text-4xl xl:p-5 xl:mb-4">{time.title}</h3>
                <Link to={`/history/${time.id}`} onClick={handleDetailLinkClick} className="button xl:button-mobile w-20">Details</Link>
            </div>
        </div>
    );
}

export default TimeCard;
