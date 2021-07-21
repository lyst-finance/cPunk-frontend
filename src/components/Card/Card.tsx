import React from 'react'
import './Card.scss'

interface ICard {
  title?: string,
}

const Card: React.FC<ICard> = ({ title, children }) => {
  return (
    <div className='card'>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export default Card
