import React from 'react'
import './Card.scss'

interface ICard {
  title?: string,
  className?: string,
}

const Card: React.FC<ICard> = ({ title, className, children }) => {
  return (
    <div className={`card ${ className  ?? ''}`}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export default Card
