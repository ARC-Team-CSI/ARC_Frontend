import React from 'react'
import AcademicsBtn from '../components/AcademicsBtn'
import ProfessionalBtn from '../components/ProfessionalBtn'
import './Home.css'
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {
  return (
    <>
        <ResponsiveAppBar/>
      <div><AcademicsBtn /></div>
    <div><ProfessionalBtn /></div>
    </>
  )
}

export default Home;