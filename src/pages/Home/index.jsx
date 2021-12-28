import React, { useState } from 'react'
import Card from '../../components/shared/Card'
import Paginator from '../../components/shared/Paginator'
import './home.css'
import services from '../../components/shared/data/data.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import Carousel from '../../components/shared/Carousel'

export default function Home(props) {
  return (
    <Carousel
      couches={services}
    />
  )
}