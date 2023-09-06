import React from 'react';
import Img from "../Images/more.png"
import { Avatar } from '@mui/material'
import Chart from "react-apexcharts";


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
                        label: 'Total Patients',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                        color: '#898989',
                        formatter: function () {
                            return 785;
                        }
                    },
                    value: {
                        show: true,
                        fontWeight: 600,
                        fontSize: '3rem',
                        offsetY: 32,
                        color: '#494949'
                    }
                }
            }
        }
    },
    series: [15, 15, 30, 40, 15],
    labels: ['Fully paid', '75% paid', '50% paid', '25% paid', 'Just started'],
    chart: {
        width: 365, // Adjust the width to make it smaller
        type: 'donut',
    },
    colors: ['#32DB81', '#FCA20B', '#A63DCB', '#BAD5FC', '#F57A77'], // Green, Red, Blue
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 780,
        options: {
            chart: {
                width: "100%", // Adjust the width for smaller screens

            },
            legend: {

                position: 'bottom',
                offsetY: 0,
                height: 130,
            },

            // legend: {
            //     position: 'right',
            //     offsetY: 0,
            //     height: 130,

            // }

        }
    }],
    legend: {
        position: 'right',
        offsetY: 70,
        height: 130,

    }
};
const Table = () => {

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center" >

                                <div >
                                    <h5 className='fw-semibold'>Savings</h5>
                                </div>
                                <div className="d-flex align-items-center text-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table table-bordered text-center">
                                    {/* <img src={c1} className='img-fluid' alt='' ></img> */}
                                    {/* <Doughnut
                                        data={data}
                                    /> */}
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
                    <div className="col-md-6">

                        <div className="card mb-4  border-0">
                            <div className="card-header d-flex justify-content-between align-items-center">

                                <div>
                                    <h5 className='fw-semibold'>Expected Deliviries</h5>
                                </div>
                                <div className="d-flex align-items-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table table-bordered text-center">
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


                <div className="row">
                    <div className="col-md-6">
                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center border-0">

                                <div>
                                    <h5 className='fw-semibold'>Recent Transactions</h5>
                                </div>
                                <div className="d-flex align-items-center">
                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table" style={{ marginTop: "-15px" }}>
                                    
                                        <thead >
                                            <tr >

                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Patient</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8", textAlign: "center" }}>Deposite Ammount</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8", textAlign: "center" }}>Time of Transaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                        </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">

                        <div className="card mb-4 border-0">
                            <div className="card-header d-flex justify-content-between align-items-center border-0">

                                <div>
                                    <h5 className='fw-semibold'>Recent Registrations</h5>
                                </div>
                                <div className="d-flex align-items-center">

                                    <img src={Img} alt='' style={{ width: '40px', height: '30px' }}></img>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table" style={{ marginTop: "-15px" }}>
                                  
                                        <thead >
                                            <tr >

                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Patient</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8", textAlign: "center" }}>Deposite Ammount</th>
                                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8", textAlign: "center" }}>Time of Transaction</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                            <tr>

                                                <td className='d-flex'>
                                                    <Avatar alt="Remy Sharp" className='' sx={{ width: 37, height: 37 }} src="/static/images/avatar/1.jpg" />
                                                    <p className='Adin ms-3'> Flexi Health <br></br> Admin</p>
                                                </td>
                                                <td style={{ textAlign: "center", paddingTop: '20px', fontWeight: 'bold' }}>$170,150</td>
                                                <td style={{ textAlign: "center", paddingTop: "20px", fontSize: "0.8em" }}>15 july, 2023 | 05:22 PM</td>
                                            </tr>
                                        </tbody>
                                   
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table