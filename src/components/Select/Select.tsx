import React, { useState } from 'react'
import { IconDown } from '../Icons'
import Dropdown from '../Dropdown/Dropdown'
import './Select.scss'

interface ISelect {
  register?: any
  options: IOptions[]
  name: string
  onChange: (params: string) => void
  defaultValue?: string
  placeholder?: string
}
interface IOptions {
  value: string
  label: string
}

const Select: React.FC<ISelect> = ({
  options,
  placeholder,
  name,
  onChange,
}) => {
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleClick = (value: string) => {
    setSelectedOption(value)
    setOpen(false)
    onChange(value)
  }

  return (
    <>
      <div className='select-label' onClick={() => setOpen(!open)}>
      <div className='input-wrap'>
        <input
          name={name}
          type='text'
          readOnly
          placeholder={selectedOption || placeholder}
          value={selectedOption}
        />
        </div>
        <div className='select-icon'>
          <IconDown />
        </div>
      </div>
      {open && (
        <Dropdown closeToggle={() => setOpen(false)}>
          <div className='select-list-container'>
            <ul className='select-list'>
              {options.map((option) => {
                return (
                  <li
                    className={selectedOption === option.label ? 'active' : ''}
                    onClick={() => handleClick(option.label)}
                    key={option.value}
                  >
                    {option.label}
                  </li>
                )
              })}
            </ul>
          </div>
        </Dropdown>
      )}
    </>
  )
}

export default Select
