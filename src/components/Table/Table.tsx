import React from 'react'
import './Table.scss'

interface ITable {
  tableHeaders: string[]
}

const Table: React.FC<ITable> = ({ tableHeaders, children }) => {
  return (
    <div className='table-wrapper'>
      <div className='table'>
        <ul className='table-header'>
          {tableHeaders.map((i: string, index) => (
            <li key={index}>
              <div>{i}</div>
            </li>
          ))}
        </ul>
        <ul className='table-body'>
          {children}
        </ul>
      </div>
    </div>
  )
}

export default Table
