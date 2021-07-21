import { FC, ReactNode } from 'react'
import './Legend.scss'

interface Props {
  list: { label: ReactNode; value: any }[],
  colors: string[],
  format?: (value: string) => string,
}

const Legend: FC<Props> = ({ list, colors, format }) => {
  return (
    <>
      <ul className='legend'>
        {list.map(({ label, value }, index) => (
          <li key={index}>
            <div className='legend-header'>
              <span
                className='legend-square'
                style={{ backgroundColor: colors[index] }}
              />
              <span className='legend-title'>{label}</span>
            </div>
            <div className='legend-value'>{format ? format(value) : value}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Legend
