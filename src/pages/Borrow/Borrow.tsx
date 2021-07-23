import React, { useState } from 'react'
import Formatted from '../../components/Formatted/Formatted'
import Table from '../../components/Table/Table'
import cPunk from '././../../assets/images/cpunck.svg'
import BorrowForm from './BorrowForm'
import './Borrow.scss'

interface IBorrowData {
  logo: string
  title: string
  price: string
  ratio: string
  balance: string
  limit: string
}

const Borrow: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const tableHeaders: string[] = [
    'Ticker',
    'Price',
    'Min. Col. Ratio',
    'Collateral Balance',
    'Collateral Limit',
  ]

  const tableContent = [
    {
      logo: cPunk,
      title: 'cPunk',
      price: '300.97 UST',
      ratio: '150%',
      balance: '867747012441931',
      limit: '867747012441931',
    },
  ]

  return (
    <div className={`borrow ${open ? 'open' : ''}`}>
      <h1>Borrow</h1>
      {open ? (
        <BorrowForm />
      ) : (
        <Table tableHeaders={tableHeaders}>
          {tableContent.map((i: IBorrowData, index: number) => {
            return (
              <li key={index} onClick={() => setOpen(!open)}>
                <div>
                  <img src={i.logo} alt={i.title} />
                  <strong>{i.title}</strong>
                </div>
                <div className='colored'>
                  <span className='formatted sm'>{i.price}</span>
                </div>
                <div>{i.ratio}</div>
                <div>
                  <Formatted size='sm' symbol='uusd'>
                    {i.balance}
                  </Formatted>
                </div>
                <div>
                  <Formatted size='sm' symbol='uusd'>
                    {i.limit}
                  </Formatted>
                </div>
              </li>
            )
          })}
        </Table>
      )}
    </div>
  )
}

export default Borrow
