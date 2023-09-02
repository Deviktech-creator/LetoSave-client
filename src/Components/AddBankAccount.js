import React from 'react'
import Form from 'react-bootstrap/Form';


const AddBankAccount = () => {
    return (
        <>
            <div className="container " style={{ marginTop: "70px" }}>
                <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <Form.Group className="mb-4" >
                        <Form.Label>Account Holder's Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Bank Branch</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Bank Swift Code/BIC/IFSC</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>


                    <div className="d-grid gap-2 ">
                        <button className="btn btn-primary btn-lg" type="button" style={{ backgroundColor: "#064FB8" }}>Save</button>

                    </div>
                </Form>
            </div>
        </>
    )
}

export default AddBankAccount
