import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/CareerBtn.css'

function CareerBtn(){

  return (
    <div>
        <Link to='/Career'>
        <button
        className='career'>
            <p className='careertitle'>Career</p>
            <br/>
            <p className='careerdescription'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </p>
        </button>
        </Link>
    </div>
  )
}
export default CareerBtn;
