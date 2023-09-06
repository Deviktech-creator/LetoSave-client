import React, { useState, useRef, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-hot-toast";

const MsgModal = ({ show, onClose, phone }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef();

  useEffect(() => {
    if (show) {
      textareaRef.current.focus();
    }
  }, [show]);

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSendMessage = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/send-message`;

      const requestData = {
        phoneNumber: phone,
        message: message,
      };

      const response = await axios.post(apiUrl, requestData);

      if (response.status === 200) {
        console.log(response);
        toast.success(response.data.message);
        onClose();
        setMessage('');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message");
    }
  };

  

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header className="border-0 mt-4 d-flex justify-content-center">
        <Modal.Title className="fw-bold " style={{ color: "#064FB8" }}>
          Send to +{phone}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center border-0">
        <textarea
          className="form-control rounded-4 mt-4"
          rows="4"
          value={message}
          onChange={handleMessageChange}
          ref={textareaRef}
        />
        <div className="d-grid gap-2 mt-5 mb-5">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleSendMessage}
            type="button"
            style={{ backgroundColor: "#064FB8" }}
            disabled={!message}
          >
            Send Message
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default MsgModal;
