import React from 'react';

import Chart from "react-apexcharts";

const TransactionReportComponent = () => {
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
        yaxis: {
            show: false  // Hide horizontal grid lines
        }
    };

    const options3 = {
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Revenue',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            color: '#898989',
                            formatter: function () {
                                return 'UGX 150,000';
                            }
                        },
                        value: {
                            show: true,
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            offsetY: 16,
                            color: '#494949'
                        }
                    }
                }
            }
        },
        series: [30, 15, 30, 40],
        labels: ['Double Room - c-section', 'Private Room - c-section', 'VIP - Normal', 'Private Room - Normal'],
        chart: {
            width: 365, // Adjust the width to make it smaller
            type: 'donut',
          
        },
        colors: ['#064FB8', '#F7282F', '#06B871', '#C5DAF8'], // Green, Red, Blue
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 1025,
            options: {
                chart: {
                    width: "100%",// Adjust the width for smaller screens
                    height: 400
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                    height: 130,
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 70,
            height: 130,
        }
    };
    const options4 = {
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'Transactions:',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            color: '#898989',
                            formatter: function () {
                                return 'UGX 750,550';
                            }
                        },
                        value: {
                            show: true,
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            offsetY: 16,
                            color: '#494949'
                        }
                    }
                }
            }
        },
        series: [50, 50],
        labels: ['Payment Pending', 'Payment Completed'],
        chart: {
            width: 365, // Adjust the width to make it smaller
            type: 'donut',
        },
        colors: ['#FFB800', '#06B871'], // Green and Yellow
        dataLabels: {
            enabled: false
        },
        responsive: [{
            breakpoint: 1025,
            options: {
                chart: {
                    width: "100%",// Adjust the width for smaller screens
                    height: 400
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                    height: 130,
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 100,
            height: 130,
        }
    };

    const options5 = {
        series: [{
            name: "transcation volums",
            data: [0, 2, 4, 6, 8, 10]
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        markers: {
            size: [4, 7]
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Frid', 'Sat'],
        }
    }

    return (
        <>
            <div className="container-fluid p-4 p-md-5" style={{ marginTop: "30px" }}>
                <div className="row g-5">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >
                                <div>
                                    <h5 className='fw-semibold '>Transaction Volume</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <select id="inputState" className="form-select">
                                        <option>Weekly</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-container" style={{ height: '400px' }}>
                                    <div className="table table-bordered text-center mt-4">
                                        {/* <img src={dognot} className=' img-fluid ' alt='' ></img> */}
                                        <div className="app">
                                            <div className="row">
                                                <div className="mixed-chart">
                                                    <Chart
                                                        options={options5}
                                                        series={options5.series}
                                                        type="line"
                                                        height={options5.chart.height}
                                                        stroke={options5.stroke}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Total Revenue</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <select id="inputState" className="form-select">
                                        <option>Weekly</option>
                                        <option>...</option>
                                    </select>

                                </div>
                            </div>

                            <div className=" d-flex justify-content-center">
                                {/* <img src={str} className=' img-fluid' alt=''></img> */}
                                <div className="card-body">
                                    <div className="table-container" style={{ height: '400px' }}>
                                        <div className="table table-bordered text-center mt-4">
                                            {/* <img src={dognot} className=' img-fluid ' alt='' ></img> */}
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
                                        </div>
                                    </div>
                                </div>

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
                                        Transaction by Service
                                    </h5>
                                </div>
                                <div className="d-flex align-items-center">
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-container" style={{ height: '400px' }}>
                                    <div className="table table-bordered text-center mt-4">
                                        {/* <img src={str1} className=' img-fluid' alt='' ></img> */}

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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* Display the second table only on larger screens */}
                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className='fw-semibold'>Transaction Status</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-container" style={{ height: '400px' }}>
                                    <div className="table table-bordered text-center mt-4">
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
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='table-responsive mt-3'>
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" htmlFor="invalidCheck" >
                                        Patient Name
                                    </label></th>

                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Service</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction ID</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Phone Number</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Status</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>

                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>

                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" htmlFor="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>

                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                                <td className='pt-3'>Double Room-Normal</td>
                                <td className='pt-3'>303963058</td>
                                <td className='pt-3'>+91 23452335</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 150,000</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default TransactionReportComponent