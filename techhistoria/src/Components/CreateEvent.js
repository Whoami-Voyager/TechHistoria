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
                <Link to="/" className="button">⬅️ Home</Link>
            </div>
            <form className="m-12 flex-auto" onSubmit={handleSubmit}>
                <input className="border-2 border-black rounded-md" name="image" placeholder="Image" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <input className="border-2 border-black rounded-md" name="year" placeholder="Year" type="text" value={year} onChange={(e) => setYear(e.target.value)}></input>
                <input className="border-2 border-black rounded-md" name="title" placeholder="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input className="border-2 border-black rounded-md" name="company" placeholder="Inventor or Company" type="text" value={company} onChange={(e) => setCompany(e.target.value)}></input>
                <input className="border-2 border-black rounded-md" name="wikipedia" placeholder="Wikipedia" type="text" value={wikipedia} onChange={(e) => setWikipedia(e.target.value)}></input>
                <input className="border-2 border-black rounded-md" name="details" placeholder="Paragraph" type="text" value={details} onChange={(e) => setDetails(e.target.value)} />
                <button className="button" type="submit">Submit</button>
            </form>
        </>
    );
}

export default CreateEvent;
