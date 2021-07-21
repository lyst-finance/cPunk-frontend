import Card from '../../components/Card/Card'
import Formatted from '../../components/Formatted/Formatted'
import Legend from '../../components/Legend/Legend'
import { div, percent } from '../../utils'
import { formatAsset } from '../../utils'
import { ratioChartColors } from './../../constants'

const TVL = () => {
  // fake data
  const { total, liquidity, collateral, stakedMir } = {
    total: '1770593036222989',
    liquidity: '867747012441931',
    collateral: '769551696709695',
    stakedMir: '83998327990297',
  }
  const list = [
    {
      label: 'Liquidity',
      value: Number(collateral),
    },
    {
      label: 'Collateral',
      value: Number(stakedMir),
    },
    {
      label: 'Staked MIR',
      value: Number(liquidity),
    },
  ].sort(({ value: a }, { value: b }) => b - a)

  return (
    <Card title='Total Value Locked on Testnet'>
      <Formatted symbol='uusd'>{total}</Formatted>
      <div className='tvl'>
        <div className='ratio-chart'>
          {list.map(({ value }, index) => (
            <div
              key={index}
              style={{
                width: percent(div(value, total), 1),
                backgroundColor: ratioChartColors[index],
              }}
            />
          ))}
        </div>
        <Legend list={list} colors={ratioChartColors} format={value => formatAsset(String(value), "uusd")} />
      </div>
    </Card>
  )
}

export default TVL
