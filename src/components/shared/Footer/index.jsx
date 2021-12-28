import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageComponent from '../ImageComponent'
import './footer.css'
import icons from '../data/images.js'

export default function Footer(props) {

  return (
    <div id='footer'>
      <div id='feet'>
        { icons.map((icon) =>
          <div key={icon.id}>
            <NavLink to={icon.url} className='nav-link link-dark'>
              <ImageComponent className='icon' url={icon.dead.toString()} text={icon.text} />              
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}