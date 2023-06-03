import ReactECharts from 'echarts-for-react'
import { useEffect, useState } from 'react'

const TempleChart = ({templeData}) => {
  const [option, setOption] = useState({})

  useEffect(() => {
    const templeChartOptions = {
      title: {
        text: '2023 Temple Challenge Status'
      },
      tooltip: {},
      xAxis: {
        data: ['Adults','Youth']
      },
      yAxis: {
        max: 2500,
      },
      grid: {
        left: 40,
        top: 50,
        right: 35,
        bottom: 18
      },
      series: [
        {
          name: 'Ordinances',
          type: 'bar',
          data: [templeData.adults, templeData.youth],
          itemStyle : { normal: {label : {show: true}}},
          markLine: {
            lineStyle: {
              color: "red"
            },
            data: [
              {
                name: "Goal",
                yAxis: 2000
              }
            ]
          },
        }
      ]
    }

    setOption(templeChartOptions)
  },[])

  return (
    <div className='bg-white shadow-xl rounded-lg border-2'>
      <div className='px-4 py-5 sm:p-6'>
        <ReactECharts option={option} />
      </div>
    </div>
  )
}

export default TempleChart