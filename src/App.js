import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./app/pages/index";
import ProfessionalsBtn from "./ProfessionalBtn";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<ProfessionalsBtn />}></Route>
          
        </Routes>
        <ProfessionalsBtn/> 
      </BrowserRouter> 
       
    </div>
  );
}

export default App;
