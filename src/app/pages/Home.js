import React from 'react'
import AcademicsBtn from '../components/AcademicsBtn'
import ProfessionalBtn from '../components/ProfessionalBtn'
import './Home.css'
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function Home() {
  return (
    
    <><div><AcademicsBtn /></div>
     <ResponsiveAppBar/>
    <div><ProfessionalBtn /></div></>
  )
}

export default Home;