import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IconCalculator, IconDashboard2, IconStatistics, IconTeam, IconTrade, IconWallet } from './components/Icons'

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'))
const Calculator = React.lazy(() => import('./pages/Calculator/Calculator'))
const Liquidity = React.lazy(() => import('./pages/Liquidity/Liquidity'))
const Borrow = React.lazy(() => import('./pages/Borrow/Borrow'))
const Farm = React.lazy(() => import('./pages/Farm/Farm'))
const Team = React.lazy(() => import('./pages/Team/Team'))

export const ROUTE_CONFIGS = [
  {
    id: '1',
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    exact: true,
    icon: <IconDashboard2 />,
  },
  {
    id: '2',
    name: 'Calculator',
    path: '/calculator',
    component: Calculator,
    exact: true,
    icon: <IconCalculator />,
  },
  {
    id: '3',
    name: 'Liquidity',
    path: '/liquidity',
    component: Liquidity,
    exact: true,
    icon: <IconTrade />,
  },
  {
    id: '4',
    name: 'Borrow',
    path: '/borrow',
    component: Borrow,
    exact: true,
    icon: <IconWallet />,
  },
  {
    id: '5',
    name: 'Farm',
    path: '/farm',
    component: Farm,
    exact: true,
    icon: <IconStatistics />,
  },
  {
    id: '6',
    name: 'Team',
    path: '/team',
    component: Team,
    exact: true,
    icon: <IconTeam />,
  },
]

const routes = () => (
  <Switch>
    {ROUTE_CONFIGS.map((route) => (
      <Route
        key={route.id}
        component={route.component}
        path={route.path}
        exact={route.exact}
      />
    ))}
  </Switch>
)

export default routes
