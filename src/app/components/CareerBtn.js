import React from 'react'
import {Link} from 'react-router-dom'
import './CareerBtn.css'

function CareerBtn(){

  return (
    <div>
        <Link to='/Career'>
        <button
        className='career'>
            <a className='careertitle'>Career</a>
            <br/>
            <a className='cdescription'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
        </Link>
    </div>
  )
}
export default CareerBtn;