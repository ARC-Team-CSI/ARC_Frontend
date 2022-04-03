import React from 'react'
import './ProfessionalBtn.css'

function ProfessionalBtn(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Professional")}
        className='professional'>
            <a className='ptitle'>Professional</a>
            <br/>
            <a className='pdescription'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
        </button>
    </div>
  )
}
export default ProfessionalBtn;