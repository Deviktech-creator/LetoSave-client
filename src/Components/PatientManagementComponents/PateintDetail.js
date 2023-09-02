import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import filter from "../Assets/Icons/filter.png"
import msk from "../Assets/Icons/pic.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const PateintDetail = () => {
    return (
        <>
            <div className="container-fluid " style={{ marginTop: "90px" }}>
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
                <div className="my-5">
                    <Row>
                        {/* Picture on the left */}
                        <Col lg={4} xs={12} className="mb-4">
                            <img
                                src={msk}
                                alt="Example"
                                className="img-fluid rounded"
                            />
                        </Col>

                        {/* Two columns on larger screens */}
                        <Col lg={4} xs={12} className="mb-4">
                            <div className="bg-light p-3">
                                <h3>List 1</h3>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} className="mb-4">
                            <div className="bg-light p-3">
                                <h3>Column 2</h3>
                                <p>Content for column 2.</p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </>
    )
}

export default PateintDetail
