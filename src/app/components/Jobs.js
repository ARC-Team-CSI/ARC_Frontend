import React from 'react'
import '../styles/Jobs.css'

function Events(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Jobs")}
        className='Jobs'>
            <a className='jtitle'>Jobs</a>
        </button>
    </div>
  )
}
export default Events;