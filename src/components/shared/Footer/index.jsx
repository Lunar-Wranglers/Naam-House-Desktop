import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import icons from '../data/images.js'

export default function Footer(props) {
  
  return (
    <div id='footer'>
      <div id='feet'>
        { icons.map((icon) =>
          <div key={icon.id}>
            <NavLink to={icon.url} className='nav-link link-dark'>
              <img className='icon' src={icon.dead.toString()} alt={icon.text}/>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}