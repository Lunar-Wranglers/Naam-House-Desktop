import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './layout.scss'

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