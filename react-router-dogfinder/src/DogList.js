//Home page
//Displays all dogs
import {Link} from "react-router-dom";

function DogList({dogs}) {
    const dogInfo = dogs.map(dog =>{
        return(
            <div className="dogBlock">
                <h3>{dog.name}</h3>
                <p>{dog.age} years old</p>
                <Link to={`/dogs/${dog.src}`}>Learn More</Link>
            </div>
        )
    })

    return(
        <>
            <h1>These are our dogs. Click on one to learn more.</h1>
            {dogInfo}
        </>
    )
}

export default DogList;