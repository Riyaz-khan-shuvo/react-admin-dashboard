import React from 'react'
import "../../../node_modules/react-vis/dist/style.css";
import ReactApexChart from 'react-apexcharts'

const Chart = () => {

  const series = [{
    name: 'Impressions',
    data: [74, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Turnover',
    data: [46, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'In Progress',
    data: [26, 41, 36, 26, 45, 48, 52, 53, 41]
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }




  return (
    <div style={{ marginTop: "15px" }}>
      <div id="">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default Chart;
