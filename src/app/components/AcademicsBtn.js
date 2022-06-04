import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/AcademicsBtn.css'
function AcademicsBtn(){

  return (
    <div>
        <Link to="/Academics">
        <button className='academics'>
            <a className='title'>Academics</a>
            <br/>
            <a className='description'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
        </Link>
    </div>
  )
}
export default AcademicsBtn;
