import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const OTPModal = ({ show, onClose, phone, token }) => {
    const navigate = useNavigate();
  const [count, setCount] = useState(30);

  const [otpInputs, setOTPInputs] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      onClose();
    }
  }, [count, onClose]);

  useEffect(() => {
    if (show) {
      inputRefs.current[0].focus();
      setOTPInputs(["", "", "", ""])
      setCount(30);
    }
  }, [show]);

  const handleOTPChange = (index, value) => {
    if (value.match(/^\d{0,1}$/)) {
      const newOTPInputs = [...otpInputs];
      newOTPInputs[index] = value;
      setOTPInputs(newOTPInputs);

      if (index < otpInputs.length - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleContinue = async () => {
    try {
      const enteredOTP = otpInputs.join("");
      const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/hospital-verify-phone-otp`;
      const requestData = {
        pin: enteredOTP,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }; // eslint-disable-next-line
      const response = await axios.post(apiUrl, requestData, config);
      toast.success('Otp Verify Success');
      navigate('/create-password')
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleContinue();
    }
  };

  const allInputsFilled = otpInputs.every((input) => input !== "");

  return (
    <Modal show={show} onHide={onClose} centered onKeyDown={handleKeyDown}>
      <Modal.Header className="border-0 mt-4 d-flex justify-content-center">
        <Modal.Title className="fw-bold " style={{ color: "#064FB8" }}>
          Enter Code
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center border-0">
        Enter the 4-digit verification sent to {phone}
        <div className="otp-inputs d-flex gap-2 rounded mt-4">
          {otpInputs.map((value, index) => (
            <input
              key={index}
              type="password"
              maxLength="1"
              className="form-control rounded-4 text-center"
              value={value}
              onChange={(e) => handleOTPChange(index, e.target.value)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <p className="fs-5 mt-4 text-center">
          Resend code in {count} second{count !== 1 ? "s" : ""}
        </p>
        <div className="d-grid gap-2 mt-5 mb-5">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleContinue}
            type="button"
            style={{ backgroundColor: "#064FB8" }}
            disabled={!allInputsFilled}
          >
            Continue
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OTPModal;
