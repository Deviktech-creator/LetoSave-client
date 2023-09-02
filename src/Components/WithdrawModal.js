import React from 'react' // eslint-disable-next-line 
import { Modal, Button } from 'react-bootstrap'; // eslint-disable-next-line 
import { Link } from 'react-router-dom';
import logo from "../Components/Images/delete.png"
import Form from 'react-bootstrap/Form';


const WithdrawModal = ({ show, onClose, onLogout }) => {
    return (
        <>
            <Modal show={show} onHide={onClose} centered>
                <img src={logo} alt='' className='mt-2 cursor-pointer ' onClick={onClose} style={{ width: "30px", height: "30px", position: "absolute", top: "10px", right: "10px" }}></img>
                <Modal.Header className='border-0 mt-4 d-flex justify-content-center'>
                    <Modal.Title className='fw-bold ' style={{ color: "#064FB8" }}>Withdraw Payment</Modal.Title>
                </Modal.Header>
                <div className='text-center border-0' >
                    Money would be deposited in the following bank account
                </div>
                <Modal.Body >
                    <Form.Select size="lg">
                        <option>Select Bank Account</option>
                    </Form.Select>
                    <div className="d-flex justify-content-between mt-4 ">
                        <div className="text-start ms-4">
                            <h6 className='fw-semibold'>Account Name</h6>
                            <h5 className='fw-bold' style={{ color: "#064FB8" }}>Cristina Thomas</h5>
                        </div>
                        <div className="text-start me-4">
                            <h6 className='fw-semibold'>Account Number</h6>
                            <h5 className='fw-bold' style={{ color: "#064FB8" }}>9817364335643</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-3 ">
                        <div className="text-start ms-4">
                            <h6 className='fw-semibold'>Account Type</h6>
                            <h5 className='fw-bold' style={{ color: "#064FB8" }}>Saving Account</h5>
                        </div>
                        <div className="text-start me-5">
                            <h6 className='fw-semibold'>IFSC Code</h6>
                            <h5 className='fw-bold' style={{ color: "#064FB8" }}>BNB0001235</h5>
                        </div>
                    </div>
                    <Form.Group className="mb-4 mt-4" >
                        <Form.Label className='text-start'>Enter Amount</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <div className="d-grid gap-2 mt-1">
                        <button className="btn btn-primary btn-lg" type="button" style={{ backgroundColor: "#064FB8" }}>Submit</button>
                    </div>
                </Modal.Body>

                <Modal.Footer className='border-0 d-flex justify-content-center mb-2' style={{ marginTop: "-15px" }}>
                    Available widthdrawable balance in <b>UGX 750,000</b> and minimum withdraw limit.
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default WithdrawModal
