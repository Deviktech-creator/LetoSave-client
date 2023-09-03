import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const ServiceManagmentPage = () => {
  const { currentUser } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hospitalId = currentUser && currentUser._id;
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/hospital-services/${hospitalId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [currentUser]);

  return (
    <>
      <div className="container-fluid " style={{ marginTop: "80px" }}>
        <div className="d-flex justify-content-end">
          <Form inline>
            <Row>
              <Col xs="auto">
                <Link to="/user/hospital-service">
                  <Button
                    variant="secondary"
                    className="add-butoon"
                    size="lg"
                    active
                    style={{ backgroundColor: "#064FB8" }}
                  >
                    + Add New
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="mt-3">
          {loading ? (
            <div>Loading...</div>
          ) : services.length === 0 ? (
            <div>No services available.</div>
          ) : (
            <div className="table-responsive">
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
                      <input
                        className="form-check-input me-1 p-2"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label
                        className="form-check-label mt-1"
                        for="invalidCheck"
                      >
                        Service Name
                      </label>
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Ward Type
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Room Type
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Delivery Type
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Service Description
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Cost
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Postanatal Care
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    >
                      Doctor's Fees
                    </th>
                    <th
                      scope="col"
                      style={{
                        backgroundColor: "#EFF5FF",
                        fontSize: "0.7em",
                        color: "#064FB8",
                      }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr style={{ fontSize: "0.9em" }} key={service._id}>
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
                        >
                          {service.serviceName}
                        </label>
                      </th>
                      <td className="pt-3">{service.wardType}</td>
                      <td>{service.roomType}</td>
                      <td className="pt-3">{service.deliveryType}</td>
                      <td className="pt-3">{service.serviceDescription}</td>
                      <td className="pt-3">{`UGX ${service.serviceCost}`}</td>
                      <td className="pt-3">
                        {service.includePostnatalCare ? "Yes" : "No"}
                      </td>
                      
                      <td className="pt-3">{service.doctorFee && `UGX ${service.doctorFee}`}</td>
                      <td>
                        <Link to={`/user/hospital-service/${service._id}`}>
                          <img src="/images/pin.png" className="me-2" alt="" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceManagmentPage;
