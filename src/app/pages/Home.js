import React from 'react'
import AcademicsBtn from '../components/AcademicsBtn'
import CareerBtn from '../components/CareerBtn'
import './Home.css'
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {
  return (
    <>
        <ResponsiveAppBar/>
      <div><AcademicsBtn /></div>
    <div><CareerBtn /></div>
    </>
  )
}

export default Home;