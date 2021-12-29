import React from 'react'
import Carousel from '../../components/shared/Carousel'
import { info } from '../../components/shared/data/data.js'

export default function Info(props) {
  return (
    <Carousel
      couches={info}
    />
  )
}