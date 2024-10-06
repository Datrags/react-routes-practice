import { useParams } from "react-router-dom";

//DogDetails - Shows details about a certain dog
function DogDetails({ dogs}) {
    const params = useParams();
    
    const info = dogs.filter(dog => params.name === dog.src);
    const {name, age, facts} = info[0];
    const factList = facts.map(fact => <li>{fact}</li>)
    return(
        <div>
            <h1>{name}</h1>
            <ul>
                <li>{age}</li>
                <li>
                    <h3>Facts about {name}</h3>
                    <ul> 
                        {factList} 
                    </ul>
                </li>

            </ul>
        </div>
    )
}

export default DogDetails;