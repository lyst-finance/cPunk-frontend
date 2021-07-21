import React from 'react'
import { format, lookupSymbol } from '../../utils'
import './Formatted.scss'

interface IFormatted {
  size?: string
  value?: string
  symbol?: string
  children?: string
}

const Formatted: React.FC<IFormatted> = ({
  size = 'lg',
  children = '0',
  symbol,
}) => {
  return (
    <span className={`formatted ${size}`}>
      {format(children, symbol)}
      <small>{lookupSymbol(symbol)?.toUpperCase()}</small>
    </span>
  )
}

export default Formatted
