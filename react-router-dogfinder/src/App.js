import './App.css';
import DogDetails from './DogDetails';
import DogList from './DogList';
import Nav from './Nav';
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  const defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: 'whiskey',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: 'duke',
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: 'perry',
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: 'tubby',
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  let srcs = defaultProps.dogs.map( dog => {
    return dog.src;
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Nav names={srcs}/>
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={defaultProps.dogs}/>}></Route>
        <Route path="/dogs/:name" element={<DogDetails dogs={defaultProps.dogs}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
