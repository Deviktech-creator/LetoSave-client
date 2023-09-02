import React from 'react'


const OTP = ({ show, handleClose }) => {
    return (
        <>
            <div className={`modal ${show ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="overlay" onClick={handleClose}></div>
                            <div className="modal-inner">
                                <div className="modal-header">
                                    <h5 className="modal-title">Enter OTP Code</h5>
                                    <button type="button" className="btn-close" onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Enter the OTP code you received:</p>
                                    <div className="otp-inputs d-flex gap-5 rounded">
                                        <input type="password" maxLength="1" className="form-control rounded-4" />
                                        <input type="password" maxLength="1" className="form-control rounded-4" />
                                        <input type="password" maxLength="1" className="form-control rounded-4" />
                                        <input type="password" maxLength="1" className="form-control rounded-4" />
                                    </div>
                                    <p>OTP codes are valid for a limited time.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                    <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OTP

