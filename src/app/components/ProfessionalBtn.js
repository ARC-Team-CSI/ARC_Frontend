import React from 'react'
import {Link} from 'react-router-dom'
import './ProfessionalBtn.css'

function ProfessionalBtn(){

  return (
    <div>
        <Link to='/Professional'>
        <button
        className='professional'>
            <a className='ptitle'>Professional</a>
            <br/>
            <a className='pdescription'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
        </Link>
    </div>
  )
}
export default ProfessionalBtn;