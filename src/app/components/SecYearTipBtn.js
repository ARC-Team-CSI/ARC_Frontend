import React from 'react'
import academicBackground from './academicBackground.jpg'
import "./SecYearTipBtn.css"

const SecYearTipBtn = () => {
  return (
    <div style={{ objectFit: "cover", width: "100vw", height: "100vh", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${academicBackground})` }}>
      <div

        className='rectangle'>
        <button
          className='First'
          onClick={(event) => (window.location.href = "/Academics/1stYearTip")}>1st Year Tips</button>
        <button
          className='Second'
          onClick={(event) => (window.location.href = "/Academics/2ndYearTip")}>2nd Year Tips</button>
      </div>
    </div>
  )
}

export default SecYearTipBtn