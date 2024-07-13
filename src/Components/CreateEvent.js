import { useState } from "react";
import { Link } from "react-router-dom";

function CreateEvent({ addHistory }) {
    // states to store the logged information
    const [image, setImage] = useState("");
    const [year, setYear] = useState("");
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [wikipedia, setWikipedia] = useState("");
    const [details, setDetails] = useState([]);

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            image: image,
            year: year,
            title: title,
            company: company,
            wikipedia: wikipedia,
            details: [details]
        };
        // Submit form data
        addHistory(formData);
        // Reset form inputs after submitting
        setImage("");
        setYear("");
        setTitle("");
        setCompany("");
        setWikipedia("");
        setDetails([]);
    };

    // Renders all the forms and submit
    return (
        <>
            <div className="my-6">
                <Link to="/TechHistoria" className="button">⬅ Home</Link>
            </div>
            <h1 className="m-10 text-2xl font-Inter">Note: After deploying this website, I have decided not to make this feature functional since it was a requirement for the project but no longer necessary</h1>
            <form className="m-12 flex-auto font-Inter" onSubmit={handleSubmit}>
                <h1>Image</h1>
                <input className="border-2 border-black rounded-md" name="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <h1>Year</h1>
                <input className="border-2 border-black rounded-md" name="year" type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                <h1>Title</h1>
                <input className="border-2 border-black rounded-md" name="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <h1>Company</h1>
                <input className="border-2 border-black rounded-md" name="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                <h1>Wikipedia</h1>
                <input className="border-2 border-black rounded-md" name="wikipedia" type="text" value={wikipedia} onChange={(e) => setWikipedia(e.target.value)} />
                <h1>Paragraph</h1>
                <input className="border-2 border-black rounded-md" name="details" type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
                {/* Too lazy to use tailwind so used an empty div to seperate the button and inputs */}
                <div></div>
                <button className="button" type="submit">Submit</button>
            </form>
        </>
    );
}

export default CreateEvent;
