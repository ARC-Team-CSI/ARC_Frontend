import React from 'react'
import './AcademicsBtn.css'


const Flowchartbtn = () => {
  return (
    <div>
    <button
    onClick={(event) => (window.location.href = "https://flowcharts-csi.vercel.app/")}
    className='flowchartBg'>
        <a className='title'>Flowcharts</a>
        <br/>
        <a className='description'>Ea repellendus natus sed dolorem quam sed quia recusandae ut nemo voluptatem et be </a>
    </button>
</div>
  )
}

export default Flowchartbtn