/**ColorPage
 * 
 * As a user, I can click on one of the colors in my colors list 
 * and get taken to a page where I can see that color in all its glory.
 * 
 * /color/:color
 * 
 * Takes lists of colors as prop
 */

import { Link, useParams, useNavigate } from "react-router-dom";
import {useEffect} from 'react';

function ColorPage({colors}) {
    const navigate = useNavigate();
    
    
    const params = useParams();
    const color = colors.filter(c => params.color === c.name)[0];
    useEffect(()=>{
        if (color === undefined) {
            navigate("/colors");
        }
    }, [color, navigate]);

    if(!color) return null;
    
    return (
        <div style={{backgroundColor: color.color}}>
            <h1>Viewing {color.name} "{color.color}"</h1>
            <Link to="/colors"><button>Go Back</button></Link>
        </div>
        
    )


}

export default ColorPage;