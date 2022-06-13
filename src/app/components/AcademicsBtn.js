import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/AcademicsBtn.css'
function AcademicsBtn(){

  return (
    <div>
        <Link to="/Academics">
        <button className='academics'>
            <p className='title'>Academics</p>
            <br/>
            <p className='description'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </p>
        </button>
        </Link>
    </div>
  )
}
export default AcademicsBtn;
