import React from 'react' // eslint-disable-next-line 
import { Badge, Button, Col, Form, Row } from 'react-bootstrap'
import filter from "../Components/Assets/Icons/filter.png"
import pic from "../Components/Assets/Icons/pic.png"
import pic1 from "../Components/Images/detail.png"
 // eslint-disable-next-line 
import ni1 from "../Components/Images/cros.png" // eslint-disable-next-line 
import ni2 from "../Components/Images/mess.png" // eslint-disable-next-line 
import ni3 from "../Components/Assets/Icons/Group 415.png"




const SinglePatientDetail = () => {
    return (
        <>
            <div className="container-fluid p-3 p-md-5" style={{ marginTop: "30px" }}>
                <div className='d-flex justify-content-end'>
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
                                <Button variant="secondary" size="lg" active style={{ backgroundColor: "#6787B6" }}>
                                    <img src={filter} className='me-1 mb-1' alt='' />
                                    Filter
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                {/* <div className='mt-5 ms-3 d-flex'>
                    <div className='ms-3 me-4'>
                        <img src={pic} alt='' className='img-fluid'></img>
                    </div>
                    <div>
                        <img src={pic1} alt='' className='img-fluid'></img>
                    </div>
                </div> */}

                <div>
                    <div className="row mt-5  d-none d-md-flex">

                        <div className="col-md-12 d-flex ">
                            <div className="ms-4 me-4">
                                <img src={pic} alt="" className="img-fluid" />
                            </div>
                            <div>
                                <img src={pic1} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 d-md-none">

                        <div className="col-10 offset-1 d-flex " />
                        <div className="mb-3">
                            <img src={pic} alt="" className="img-fluid" />
                        </div>
                        <div>
                            <img src={pic1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>


                {/* <div className='mt-5 ms-3 '>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex ">
                                <img src={pic} alt=""  />
                                <h2 className="fw-bold">Cive Slauw</h2>
                                <p className='bg-success' style={{padding:'3px'}}>APPROVED</p>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-center">
                                <img src={ni2} alt="" />
                                <img src={ni3} alt="" />
                                <img src={ni1} alt="" />
                            </div>
                        </div>
                    </div>

                </div> */}



                <h4 className='fw-semibold mt-5'>All Transactions</h4>
                <div className='table-responsive'>
                    <table className="table table-hover mt-2">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" for="invalidCheck" >
                                        Deposit Name
                                    </label></th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Transaction/Deposits</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Transaction Id</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Phone Number</th>

                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Status</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.8em", color: "#064FB8" }}>Time of Amounts</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        John Richards
                                    </label>
                                </th>
                                <td className='pt-3'>UGX 150,000</td>

                                <td className='pt-3'>TNC038343546453</td>

                                <td className='pt-3'>+91234244355</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>26/02/2023 | 12:42 PM</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}

export default SinglePatientDetail
