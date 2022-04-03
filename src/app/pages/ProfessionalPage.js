import React from 'react'
import InternshipHandbookBtn from '../components/InternshipHandbookBtn';
import ResumeBtn from '../components/ResumeBtn';
import Internships from '../components/Internships';
import Jobs from '../components/Jobs';
import Events from '../components/Events';


const ProfessionalPage = () => {
  return (
    <div>
    <ResumeBtn />
    <InternshipHandbookBtn/>
    <Internships/>
    <Jobs/>
    <Events />


  </div>

  )
}

export default ProfessionalPage;