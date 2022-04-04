import React from 'react'
import "./HomeBtn.css"

function HomeBtn(){

  return (
    <div>
        <button
        onClick={(_event) => (window.location.href = "/Home")}
        className='home'>
            <a className='htitle'> Home Page </a>
            <a className='harrow'></a>
        </button>
    </div>
  )
}
export default HomeBtn;