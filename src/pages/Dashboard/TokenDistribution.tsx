import { ChartData, ChartOptions } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Card from '../../components/Card/Card'
import Legend from '../../components/Legend/Legend'
import { doughnutChartColors } from '../../constants'
import { div, percent } from '../../utils'

const TokenDistribution = () => {
  const serverData = [
    '177059303622298',
    '867747012441931',
    '769551696709695',
    '83998327990297',
    '867747012441931',
    '769551696709695',
    '177059303622298',
    '769551696709695',
    '83998327990297',
  ]

  const total = serverData
    .map((i) => Number(i))
    .reduce((accumulator, currentValue) => accumulator + currentValue)

  const list = [
    {
      label: 'Lyst pool',
      value: Number(serverData[0]),
    },
    {
      label: 'Lyst Asset LP',
      value: Number(serverData[1]),
    },
    {
      label: 'Lyst Token LP',
      value: Number(serverData[2]),
    },
    {
      label: 'Pre-Sale',
      value: Number(serverData[3]),
    },
    {
      label: 'Private sale',
      value: Number(serverData[4]),
    },
    {
      label: 'public sale',
      value: Number(serverData[5]),
    },
    {
      label: 'Community Airdrop',
      value: Number(serverData[6]),
    },
    {
      label: 'advisors',
      value: Number(serverData[7]),
    },
    {
      label: 'team',
      value: Number(serverData[8]),
    },
  ]

  const data: ChartData = {
    labels: list.map(({ label }) => label),
    datasets: [
      {
        data: list.map(({ value }) => value),
        borderWidth: 0,
        backgroundColor: doughnutChartColors,
        hoverBackgroundColor: doughnutChartColors,
        hoverOffset: 0,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    cutout: '0%',
    animation: { animateRotate: false },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  }

  return (
    <Card title='Token distribution'>
      <div className='pie-chart'>
        <Legend
          colors={doughnutChartColors}
          list={list}
          format={value => percent(div(value, total), 1)}
        />
        <div className='pie-chart-canvas'>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </Card>
  )
}

export default TokenDistribution
