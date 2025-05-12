import React from 'react'

const Bedge = ({className,badgeText}) => {
  return (
   <div className={`py-3 px-8 w-[92px] hover:bg-amber-200 bg-hoverC ${className}`}>{badgeText}</div>
  )
}

export default Bedge