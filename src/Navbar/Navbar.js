import React from 'react'
import './Navbar.css'
import Clock from '../Digital-clock/Clock';
function Navbar() {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return (

    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-md-4">
          <h3 className="logo">What ToDo?</h3>
        </div>
        <div className="col-md-8">
          <ul className='navlinks'>
            <li><Clock /></li>
            <li>{formattedDate}</li>
            <li><i class="fa-solid fa-calendar-days"></i> {currentDay}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
