import React from 'react'

export default function ImageComponent(props) {
  return (
    <>
      <img src={props.url} alt={props.text} />
    </>
  )
}