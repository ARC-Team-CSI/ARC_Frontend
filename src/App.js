import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './app/pages/Home'
import AcademicsPage from "./app/pages/AcademicsPage";
import ProfessionalPage from "./app/pages/ProfessionalPage";
import FirstYearTipPage from "./app/pages/FirstYearTipPage";
import SecYearTipPage from "./app/pages/SecYearTipPage";
import StudentTips from "./app/pages/StudentTips"
import PathwayChecklistPage from "./app/pages/PathwayChecklistPage";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Academics" element={<AcademicsPage />}></Route>
          <Route path="/Professional" element={<ProfessionalPage />}></Route>
          <Route path="/Academics/1stYearTip" element={FirstYearTipPage}></Route>
          <Route path="/Academics/2ndYearTip" element={SecYearTipPage}></Route>
          <Route path="/PathwayChecklistPage" element={<PathwayChecklistPage />} ></Route>
          <Route path="/StudentTips" element={<StudentTips/>}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
