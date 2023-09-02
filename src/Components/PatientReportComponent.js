 // eslint-disable-next-line 
import React, { useState } from 'react'; // eslint-disable-next-line 
import dognot from "../Components/Images/Untitled design (222).png" // eslint-disable-next-line 
import str from "../Components/Images/Untitled design (333).png" // eslint-disable-next-line 
import str1 from "../Components/Images/Untitled design (444).png" // eslint-disable-next-line 
import str2 from "../Components/Images/Untitled design (555).png" // eslint-disable-next-line 
import Chart from "react-apexcharts";

const PatientReportComponent = () => {

    const options = {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30 , 55 , 53 , 21 , 23]
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
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
            show: false ,
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
    const options1 = {
        series: [{
            data: [20,25, 30, 40]
        }],
        chart: {
            height: 350,
            width:400,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
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
            show: false ,
            categories: [
                ['18-24'],
                ['24-32'],
                ['32-40'],
                ['40-50'],
            ],
            labels: {
                style: {
                    colors: ['#000000'], // Same as colors array
                    fontSize: '12px'
                }
            },
           
        },
       
    };
    const options2 = {
        series: [{
            data: [61, 45, 70, 28, 16, 21, 53, 90 , 5 , 25 , 21 , 23]
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
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
            show: false ,
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
                },
                
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 130,
        }
    };
    
return (
    <>
        <div className="container-fluid p-4 p-md-5" style={{ marginTop: "40px" }}>
            <div className="row g-5">
                <div className="col-md-6">
                    <div className="card mb-4 border-0">
                        <div className="card-header d-flex justify-content-between align-items-center" >

                            <div >
                                <h5 className='fw-semibold '>Pateint Progress by Months</h5>
                            </div>
                            <div className="d-flex align-items-center">


                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered text-center mt-4">
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


                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Display the second table only on larger screens */}
                    <div className="card mb-4  border-0">
                        <div className="card-header d-flex justify-content-between align-items-center">

                            <div>
                                <h5 className='fw-semibold'>Patient by Age</h5>
                            </div>
                            <div className="d-flex align-items-center">

                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered text-center mt-4">
                                {/* <img src={str} className='img-fluid' alt='' ></img> */}
                                <div className="app">
                                <div className="row">
                                    <div className="mixed-chart">
                                        <Chart
                                            options={options1}
                                            series={options1.series}
                                            type="bar"
                                            height={options1.chart.height}
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
                                <h5 className='fw-semibold '>Deliveries by Services</h5>
                            </div>
                            <div className="d-flex align-items-center">
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered text-center mt-4">
                                {/* <img src={str1} className='img-fluid' alt='' ></img> */}
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
                <div className="col-md-6">
                    {/* Display the second table only on larger screens */}
                    <div className="card mb-4  border-0">
                        <div className="card-header d-flex justify-content-between align-items-center">

                            <div>
                                <h5 className='fw-semibold'>Total Deliveries</h5>
                            </div>
                            <div className="d-flex align-items-center">


                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered text-center mt-4">
                                {/* <img src={str2} className='img-fluid' alt='' ></img> */}
                                <div className="app">
                                  <div className="row">
                                    <div className="mixed-chart">
                                        <Chart
                                            options={options2}
                                            series={options2.series}
                                            type="bar"
                                            height={options2.chart.height}
                                        />
                                    </div>
                                </div>
                            </div>

                            </table>
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
                                <label className="form-check-label mt-1" for="invalidCheck" >
                                    Patient Name
                                </label></th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Registration Date</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Exp. Delivery Date</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Selected Service</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Total Cost</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Amount Paid</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Outstanding Balance</th>
                            <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "0.9em", }}>
                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                    Alexa Cave
                                </label>
                            </th>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>C-Section-Private</td>
                            <td className='pt-3'>UGX 850,000</td>
                            <td className='pt-3'>UGX 100,000</td>
                            <td className='pt-3'>UGX 750,000</td>
                            <td ><span className="badge p-2 me-2 mt-2 " style={{ backgroundColor: "#00CCFF" }}>REGISTERED</span> </td>
                        </tr>
                        <tr style={{ fontSize: "0.9em", }}>
                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                    Alexa Cave
                                </label>
                            </th>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>C-Section-Private</td>
                            <td className='pt-3'>UGX 850,000</td>
                            <td className='pt-3'>UGX 100,000</td>
                            <td className='pt-3'>UGX 750,000</td>
                            <td ><span className="badge p-2 me-2 mt-2 " style={{ backgroundColor: "#00CCFF" }}>REGISTERED</span> </td>
                        </tr>
                        <tr style={{ fontSize: "0.9em", }}>
                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                    Alexa Cave
                                </label>
                            </th>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>C-Section-Private</td>
                            <td className='pt-3'>UGX 850,000</td>
                            <td className='pt-3'>UGX 100,000</td>
                            <td className='pt-3'>UGX 750,000</td>
                            <td ><span className="badge p-2 me-2 mt-2 " style={{ backgroundColor: "#00CCFF" }}>REGISTERED</span> </td>
                        </tr>
                        <tr style={{ fontSize: "0.9em", }}>
                            <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                    Alexa Cave
                                </label>
                            </th>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            <td className='pt-3'>C-Section-Private</td>
                            <td className='pt-3'>UGX 850,000</td>
                            <td className='pt-3'>UGX 100,000</td>
                            <td className='pt-3'>UGX 750,000</td>
                            <td ><span className="badge p-2 me-2 mt-2 " style={{ backgroundColor: "#00CCFF" }}>REGISTERED</span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
)
}

export default PatientReportComponent
