import React from 'react'
import { ROUTE_CONFIGS } from '../../routes'
import MenuLink from '../MenuLink'
import './Menu.scss'

const Menu: React.FC<{className?: string}> = ({className}) => {
  return (
    <nav className={className ? `${className} menu` : 'menu'}>
      <ul>
        {ROUTE_CONFIGS.map((route) => (
          <MenuLink to={route.path} exact={route.exact} key={route.id}>
            {route.icon}
            {route.name}
          </MenuLink>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
