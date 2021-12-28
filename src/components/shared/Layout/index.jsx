import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './layout.css'

export default function Layout(props) {
  return (
    <>
      <Header id='header' />
      <div className='render'>
        {props.children}
      </div>
      <Footer id='footer' />
    </>
  )
}