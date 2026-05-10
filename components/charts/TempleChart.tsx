import { Box } from "@mui/material"
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
  }, [templeData.adults, templeData.youth])

  return (
    <Box sx={{ bgcolor: "background.paper", boxShadow: 6, borderRadius: 3, border: "2px solid", borderColor: "divider" }}>
      <Box sx={{ px: 3, py: 4 }}>
        <ReactECharts option={option} />
      </Box>
    </Box>
  )
}

export default TempleChart
