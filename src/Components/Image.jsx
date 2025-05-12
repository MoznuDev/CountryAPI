import React from 'react'

const Image = ({imgAlt,imgSrc}) => {
  return (
    <img src={imgSrc} alt={imgAlt} />
  )
}

export default Image