import React, { useState } from 'react'
import { IconDown } from '../Icons'
import Dropdown from '../Dropdown/Dropdown'
import './Select.scss'

interface ISelect {
  options: ISelectOptions[]
  name: string
  onChange: (params: ISelectOptions) => void
  defaultValue: ISelectOptions
  placeholder?: string
}
interface ISelectOptions {
  value: string
  label: string
  logo?: string
}

const Select: React.FC<ISelect> = ({
  options,
  placeholder,
  defaultValue,
  name,
  onChange,
}) => {
  const [open, setOpen] = useState(false)

  const handleChange = (option: ISelectOptions) => {
    setOpen(false)
    onChange(option)
  }

  return (
    <div className='select'>
      <div className='select-label' onClick={() => setOpen(!open)}>
        <div className='input-wrap'>
          <input
            name={name}
            type='text'
            readOnly
            placeholder={defaultValue.label || placeholder}
            value={defaultValue.label}
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
                    className={
                      defaultValue.label === option.label ? 'active' : ''
                    }
                    onClick={() => handleChange(option)}
                    key={option.value}
                  >
                    {option.logo && <img src={option.logo} alt={option.label} />}
                    {option.label}
                  </li>
                )
              })}
            </ul>
          </div>
        </Dropdown>
      )}
    </div>
  )
}

export default Select
