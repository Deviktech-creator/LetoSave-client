// eslint-disable-next-line
import React, { useState } from "react"; // eslint-disable-next-line
import c1 from "../Images/Untitled design (no2) (1).png"; // eslint-disable-next-line
import c2 from "../Images/Untitled design (no2) (2).png";
// eslint-disable-next-line
import str from "../Images/anChange.png";
// import { Doughnut } from 'react-chartjs-2';
import Img from "../Images/more.png";
import { Avatar } from "@mui/material";
import Chart from "react-apexcharts";
import { useAuth } from "../../contexts/AuthContext";
// import { Chart, ArcElement } from 'chart.js'
// Chart.register(ArcElement);

// const data = {
//     labels: [
//         'Red',
//         'Blue',
//         'Yellow',

//     ],
//     datasets: [{
//         label: 'My First Dataset',
//         data: [300, 50, 100],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(255, 205, 86)'
//         ],
//         hoverOffset: 4
//     }]
// };

const options = {
  series: [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 55, 53, 21, 23],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
  },
  colors: ["#064FB8"], // Example colors
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    show: false,
    categories: [
      ["Jan"],
      ["Feb"],
      ["March"],
      ["April"],
      ["May"],
      ["June"],
      ["July"],
      ["August"],
      ["Sept"],
      ["Oct"],
      ["Nov"],
      ["Dec"],
    ],
    labels: {
      style: {
        colors: ["#000000"], // Same as colors array
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: false, // Hide horizontal grid lines
  },
};
const options3 = {
  series: [13, 15, 15],
  chart: {
    width: 365, // Adjust the width to make it smaller
    type: "donut",
  },
  colors: ["#00FF00", "#FF0000", "#0000FF"], // Green, Red, Blue
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          width: 150, // Adjust the width for smaller screens
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: "right",
    offsetY: 0,
    height: 130,
  },
};
const Table = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-semibold">Savings</h5>
                </div>
                <div className="d-flex align-items-center text-center">
                  <img
                    src={Img}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  ></img>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered text-center">
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
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4  border-0">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-semibold">Expected Deliviries</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={Img}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  ></img>
                </div>
              </div>
              <div className="card-body">
                <table className="table table-bordered text-center">
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
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center border-0">
                <div>
                  <h5 className="fw-semibold">Recent Transactions</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={Img}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  ></img>
                </div>
              </div>
              <div className="card-body">
                <table className="table" style={{ marginTop: "-15px" }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                          }}
                        >
                          Patient
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                            textAlign: "center",
                          }}
                        >
                          Deposite Ammount
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                            textAlign: "center",
                          }}
                        >
                          Time of Transaction
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 border-0">
              <div className="card-header d-flex justify-content-between align-items-center border-0">
                <div>
                  <h5 className="fw-semibold">Recent Registrations</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={Img}
                    alt=""
                    style={{ width: "40px", height: "30px" }}
                  ></img>
                </div>
              </div>
              <div className="card-body">
                <table className="table" style={{ marginTop: "-15px" }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                          }}
                        >
                          Patient
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                            textAlign: "center",
                          }}
                        >
                          Deposite Ammount
                        </th>
                        <th
                          scope="col"
                          style={{
                            backgroundColor: "#EFF5FF",
                            fontSize: "0.7em",
                            color: "#064FB8",
                            textAlign: "center",
                          }}
                        >
                          Time of Transaction
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                      <tr>
                        <td className="d-flex">
                          <Avatar
                            alt="Remy Sharp"
                            className=""
                            sx={{ width: 37, height: 37 }}
                            src="/static/images/avatar/1.jpg"
                          />
                          <p className="Adin ms-3">
                            {" "}
                            {currentUser && currentUser.hospitalName} <br></br> Admin
                          </p>
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          $170,150
                        </td>
                        <td
                          style={{
                            textAlign: "center",
                            paddingTop: "20px",
                            fontSize: "0.8em",
                          }}
                        >
                          15 july, 2023 | 05:22 PM
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
