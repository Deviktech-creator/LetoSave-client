import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const SinglePatientDetail = () => {
    const navigate = useNavigate();
  const { token, formatDateToDmy } = useAuth();
  const { patientServiceId } = useParams();
  const [patientService, setPatientService] = useState(null);
//   console.log(patientService)

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/patient-service/${patientServiceId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(apiUrl, config)
      .then((response) => {
        setPatientService(response.data.patientService);
      })
      .catch((error) => {
        console.error("Error fetching patient service details:", error);
      });
  }, [patientServiceId, token]);

  const handleApproval = (status) => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/accept-decline-service`;
  
    const requestData = {
      patientServiceId: patientServiceId,
      status: status, 
    };
  
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    axios
      .put(apiUrl, requestData, config)
      .then((response) => {
        // console.log('Service Response:', response.data.message);
        toast.success(response.data.message);
        navigate('/user/patient-management');
      })
      .catch((error) => {
        // console.error(`Error ${status} service:`, error);
        toast.error(error.response.data.error);
      });
  };
  

  return (
    <>
      <div className="container-fluid p-3 p-md-5" style={{ marginTop: "30px" }}>
        <div className="d-flex justify-content-end">
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 py-2.5 px-4"
                />
              </Col>
              <Col xs="auto">
                <Button
                  variant="secondary"
                  size="lg"
                  active
                  style={{ backgroundColor: "#6787B6" }}
                >
                  <img
                    src={"/images/filter.png"}
                    className="me-1 mb-1"
                    alt=""
                  />
                  Filter
                </Button>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="row mt-4 ">
          <div className="col-12 col-md-2">
            <img
              src={`/images/uploads/${
                patientService && patientService.patient.profilePicture
              }`}
              style={{ width: "170px", height: "170px" }}
              alt=""
            ></img>
          </div>

          <div className="col-12 col-md-5">
            <div className="d-flex">
              <h2 className="ms-3 fw-bold mt-2">
                {patientService && patientService.patient.name}
              </h2>
              {patientService && (
                <p className="pt-1">
                  {patientService.status === "pending" && (
                    <span className="badge bg-warning p-2 mt-2 ms-3">
                      PENDING
                    </span>
                  )}
                  {patientService.status === "approved" && (
                    <span className="badge bg-success p-2 mt-2 ms-3">
                      APPROVED
                    </span>
                  )}
                  {patientService.status === "declined" && (
                    <span className="badge bg-danger p-2 mt-2 ms-3">
                      DECLINED
                    </span>
                  )}
                </p>
              )}

              <div className="d-block d-md-none">
                <img src="/images/mess.png" className="mt-2 me-2 " alt=""></img>
                <img
                  src="/images/Group 415.png"
                  className="mt-2 me-2"
                  alt=""
                ></img>
                <img src="/images/cros.png" className="mt-2" alt=""></img>
              </div>
            </div>
            <div className="d-flex pt-3">
              <img
                src="/images/calendar.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Date of birth
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                {patientService &&
                  patientService.patient.dateOfBirth &&
                  formatDateToDmy(patientService.patient.dateOfBirth)}
              </h5>
            </div>
            <div className="d-flex pt-3">
              <img
                src="/images/telephone.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Phone number
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                {patientService && patientService.patient.phone}
              </h5>
            </div>
            <div className="d-flex pt-3">
              <img
                src="/images/calendar.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Expected delivery date
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                {patientService &&
                  patientService.patient.expectedDelivery &&
                  formatDateToDmy(patientService.patient.expectedDelivery)}
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="d-none d-md-block">
              <img
                src="/images/mess.png"
                className="mt-2 pt-1 me-2 ps-5 ms-5"
                alt=""
              ></img>
              <img
                src="/images/Group 415.png"
                className="mt-2 me-2"
                alt=""
                onClick={()=>{handleApproval('approved')}}
              ></img>
              <img src="/images/cros.png" className="mt-2" alt="" 
                onClick={()=>{handleApproval('declined')}}></img>
            </div>
            <div className="d-flex" style={{ paddingTop: "24px" }}>
              <img
                src="/images/gender.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Child's Gender
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                {patientService && patientService.patient.childsGender}
              </h5>
            </div>
            <div className="d-flex pt-3">
              <img
                src="/images/flat.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Services:
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                {patientService && patientService.service.serviceName}
              </h5>
            </div>
            <div className="d-flex pt-3">
              <img
                src="/images/surface1.png"
                className="no1pic"
                style={{ marginLeft: "19px" }}
                alt=""
              ></img>
              <h5
                className=" date-of-birth"
                style={{ marginLeft: "12px", marginBottom: "5px" }}
              >
                Total Cost of Services:
              </h5>
            </div>
            <div className="border-bottom pb-3">
              <h5 className="dateof fw-semibold" style={{ marginLeft: "52px" }}>
                UGX {patientService && patientService.service.serviceCost}
              </h5>
            </div>
          </div>
        </div>

        <h4 className="fw-semibold mt-4">All Transactions</h4>
        <div className="table-responsive">
          <table className="table table-hover mt-2">
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  <input
                    className="form-check-input me-3 p-2"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="form-check-label mt-1"
                    htmlFor="invalidCheck"
                  >
                    Deposit Name
                  </label>
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  Transaction/Deposits
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  Transaction Id
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  Phone Number
                </th>

                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  Status
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.8em",
                    color: "#064FB8",
                  }}
                >
                  Time of Amounts
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ fontSize: "0.9em" }}>
                <th scope="row">
                  <input
                    className="form-check-input me-3 p-2 mt-2"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="form-check-label mt-1 fw-normal mt-2"
                    htmlFor="invalidCheck"
                    style={{ fontSize: "200" }}
                  >
                    John Richards
                  </label>
                </th>
                <td className="pt-3">UGX 150,000</td>

                <td className="pt-3">TNC038343546453</td>

                <td className="pt-3">+91234244355</td>
                <td>
                  <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                    PENDING
                  </span>{" "}
                </td>
                <td className="pt-3">26/02/2023 | 12:42 PM</td>
              </tr>
              <tr style={{ fontSize: "0.9em" }}>
                <th scope="row">
                  <input
                    className="form-check-input me-3 p-2 mt-2"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="form-check-label mt-1 fw-normal mt-2"
                    htmlFor="invalidCheck"
                    style={{ fontSize: "200" }}
                  >
                    John Richards
                  </label>
                </th>
                <td className="pt-3">UGX 150,000</td>

                <td className="pt-3">TNC038343546453</td>

                <td className="pt-3">+91234244355</td>
                <td>
                  <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                    PENDING
                  </span>{" "}
                </td>
                <td className="pt-3">26/02/2023 | 12:42 PM</td>
              </tr>
              <tr style={{ fontSize: "0.9em" }}>
                <th scope="row">
                  <input
                    className="form-check-input me-3 p-2 mt-2"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label
                    className="form-check-label mt-1 fw-normal mt-2"
                    htmlFor="invalidCheck"
                    style={{ fontSize: "200" }}
                  >
                    John Richards
                  </label>
                </th>
                <td className="pt-3">UGX 150,000</td>

                <td className="pt-3">TNC038343546453</td>

                <td className="pt-3">+91234244355</td>
                <td>
                  <span className="badge text-bg-warning p-2 me-2 mt-2 ">
                    PENDING
                  </span>{" "}
                </td>
                <td className="pt-3">26/02/2023 | 12:42 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SinglePatientDetail;
