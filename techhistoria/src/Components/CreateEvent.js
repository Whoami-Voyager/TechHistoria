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
            <Link to="/">Home</Link>
            <form onSubmit={(e) => {
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
                <input name="image" placeholder="Image" type="text" value={formData.image} onChange={handleChange}></input>
                <input name="year" placeholder="Year" type="text" value={formData.year} onChange={handleChange}></input>
                <input name="title" placeholder="Title" type="text" value={formData.title} onChange={handleChange}></input>
                <input name="company" placeholder="Inventor or Company" type="text" value={formData.company} onChange={handleChange}></input>
                <input name="wikipedia" placeholder="Wikipedia" type="text" value={formData.wikipedia} onChange={handleChange}></input>
                <input name="details" placeholder="Paragraph" value={formData.details} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default CreateEvent
