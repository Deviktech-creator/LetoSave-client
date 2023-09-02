import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useAuth } from '../contexts/AuthContext';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


const ServiceManagmentAdd = () => {
  const { serviceId } = useParams();

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    serviceName: "",
    wardType: "General",
    roomType: "Standard",
    deliveryType: "Normal",
    serviceDescription: "",
    serviceCost: "",
  });

  const [includesPostnatalCare, setIncludesPostnatalCare] = useState(false);

  useEffect(() => {
    if(serviceId){
    const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/hospital-service/${serviceId}`;
  
      axios
        .get(apiUrl)
        .then((response) => {
          if (response.data) {
            setFormData({
              serviceName: response.data.serviceName,
              wardType: response.data.wardType,
              roomType: response.data.roomType,
              deliveryType: response.data.deliveryType,
              serviceDescription: response.data.serviceDescription,
              serviceCost: response.data.serviceCost,
            });
            setIncludesPostnatalCare(response.data.includePostnatalCare);
          }
        })
        .catch((error) => {
          console.error("Error fetching service data:", error);
        });
      }
    }, [serviceId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePostnatalCareChange = (e) => {
    setIncludesPostnatalCare(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const finalFormData = {
        serviceName: formData.serviceName,
        wardType: formData.wardType,
        roomType: formData.roomType,
        deliveryType: formData.deliveryType,
        serviceDescription: formData.serviceDescription,
        serviceCost: formData.serviceCost,
        doctorFee: formData.doctorFee,
        includesPostnatalCare: includesPostnatalCare,
        hospitalId: currentUser._id,
      };
  
      if (serviceId) {
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/hospital-service/${serviceId}`;
        const response = await axios.put(apiUrl, finalFormData);
  
        if (response.status === 200) {
          toast.success("Service updated successfully");
          navigate('/user/service-Management');
        } else {
          toast.error("Error updating service");
        }
      } else {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/hospital-service`, finalFormData);
  
        if (response.status === 201) {
          toast.success("Service created successfully");
          navigate('/user/service-Management');
        } else {
          toast.error("Error creating service");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred");
    }
  };
  
  
  

  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <Form
          style={{ maxWidth: "600px", margin: "0 auto" }}
          onSubmit={handleSubmit}
        >
          <h3>Add Service</h3>
          <Form.Group className="mb-4">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Ward Type</Form.Label>
            <Form.Select
              size="lg"
              name="wardType"
              value={formData.wardType}
              onChange={handleInputChange}
              required
            >
              <option value="General">General</option>
              <option value="Private">Private</option>
              <option value="Specialized">Specialized</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Room Type</Form.Label>
            <Form.Select
              size="lg"
              name="roomType"
              value={formData.roomType}
              onChange={handleInputChange}
              required
            >
              <option value="Standard">Standard</option>
              <option value="Deluxe">Deluxe</option>
              <option value="Suite">Suite</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Delivery Type</Form.Label>
            <Form.Select
              size="lg"
              name="deliveryType"
              value={formData.deliveryType}
              onChange={handleInputChange}
              required
            >
              <option value="Normal">Normal</option>
              <option value="C-Section">C-Section</option>
              <option value="Water Birth">Water Birth</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Service Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleInputChange}
              placeholder="Type here..."
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Cost (UGX)</Form.Label>
            <div className="input-group">
              <span
                className="input-group-text px-4"
                id="basic-addon3"
                style={{ backgroundColor: "#064FB8", color: "white" }}
              >
                UGX
              </span>
              <input
                type="number"
                className="form-control"
                name="serviceCost"
                value={formData.serviceCost}
                onChange={handleInputChange}
                id="basic-addon3"
                aria-describedby="basic-addon3"
                required
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Includes Postnatal Care</Form.Label>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="postnatalCareSwitch"
                checked={includesPostnatalCare}
                onChange={handlePostnatalCareChange}
              />
              <label className="form-check-label" htmlFor="postnatalCareSwitch">
                {includesPostnatalCare ? "Yes" : "No"}
              </label>
            </div>
          </Form.Group>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              style={{ backgroundColor: "#064FB8" }}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ServiceManagmentAdd;
