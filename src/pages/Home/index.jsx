import React from 'react'

import './home.css'
import services from '../../components/shared/data/data.js'
import Carousel from '../../components/shared/Carousel'

export default function Home(props) {
  return (
    <Carousel
      couches={services}
    />
  )
}