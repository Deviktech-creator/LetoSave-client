import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // eslint-disable-next-line 
import MsgModal from "../Components/MsgModal";

const PatientManagementPage = () => {
  const navigate = useNavigate();
  const { token, formatDate } = useAuth();
  const [services, setServices] = useState([]); // eslint-disable-next-line 
  const [showMsgModal, setShowMsgModal] = useState(false);

  const handleApproval = (status, patientServiceId) => {
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
        const updatedServices = services.map((service) => {
          if (service._id === patientServiceId) {
            service.status = status;
          }
          return service;
        });
        setServices(updatedServices);

        toast.success(response.data.message);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };

  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/related-hospital-services`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        setServices(response.data.patientServices);
      })
      .catch((error) => {
        console.error("Error fetching related hospital services:", error);
      }); // eslint-disable-next-line
  }, [token]);

  const handleOpenPatientDeatils = (patientServiceId) => {
    navigate(`/user/single-patient-detail/${patientServiceId}`);
  };
 // eslint-disable-next-line 
  const handleOpenMsgModal = () => {
    setShowMsgModal(true);
  };

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "55px" }}>
        <div className="d-flex justify-content-end">
          <Form inline>
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
                  <img src="/images/filter.png" className="me-1 mb-1" alt="" />
                  Filter
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="mt-4 table-responsive">
          <table className="table table-hover text-center">
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
                  Patient's Name
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Date of Reg.
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Cost of Services
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Amount Saved
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Re. Balance
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Exp. Del. Date
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#EFF5FF",
                    fontSize: "0.7em",
                    color: "#064FB8",
                  }}
                >
                  Patient's Status
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id} style={{ fontSize: "0.9em" }}>
                  <th scope="row">
                    <input
                      className="form-check-input me-3 p-2 mt-2"
                      type="checkbox"
                      value=""
                      id={`invalidCheck_${service._id}`}
                      required
                    />
                    <label
                      className="form-check-label mt-1 fw-normal mt-2"
                      htmlFor={`invalidCheck_${service._id}`}
                      style={{ fontSize: "200" }}
                      onClick={() => {
                        handleOpenPatientDeatils(service._id);
                      }}
                    >
                      {service.patient.name}
                    </label>
                  </th>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                    >
                    {/* {console.log(service._id)} */}
                    {formatDate(service.time)}
                  </td>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                  >{`UGX ${service.service.serviceCost}`}</td>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                  >
                    {/* UGX 343,546 */}
                  </td>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                  >
                    {/* UGX 343,546 */}
                  </td>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                  >
                    {formatDate(service.patient.expectedDelivery)}
                  </td>
                  <td
                    className="pt-3"
                    onClick={() => {
                      handleOpenPatientDeatils(service._id);
                    }}
                  >{`+${service.patient.phone}`}</td>
                  <td>
                    <span
                      className={`badge text-bg-${
                        service.status === "pending"
                          ? "warning"
                          : service.status === "approved"
                          ? "success"
                          : "danger"
                      } p-2 me-2`}
                    >
                      {service.status.toUpperCase()}
                    </span>
                    <img
                      src="/images/mess.png"
                      className="me-2"
                      alt=""
                      onClick={() => {
                        handleOpenPatientDeatils(service._id);
                      }}
                      // onClick={handleOpenMsgModal}
                    />
                    {/* <MsgModal
                      show={showMsgModal}
                      onClose={() => setShowMsgModal(false)}
                      phone={service.patient.phone}
                    /> */}
                    <img
                      src="/images/Group 415.png"
                      className="me-2"
                      alt=""
                      onClick={() => {
                        handleApproval("approved", service._id);
                      }}
                    />
                    <img
                      src="/images/cros.png"
                      className=""
                      alt=""
                      onClick={() => {
                        handleApproval("declined", service._id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PatientManagementPage;
