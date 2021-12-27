import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '../ImageComponent'
import nhLogoDark from '../images/NHDarkLogo.png'
import './header.css'

export default function Header(props) {
  return (
    <div className='flex-row' id='nh'>
      <NavLink to='/'>
        <ImageComponent url={nhLogoDark} />
      </NavLink>
    </div>
  )
}