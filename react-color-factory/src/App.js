import './App.css';
import React, {useState} from "react"
import ColorList from './ColorList';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import NewColorForm from './NewColorForm';
import ColorPage from './ColorPage';
function App() {
  const [myColors, setmyColors] = useState([{name: "orange", color: "orange"}])
  
  const addColor = (name, color) => {
    let newColor = { name, color};
    setmyColors( colors => [...colors, newColor]);
  }
  
  // const colorLis = myColors.map(color => <li>{color}</li>)

  return (
    <div className="App">
      <h1>Welcome to the color factory</h1>
      
      <BrowserRouter>
      
        <Routes>
          <Route path="/colors" element={<ColorList colors={myColors}/>} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>} />
          <Route path="/colors/:color" element={<ColorPage colors={myColors}/>} />
          <Route path="*" element={<Navigate to="/colors" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
