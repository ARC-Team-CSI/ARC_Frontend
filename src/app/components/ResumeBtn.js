import React from 'react'
import './ResumeBtn.css'

function ResumeBtn(){

  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/Resume")}
        className='resume'>
            <a className='rtitle'>Resume Template</a>
            <a className='rarrow2'></a>
        </button>
    </div>
  )
}
export default ResumeBtn;