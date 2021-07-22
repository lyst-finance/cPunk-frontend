import { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { format as formatDate } from 'date-fns'
import 'chartjs-adapter-date-fns'
import { sort } from 'ramda'
import Card from '../../components/Card/Card'
import Formatted from '../../components/Formatted/Formatted'
import { format, lookup } from '../../utils'

const $font = 'Work Sans'
const $primary = '#7553FD'
const $silver = '#CFD8DC'

interface ChartItem {
  timestamp: number
  value: string
}

const cpunckServerData: string = '17272944830828'
const serverData: ChartItem[] = [
  { timestamp: 1618272000000, value: '34567761833648' },
  { timestamp: 1618358400000, value: '23915478323687' },
  { timestamp: 1618444800000, value: '13459330688708' },
  { timestamp: 1618531200000, value: '16694866642575' },
  { timestamp: 1618617600000, value: '27568555376260' },
  { timestamp: 1618704000000, value: '33501865035941' },
  { timestamp: 1618790400000, value: '105967155661645' },
  { timestamp: 1618876800000, value: '52113424032145' },
  { timestamp: 1618963200000, value: '48992906960754' },
  { timestamp: 1619049600000, value: '51738897758407' },
  { timestamp: 1619136000000, value: '49429641910425' },
  { timestamp: 1619222400000, value: '15584957741957' },
  { timestamp: 1619308800000, value: '22035352623227' },
  { timestamp: 1619395200000, value: '53387188183792' },
  { timestamp: 1619481600000, value: '47898125714405' },
  { timestamp: 1619568000000, value: '42455207613339' },
  { timestamp: 1619654400000, value: '41578332558273' },
  { timestamp: 1619740800000, value: '50686866999263' },
  { timestamp: 1619827200000, value: '13819154214462' },
  { timestamp: 1619913600000, value: '15368416450418' },
  { timestamp: 1620000000000, value: '62220218029536' },
  { timestamp: 1620086400000, value: '90176612764030' },
  { timestamp: 1620172800000, value: '45312940810946' },
  { timestamp: 1620259200000, value: '56080143308672' },
  { timestamp: 1620345600000, value: '39302838426745' },
  { timestamp: 1620432000000, value: '10900272948919' },
  { timestamp: 1620518400000, value: '28954578261471' },
  { timestamp: 1620604800000, value: '73112968989644' },
  { timestamp: 1620691200000, value: '65355315027664' },
  { timestamp: 1620777600000, value: '57399297065161' },
  { timestamp: 1620864000000, value: '74241871037024' },
  { timestamp: 1620950400000, value: '44308296154565' },
  { timestamp: 1621036800000, value: '21456994664048' },
  { timestamp: 1621123200000, value: '28229445130343' },
  { timestamp: 1621209600000, value: '72456047788643' },
  { timestamp: 1621296000000, value: '70761562120520' },
  { timestamp: 1621382400000, value: '119814368925006' },
  { timestamp: 1621468800000, value: '109342423607768' },
  { timestamp: 1621555200000, value: '79767529141440' },
  { timestamp: 1621641600000, value: '68432276919087' },
  { timestamp: 1621728000000, value: '120697156801342' },
  { timestamp: 1621814400000, value: '118811373584856' },
  { timestamp: 1621900800000, value: '79789319225389' },
  { timestamp: 1621987200000, value: '67382926755623' },
  { timestamp: 1622073600000, value: '54924662880877' },
  { timestamp: 1622160000000, value: '64742193560273' },
  { timestamp: 1622246400000, value: '23431731380310' },
  { timestamp: 1622332800000, value: '17403769115312' },
  { timestamp: 1622419200000, value: '25286917796784' },
  { timestamp: 1622505600000, value: '42117378211263' },
  { timestamp: 1622592000000, value: '38457071685875' },
  { timestamp: 1622678400000, value: '50057635007694' },
  { timestamp: 1622764800000, value: '53984781989079' },
  { timestamp: 1622851200000, value: '18101205012065' },
  { timestamp: 1622937600000, value: '9443614419283' },
  { timestamp: 1623024000000, value: '34210627370074' },
  { timestamp: 1623110400000, value: '35757558774085' },
  { timestamp: 1623196800000, value: '22249158313137' },
  { timestamp: 1623283200000, value: '28231890727466' },
  { timestamp: 1623369600000, value: '21322976322073' },
  { timestamp: 1623456000000, value: '10868028910499' },
  { timestamp: 1623542400000, value: '10941760102671' },
  { timestamp: 1623628800000, value: '27872684631313' },
  { timestamp: 1623715200000, value: '28555727403605' },
  { timestamp: 1623801600000, value: '31945807779809' },
  { timestamp: 1623888000000, value: '61755380387874' },
  { timestamp: 1623974400000, value: '103008759711912' },
  { timestamp: 1624060800000, value: '16750723178090' },
  { timestamp: 1624147200000, value: '12136756414469' },
  { timestamp: 1624233600000, value: '69567015406295' },
  { timestamp: 1624320000000, value: '62002389270144' },
  { timestamp: 1624406400000, value: '36459336787925' },
  { timestamp: 1624492800000, value: '24211096997757' },
  { timestamp: 1624579200000, value: '34356812678834' },
  { timestamp: 1624665600000, value: '9150613054932' },
  { timestamp: 1624752000000, value: '6624157378182' },
  { timestamp: 1624838400000, value: '44353788916245' },
  { timestamp: 1624924800000, value: '23398377500378' },
  { timestamp: 1625011200000, value: '13534326874469' },
  { timestamp: 1625097600000, value: '13845921286527' },
  { timestamp: 1625184000000, value: '13321464866473' },
  { timestamp: 1625270400000, value: '8915357981627' },
  { timestamp: 1625356800000, value: '6540293641596' },
  { timestamp: 1625443200000, value: '9985474896475' },
  { timestamp: 1625529600000, value: '24745274746607' },
  { timestamp: 1625616000000, value: '25087703755577' },
  { timestamp: 1625702400000, value: '20108415406885' },
  { timestamp: 1625788800000, value: '14605562413261' },
  { timestamp: 1625875200000, value: '5968301611383' },
  { timestamp: 1625961600000, value: '4149367462412' },
  { timestamp: 1626048000000, value: '12684525757004' },
  { timestamp: 1626134400000, value: '12822662312659' },
  { timestamp: 1626220800000, value: '17329512300012' },
  { timestamp: 1626307200000, value: '30204067026163' },
  { timestamp: 1626393600000, value: '15147628542097' },
  { timestamp: 1626480000000, value: '8404846118842' },
  { timestamp: 1626566400000, value: '4518923256029' },
  { timestamp: 1626652800000, value: '23267952871793' },
  { timestamp: 1626739200000, value: '18784048703238' },
  { timestamp: 1626825600000, value: '18445081824188' },
  { timestamp: 1626912000000, value: '1954949857650' },
]

export const sortByTimestamp = (data: ChartItem[]) =>
  sort(({ timestamp: a }, { timestamp: b }) => a - b, data)

export const toDatasets = (data: ChartItem[], symbol?: string) =>
  data.map(({ timestamp, value }) => {
    return { x: timestamp, y: Number(lookup(value, symbol)) }
  })

const CPunck = () => {
  const FMT = { HHmm: 'EEE, LLL dd, HH:mm aa', MMdd: 'LLL dd, yyyy' }

  const barChartData: ScatterDataPoint[] = serverData
    ? toDatasets(serverData, 'uusd')
    : []

  const data: ChartData = {
    datasets: [
      {
        fill: true,
        backgroundColor: $silver,
        borderColor: $silver,
        borderWidth: 2,
        tension: 0.05,
        pointRadius: 0,
        data: barChartData,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 3,
        pointHoverBackgroundColor: $primary,
        pointHoverBorderColor: $primary,
        hoverBackgroundColor: $primary,
        hoverBorderColor: $primary,
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    interaction: { mode: 'index', intersect: false },
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 },
    layout: { padding: { top: 0 } },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        displayColors: false,
        backgroundColor: 'transparent',
        cornerRadius: 5,
        titleColor: $primary,
        titleFont: { size: 14, weight: '600', family: $font },
        titleAlign: 'center',
        bodyColor: $primary,
        bodyFont: { size: 10, family: $font },
        bodyAlign: 'center',
        xAlign: 'center',
        yAlign: 'bottom',
        callbacks: {
          title: ([{ parsed }]) => format(String(parsed.y)),
          label: ({ parsed }) =>
            formatDate(new Date(parsed.x), FMT.MMdd).toUpperCase(),
        },
      },
    },
    scales: {
      xAxes: {
        type: 'time',
        display: false,
        ticks: {
          source: 'auto',
          autoSkip: true,
          autoSkipPadding: 15,
          maxRotation: 0,
        },
        grid: { display: false },
      },

      yAxes: {
        display: false,
        position: 'right',
        grid: {
          drawBorder: false,
        },
        ticks: {
          callback: (value) => format(value as string),
          padding: 20,
        },
      },
    },
  }

  return (
    <Card title='cPunck'>
      <Formatted symbol='uusd'>{cpunckServerData}</Formatted>
      <div className='bar-chart'>
        {barChartData.length > 1 && <Bar data={data} options={options} />}
      </div>
    </Card>
  )
}

export default CPunck
