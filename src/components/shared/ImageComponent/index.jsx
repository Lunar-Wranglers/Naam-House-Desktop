import React from 'react'

export default function ImageComponent(props) {
  return (
    <div>
      <img src={this.props.url} alt={this.props.text} />
    </div>
  )
}