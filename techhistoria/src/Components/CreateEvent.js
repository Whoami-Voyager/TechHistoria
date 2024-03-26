import { useState } from "react"
import { Link } from "react-router-dom"

function CreateEvent({ addHistory }) {
    // states to store the logged information
    const [formData, setFormData] = useState({
        image: "",
        year: "",
        title: "",
        company: "",
        wikipedia: "",
        details: []
    });

    // Updates the form data state when input values change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "details") {
            setFormData({
                ...formData,
                details: [...formData.details, value]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    // Renders all the forms and submit
    return (
        <>
            <Link to="/" className="border-2 border-gray-400 rounded-lg p-2 m-9 hover:border-gray-900">Home</Link>
            <form className="m-12 flex-auto" onSubmit={(e) => {
                e.preventDefault();
                addHistory(formData);
                // Reset form data after submitting
                setFormData({
                    image: "",
                    year: "",
                    title: "",
                    company: "",
                    wikipedia: "",
                    details: []
                });
            }}>
                <input className="border-2 border-black rounded-md" name="image" placeholder="Image" type="text" value={formData.image} onChange={handleChange}></input>
                <input className="border-2 border-black rounded-md" name="year" placeholder="Year" type="text" value={formData.year} onChange={handleChange}></input>
                <input className="border-2 border-black rounded-md" name="title" placeholder="Title" type="text" value={formData.title} onChange={handleChange}></input>
                <input className="border-2 border-black rounded-md" name="company" placeholder="Inventor or Company" type="text" value={formData.company} onChange={handleChange}></input>
                <input className="border-2 border-black rounded-md" name="wikipedia" placeholder="Wikipedia" type="text" value={formData.wikipedia} onChange={handleChange}></input>
                <input className="border-2 border-black rounded-md" name="details" placeholder="Paragraph" value={formData.details} onChange={handleChange}></input>
                <button className="border-2 border-gray-400 rounded-md p-2 m-8 hover:border-black" type="submit">Submit</button>
            </form>
            <select>
                <option>An option</option>
                <option>Another Option</option>
                <option>Yet another option</option>
            </select>
        </>
    )
}

export default CreateEvent
