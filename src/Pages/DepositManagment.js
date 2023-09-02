import React from 'react'


const DepositManagment = () => {
  return (
    <>
       <div className='' style={{marginTop:"80px"}}>
       <div className='table-responsive'>
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>
                                    <input className="form-check-input me-3 p-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1" for="invalidCheck" >
                                        Patient's Name
                                    </label></th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Service</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction Date</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction ID</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Phone Number</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Transaction Status</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Amount</th>
                                <th scope="col" style={{ backgroundColor: "#EFF5FF", fontSize: "0.7em", color: "#064FB8" }}>Balance</th>
                                

                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-success p-2 me-2 mt-2 ">SUCCESSFUL</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-danger p-2 me-2 mt-2 ">FAILED</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-success p-2 me-2 mt-2 ">SUCCESSFUL</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-danger p-2 me-2 mt-2 ">FAILED</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-success p-2 me-2 mt-2 ">SUCCESSFUL</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-danger p-2 me-2 mt-2 ">FAILED</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-warning p-2 me-2 mt-2 ">PENDING</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-success p-2 me-2 mt-2 ">SUCCESSFUL</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>
                            <tr style={{ fontSize: "0.9em", }}>
                                <th scope="row"><input className="form-check-input me-3 p-2 mt-2" type="checkbox" value="" id="invalidCheck" required />
                                    <label className="form-check-label mt-1 fw-normal mt-2" for="invalidCheck" style={{ fontSize: '200' }}>
                                        Alexa Cave
                                    </label>
                                </th>
                                <td className='pt-3'>Private</td>
                                <td>15 july, 2023 <br></br>12:42 PM</td>
                                
                                <td className='pt-3'>TTCNI3453647657575</td>
                                <td className='pt-3'>+91 2345233546</td>
                                <td ><span className="badge text-bg-danger p-2 me-2 mt-2 ">FAILED</span> </td>
                                <td className='pt-3'>UGX 170,150</td>
                                <td className='pt-3'>UGX 850,500</td>
                            </tr>

                            
                            
                           
                            
                          
                        </tbody>
                    </table>
                    </div>
                    {/* <h1>hello wellocomer to a e dgfdsagd </h1> */}

                    
                </div>
    </>
  )
}

export default DepositManagment
