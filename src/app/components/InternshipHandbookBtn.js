import React from 'react'
import '../styles/InternshipHandbookBtn.css'
 
function InternshipHandbookBtn(){
 
  return (
    <div>
        <button
        onClick={(event) => (window.location.href = "/InternshipHandbook")}
        className='internshiphb'>
            <a className='ititle'>Internship Handbook</a>
            <a className='iarrow2'></a>
        </button>
    </div>
  )
}


export default InternshipHandbookBtn;