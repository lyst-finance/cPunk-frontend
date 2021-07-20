import React from 'react';
import { Link, RouteProps, Route } from 'react-router-dom'

interface IMenuLink {
    to: string,
    exact: boolean,
  }
  const MenuLink: React.FC<IMenuLink & RouteProps> = ({
    to,
    exact,
    children,
  }) => {
    return (
      <Route path={to} exact={exact}>
        {({ match }) => (
          <li className={match ? 'active' : undefined}>
            <Link to={to}>{children}</Link>
          </li>
        )}
      </Route>
    )
  }

export default MenuLink;
