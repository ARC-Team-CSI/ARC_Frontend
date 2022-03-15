import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './app/pages/Home'
import AcademicsPage from "./app/pages/AcademicsPage";
import SecYearTipPage from "./app/pages/SecYearTipPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Academics" element={<AcademicsPage/>}></Route>
          <Route path="/Academics/2ndYearTip" element={SecYearTipPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
