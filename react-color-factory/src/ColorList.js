/**
 * ColorList
 * 
 * Displays all available colors
 * 
 * /colors
 */
import {Link} from "react-router-dom";
function ColorList({colors}) {
    const colorLis = colors.map((color, index) => 
    <li key={"c"+index}>
        <Link to={`/colors/${color.name}`}>{color.name}</Link>
    </li>
    );
    
    return(
        <div>
            <Link to="/colors/new">Add a color</Link>
            <ul>{colorLis}</ul>

        </div>
    )
}

export default ColorList;