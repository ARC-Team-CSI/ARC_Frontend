import React from 'react'
import './AcademicsBtn.css'

function AcademicsBtn(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Academics")}
        className='academics'>
            <a className='title'>Academics</a>
            <br/>
            <a className='description'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
    </div>
  )
}
export default AcademicsBtn;