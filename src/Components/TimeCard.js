import { Link } from "react-router-dom";

function TimeCard({ time }) {
    // Renders all the images, years, titles, and a Link to the details of each post
    return (
        <div className="flex flex-col font-Inter border-b-4 rounded-8 p-8 xl:m-20 xl:flex-row">
            <img src={time.image} alt={`${time.title}`} className="m-5 xl:h-3/5 xl:w-3/5 2xl:mr-32 object-cover" />
            <div className="flex flex-col justify-center xl:ml-12">
                <h1 className="text-4xl m-4 text-center xl:text-7xl xl:pt-4 xl:mb-4 2xl:m-20">{time.year}</h1>
                <h3 className="text-2xl m-4 text-center xl:text-4xl xl:p-5 xl:mb-4 2xl:m-20">{time.title}</h3>
                <Link to={`/history/${time.id}`} className="button w-20">Details</Link>
            </div>
        </div>
    );
}

export default TimeCard;
