import { Suspense } from 'react'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Sidebar from './components/Sidebar/Sidebar'
import routes from './routes'

const App = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className='page'>
          <Suspense fallback={null}>{routes()}</Suspense>
        </div>
        <Menu className="bottom-menu" />
      </div>
    </div>
  )
}

export default App
