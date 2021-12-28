import React, { useState } from 'react'
import Card from '../Card'
import Paginator from '../Paginator'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import './carousel.css'

export default function Carousel(props) {
  const [index, setIndex] = useState(0)
  
  const slideLeft = () => {
    if (index - 1 >= 0){
      setIndex(index - 1)
    }
  }
  
  const slideRight = () => {
    if (index + 1 <= props.couches.length-1) {
      setIndex(index + 1)
    }
  }
  
  const handlePageChange = (page) => {
    let n = page - index
    setIndex(index + n)
  }
  
  return (
    <div className='container'>
      <div className='card-container'>
        {props.couches.map((couch, n) => {
          let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard"
          return <Card {...couch} cardStyle={position} />
        })}
        <FontAwesomeIcon
          onClick={slideLeft}
          className="leftBtn"
          icon={faChevronLeft}
        />
        <FontAwesomeIcon
          onClick={slideRight}
          className="rightBtn"
          icon={faChevronRight}
        />
        <Paginator
          dataLength={props.couches.length}
          activeIndex={index}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  )
}