/* eslint-disable jsx-a11y/anchor-is-valid */
//nav bar
import React from 'react';
import "./Navbar.css"
import { Button as button } from '@mui/material';

export default function Navbar() {
  return <div className='navbar'>


      <div className='leftSide'>
          <a href="/">HOME</a>
        </div>


        <div className='dropdown'>
        <button className='btn dropdown' type="button" data-bs-toggle="dropdown" aria-expanded="false">ACADEMICS</button>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Pathway Checklists</a></li>

    <li><hr className="dropdown-divider"/></li>

    <li><a className="dropdown-item" href="#">Flowcharts</a></li>

    <li><hr className="dropdown-divider"/></li>
    
    <li><a className="dropdown-item" href="#">Freshman Tips</a></li>

    <li><hr className="dropdown-divider"/></li>
    
    <li><a className="dropdown-item" href="#">Sophomore Tips</a></li>
  </ul>
        </div>

       
        <div className='rightSide'>
          <a href="/">CAREER</a>
        </div>
        

  </div>;
};
