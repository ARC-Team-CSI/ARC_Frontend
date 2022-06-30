import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './app/pages/Home'
import AcademicsPage from "./app/pages/AcademicsPage";
import CareerPage from "./app/pages/CareerPage";
import FirstYearTipPage from "./app/pages/FirstYearTipPage";
import SecYearTipPage from "./app/pages/SecYearTipPage";
import StudentTips from "./app/pages/StudentTips"
import PathwayChecklistPage from "./app/pages/PathwayChecklistPage";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import Resume from "./app/pages/Resume";
import Degree from "./app/pages/Degree";

function App() {
  return (
    <div className="App">
        <a className="float" target="_blank">
            <i className="fa fa-whatsapp my-float"> Test Site</i>
        </a>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Academics" element={<AcademicsPage />}></Route>
            <Route path="/Career" element={<CareerPage />}></Route>
            <Route path="/Academics/1stYearTip" element={FirstYearTipPage}></Route>
            <Route path="/Academics/2ndYearTip" element={SecYearTipPage}></Route>
            <Route path="/PathwayChecklistPage" element={<PathwayChecklistPage />} ></Route>
            <Route path="/StudentTips" element={<StudentTips/>}></Route>
            <Route path="/Resume" element={<Resume/>}></Route>
            <Route path="/Degree" element={<Degree/>}></Route>
          </Routes>

      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
