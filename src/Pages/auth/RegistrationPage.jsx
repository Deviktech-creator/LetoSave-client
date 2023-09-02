import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Imag from "../../Components/Images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";
import Upload from "../../Components/Images/upload.png";
import OTPModal from "../../Components/OTPModal";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const RegistrationPage = () => {
  const { register, token } = useAuth();
  
  const certificationImageInputRef = useRef(null);
  const licenseImageInputRef = useRef(null);
  const [showOTPModal, setShowOTPModal] = useState(false);
  
  const [formData, setFormData] = useState({
    hospitalName: "",
    district: "London",
    subCounty: "London",
    village: "",
    zipCode: "",
    phone: "",
    email: "",
    certificationImage: null,
    licenseImage: null,
  });

  const handleCertificationImageClick = () => {
    certificationImageInputRef.current.click();
  };

  const handleLicenseImageClick = () => {
    licenseImageInputRef.current.click();
  };

  const handleCertificationImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({ ...formData, certificationImage: selectedImage });
  };

  const handleLicenseImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData({ ...formData, licenseImage: selectedImage });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterNow = async (e) => {
    e.preventDefault();
    
    try {
      const formDataForAPI = new FormData();
      formDataForAPI.append("hospitalName", formData.hospitalName);
      formDataForAPI.append("district", formData.district);
      formDataForAPI.append("subCounty", formData.subCounty);
      formDataForAPI.append("village", formData.village);
      formDataForAPI.append("zipCode", formData.zipCode);
      formDataForAPI.append("phone", formData.phone);
      formDataForAPI.append("email", formData.email);
      formDataForAPI.append("certificationImage", formData.certificationImage);
      formDataForAPI.append("licenseImage", formData.licenseImage);

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/hospital-register`,
        formDataForAPI,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      if(response.data.error)(
        toast.error(response.data.error)
        )

      if(response.data.message){
        register(response.data.token)
        toast.success(response.data.message)
      }

      setShowOTPModal(true);
    } catch (error) {
      console.error("Error registering hospital:", error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center  ">
        <div className="container ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col">
              <div
                className="card card-registration py-3"
                style={{ borderColor: "white" }}
              >
                <div className="row g-5 ">
                  <div
                    className="col-md-6 d-none d-md-block rounded"
                    style={{ backgroundColor: "#064FB8" }}
                  >
                    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                      <img src={Imag} alt="LOGO" className="w-15 h-15"></img>
                      <h1
                        className="text-white fw-bold"
                        style={{ letterSpacing: "4px", fontSize: "55px" }}
                      >
                        LetoSave
                      </h1>
                    </div>
                  </div>
                  <form onSubmit={handleRegisterNow} className="col-md-6 ">
                    <div className="card-body text-black ">
                      <h2
                        className="mb-2 d-flex justify-content-center fw-bold "
                        style={{ color: "#064FB8" }}
                      >
                        Get Started
                      </h2>
                      <div className="d-flex justify-content-center">
                        Already Have Account?
                        <div className="ms-1">
                          <Link
                            to="/login"
                            className="text-decoration-none fw-medium"
                            style={{ color: "#064FB8" }}
                          >
                            Sign In
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className=" mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              placeholder="Hospital Name"
                              name="hospitalName"
                              value={formData.hospitalName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <Form.Select
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            size="lg"
                          >
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="New York">New York</option>
                          </Form.Select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <Form.Select
                            name="subCounty"
                            value={formData.subCounty}
                            onChange={handleInputChange}
                            size="lg"
                          >
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                            <option value="New York">New York</option>
                          </Form.Select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Village"
                              name="village"
                              value={formData.village}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="number"
                              className="form-control form-control-lg"
                              placeholder="Zip Code"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Email Address"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="certificationImageInput">
                          Upload Certification of registration
                        </label>
                        {formData.certificationImage ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxHeight: "150px",
                                overflow: "hidden",
                                margin: "10px 0",
                                borderRadius: "15px",
                              }}
                              onClick={handleCertificationImageClick}
                            >
                              <img
                                src={URL.createObjectURL(
                                  formData.certificationImage
                                )}
                                alt="Certification"
                                style={{ width: "100%" }}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleCertificationImageChange}
                                style={{ display: "none" }}
                                ref={certificationImageInputRef}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="upload-container mb-4 mt-1 position-relative">
                              <div className="upload-icon mt-3">
                                <img
                                  src={Upload}
                                  alt="Upload "
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </div>
                              <p className="upload-text mb-1">
                                Click to upload or drag and drop
                              </p>
                              <p
                                className="text-dark mb-3"
                                style={{ color: "black" }}
                              >
                                Maximum file size 50 MB
                              </p>
                              <input
                                type="file"
                                id="certificationImageInput"
                                accept="image/*"
                                onChange={handleCertificationImageChange}
                                className="custom-file-input"
                              />
                              <label
                                htmlFor="certificationImageInput"
                                className="upload-label"
                              ></label>
                            </div>
                          </>
                        )}

                        <label htmlFor="licenseImageInput">
                          Hospital License
                        </label>
                        {formData.licenseImage ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                maxHeight: "150px",
                                overflow: "hidden",
                                margin: "10px 0",
                                borderRadius: "15px",
                              }}
                              onClick={handleLicenseImageClick}
                            >
                              <img
                                src={URL.createObjectURL(formData.licenseImage)}
                                alt="Certification"
                                style={{ width: "100%" }}
                              />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleLicenseImageChange}
                                style={{ display: "none" }}
                                ref={licenseImageInputRef}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="upload-container mb-4 mt-1 position-relative">
                              <div className="upload-icon mt-3">
                                <img
                                  src={Upload}
                                  alt="Upload "
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </div>
                              <p className="upload-text mb-1">
                                Click to upload or drag and drop
                              </p>
                              <p
                                className="text-dark mb-3"
                                style={{ color: "black" }}
                              >
                                Maximum file size 50 MB
                              </p>
                              <input
                                type="file"
                                id="licenseImageInput"
                                accept="image/*"
                                onChange={handleLicenseImageChange}
                                className="custom-file-input"
                              />
                              <label
                                htmlFor="licenseImageInput"
                                className="upload-label"
                              ></label>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="d-grid gap-2">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={
                            !formData.hospitalName ||
                            !formData.district ||
                            !formData.subCounty ||
                            !formData.village ||
                            !formData.zipCode ||
                            !formData.phone ||
                            !formData.email ||
                            !formData.certificationImage ||
                            !formData.licenseImage
                          }
                        >
                          Register Now
                        </Button>

                        <OTPModal
                          show={showOTPModal}
                          onClose={() => setShowOTPModal(false)}
                          phone={formData.phone}
                          token={token}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPage;
