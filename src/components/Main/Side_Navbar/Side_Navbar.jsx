import React from 'react'
import './Side_Navbar.css'
import { Link } from 'react-router-dom'
import teams_img from '../../../assets/teams-illo-free-sidebar-promo.svg'
import {BiWorld, BiSolidErrorCircle} from 'react-icons/bi'
import {TiStarburst} from 'react-icons/ti'

const Navbar_Main = () => {
  return (
    <div className='side-navbar'>
      <Link to='/'>Home</Link>
      <h4 className='side-nav-headings'>PUBLIC </h4>
      <div className='side-nav-routes'>
        <Link to='/'><span><BiWorld/></span>Questions</Link>
        <Link to='/'>Tags</Link>
        <Link to='/'>Users</Link>
        <Link to='/'>Companies</Link>
      </div>
      <h4 className='side-nav-headings'>COLLECTIVES<span><BiSolidErrorCircle/></span></h4>
      <Link to='/'><span><TiStarburst/></span>Explore Collectives</Link>
      <h4 className='side-nav-headings'>TEAMS</h4>
      <div className='side-nav-teams'>
        <p><strong>Stack Overflow for Teams</strong> - Start collaborating and sharing organizational knowledge.</p>
        <img src={teams_img} alt='Teams Image'/>
        <button>Create a free Team</button>
        <button>Why Teams?</button>
      </div>
    </div>
  )
}
  
export default Navbar_Main