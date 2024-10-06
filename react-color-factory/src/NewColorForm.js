
/**New Color Form
 * As a user, I can click on a button to show a form that will let me 
 * add a new color.
 * 
 * /colors/new
 * 
 * takes function as prop to add new color to app
 */
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({addColor}) {
    const initState = {
        cname: "",
        color: "#000000",
    }
    const [formData, setFormData] = useState(initState);
    const navigate = useNavigate();

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();
        addColor(formData.cname, formData.color);
        setFormData(initState);
        navigate("/colors")
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="cname">Color Name{":  "}</label>
            <input id="cname" 
                type="text"
                placeholder="Enter Color Name"
                name="cname"
                value={formData.cname}
                onChange={handleChange}
                required
            />
            <br/>
            <label htmlFor="color">Color{":  "}</label>
            <input id="color" 
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <br/>
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;