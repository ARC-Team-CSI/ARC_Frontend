import React from 'react'
import InternshipHandbookBtn from '../components/InternshipHandbookBtn';
import ResumeBtn from '../components/ResumeBtn';
import Internships from '../components/Internships';
import Jobs from '../components/Jobs';
import Events from '../components/Events';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const ProfessionalPage = () => {
  return (
    <div>
      <ResponsiveAppBar/>
    <ResumeBtn />
    <InternshipHandbookBtn/>
    <Internships/>
    <Jobs/>
    <Events />


  </div>

  )
}

export default ProfessionalPage;