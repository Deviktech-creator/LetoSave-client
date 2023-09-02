 // eslint-disable-next-line 
import React, { useState } from 'react'; // eslint-disable-next-line 
import dognot from "../Components/Images/Untitled design (2).png" // eslint-disable-next-line 
import str from "../Components/Images/Untitled design (3).png" // eslint-disable-next-line 
import str1 from "../Components/Images/Untitled design (4).png" // eslint-disable-next-line 
import str2 from "../Components/Images/Untitled design (5).png" // eslint-disable-next-line 
import Chart from "react-apexcharts";

const RevenueReportComponent = () => {
  const boxes = [
    { number: "UGX 1,500,000", heading: 'Expected Revenue', color: 'bg-primary' },
    { number: "UGX 950,000", heading: 'Revenue Recieved', color: 'bg-success' },
    { number: "UGX 550,000", heading: 'Total Pending', color: ' bg-danger' },

  ];
  const options = {
    series: [{
      data: [21, 22, 10, 28, 16, 21, 13, 30, 55, 53, 21, 23]
    }],
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ['#064FB8'], // Example colors
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      show: false,
      categories: [
        ['Jan'],
        ['Feb'],
        ['March'],
        ['April'],
        ['May'],
        ['June'],
        ['July'],
        ['August'],
        ['Sept'],
        ['Oct'],
        ['Nov'],
        ['Dec'],
      ],
      labels: {
        style: {
          colors: ['#000000'], // Same as colors array
          fontSize: '12px'
        }
      },

    },

  };
  const options3 = {
    series: [13, 15, 15],
    chart: {
      width: 365, // Adjust the width to make it smaller
      type: 'donut',
    },
    colors: ['#00FF00', '#FF0000', '#0000FF'], // Green, Red, Blue
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 280,
      options: {
        chart: {
          width: 150 // Adjust the width for smaller screens
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 130,
    }
  };
  const options4 = {
    series: [13, 15],
    chart: {
      width: 365, // Adjust the width to make it smaller
      type: 'donut',
    },
    colors: ['#00FF00', '#0000FF'], // Green,  Blue
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 280,
      options: {
        chart: {
          width: 150 // Adjust the width for smaller screens
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 130,
    }
  };
  const option5={
    series: [{
      name: 'PRODUCT A',
      data: [21, 22, 10, 28, 16, 21, 13, 30 , 55 , 53 , 21 , 33]
    }, {
      name: 'PRODUCT B',
      data: [23, 12, 10, 58, 76, 11, 13, 30 , 55 , 53 , 21 , 23]
    }, {
      name: 'PRODUCT C',
      data: [21, 22, 10, 28, 16, 11, 13, 30 , 55 , 83 , 21 , 13]
    }],
    
    colors: ['#99E0FF', '#0AB8F7' , '#2778EE' , '#064FB8' , '#2F65B2'], // Green,  Blue
      chart: {
      type: 'bar',
      height: 350,
      width:700,
      stacked: true,
      stackType: '100%'
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    xaxis: {
      categories: [
        ['Jan'],
        ['Feb'],
        ['March'],
        ['April'],
        ['May'],
        ['June'],
        ['July'],
        ['August'],
        ['Sept'],
        ['Oct'],
        ['Nov'],
        ['Dec'],
    ],
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'bottom',
      offsetX: 0,
      offsetY: 10,
      labels: {
        colors: ['#FF0000', '#00FF00', '#0000FF'], // Set custom colors for legend labels
        useSeriesColors: false, // Set to false to use custom colors
        items: [
            {
                // Customize the label for the first series
                name: 'Custom Label 1',
                style: {
                    color: '#FF0000' // Set a custom color for this label
                }
            },
            {
                // Customize the label for the second series
                name: 'Custom Label 2',
                style: {
                    color: '#00FF00' // Set a custom color for this label
                }
            },
            {
                // Customize the label for the third series
                name: 'Custom Label 3',
                style: {
                    color: '#0000FF' // Set a custom color for this label
                }
            }
        ]
    }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return  "UNIX 200";
        }
      },
    },
  }
  return (
    <>
      <div className="container-fluid p-4 p-md-5" style={{ marginTop: "40px" }}>
        <div className="row">
          {boxes.map((box, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className={`box ${box.color} text-white text-center mb-4 py-4 rounded`}>
                <div className="number" style={{ fontSize: '33px', fontWeight: "bolder" }}>{box.number}</div>
                <div className="heading mt-3" style={{ fontSize: '17px', fontWeight: "600" }}>{box.heading}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="row g-5 mt-1">
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center" >

                <div >
                  <h5 className='fw-semibold '>Revenue by months</h5>
                </div>
                <div className="d-flex align-items-center">
                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>

                </div>
              </div>

              <div className="card-body">
                <table className="table table-bordered text-center mt-4">
                  {/* <img src={dognot} className='img-fluid' alt='' ></img> */}

                  <div className="app">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={options}
                          series={options.series}
                          type="bar"
                          height={options.chart.height}
                        />
                      </div>
                    </div>
                  </div>


                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Display the second table only on larger screens */}
            <div className="card mb-4  border-0">
              <div className="card-header d-flex justify-content-between align-items-center">

                <div>
                  <h5 className='fw-semibold'>Revenue by services</h5>
                </div>
                <div className="d-flex align-items-center">
                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>

                </div>
              </div>

              <div className="card-body">
                <table className="table table-bordered text-center mt-4">
                  {/* <img src={str} className=' img-fluid' alt=''></img> */}

                  <div className="app">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={options3}
                          series={options3.series}
                          type="donut"
                          height={options3.chart.width}
                        />
                      </div>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center" >

                <div >
                  <h5 className='fw-semibold '>
                    Revenue by service by months
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>

                </div>
              </div>

              <div className="card-body">
                <table className="table table-bordered text-center mt-4">
                {/* <img src={str1} className=' img-fluid' alt='' ></img> */}
                  <div className="app">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={option5}
                          series={option5.series}
                          type="bar"
                          width={option5.chart.width}
                          height={option5.chart.height}
                        />
                      </div>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* Display the second table only on larger screens */}
            <div className="card mb-4  border-0">
              <div className="card-header d-flex justify-content-between align-items-center">

                <div>
                  <h5 className='fw-semibold'>Revenue by rooms</h5>
                </div>
                <div className="d-flex align-items-center">

                  <select id="inputState" className="form-select">
                    <option selected>Weekly</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered text-center mt-4">
                  {/* <img src={str2} className='img-fluid' alt='' ></img> */}


                  <div className="app">
                    <div className="row">
                      <div className="mixed-chart">
                        <Chart
                          options={options4}
                          series={options4.series}
                          type="donut"
                          height={options4.chart.width}
                        />
                      </div>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RevenueReportComponent
