import Card from '../../components/Card/Card'
import CPunck from './CPunck'
import LystSupply from './LystSupply'
import LystPrice from './LystSupply'
import TokenDistribution from './TokenDistribution'
import TVL from './TVL'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="page-content">
        <div className="masonry">
        <div className="masonry-row">
          <TVL />
          <LystPrice />
          <TokenDistribution />
        </div>
        <div className="masonry-row">
          <Card title='Welcome!'>
            <p>cPunk is a synthetic derivative for CryptoPunks. It’s based on a price feed derived using hedonic linear regressions and real-time on-chain data</p>
          </Card>
          <CPunck />
          <LystSupply />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard