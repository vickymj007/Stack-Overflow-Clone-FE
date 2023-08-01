import React from 'react'
import './SideNavbar.css'
import { Link, NavLink } from 'react-router-dom'
import teams_img from '../../../assets/teams-illo-free-sidebar-promo.svg'
import {BiWorld, BiSolidErrorCircle} from 'react-icons/bi'
import {TiStarburst} from 'react-icons/ti'

const NavbarMain = () => {
  return (
    <div className='side-navbar'>
      <div className='side-nav-routes'>
        <NavLink to='/'>Home</NavLink>
      </div>
      <h4 className='side-nav-headings'>PUBLIC </h4>
      <div className='side-nav-routes'>
        <NavLink to='/questions'><span><BiWorld/></span>Questions</NavLink>
        <NavLink to='/tags'>Tags</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/companies'>Companies</NavLink>
      </div>
      <h4 className='side-nav-headings'>COLLECTIVES<span><BiSolidErrorCircle/></span></h4>
      <Link to='#'><span><TiStarburst/></span>Explore Collectives</Link>
      <h4 className='side-nav-headings'>TEAMS</h4>
      <div className='side-nav-teams'>
        <p><strong>Stack Overflow for Teams</strong> - Start collaborating and sharing organizational knowledge.</p>
        <img src={teams_img} alt='Teams Logo'/>
        <button>Create a free Team</button>
        <p>Why Teams?</p>
      </div>
    </div>
  )
}
  
export default NavbarMain