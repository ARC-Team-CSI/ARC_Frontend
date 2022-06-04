import React from 'react'
import '../styles/Events.css'

function Events(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Events")}
        className='Events'>
            <a className='etitle'>Events</a>
        </button>
    </div>
  )
}
export default Events;