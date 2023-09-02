import React from 'react'

import log from "../Components/Assets/Icons/Group 181.png"
import log1 from "../Components/Assets/Icons/3.png"
import log2 from "../Components/Assets/Icons/1.png"
import log3 from "../Components/Assets/Icons/2.png"



import one from "../Components/Assets/Icons/delete.png"

const NotificationCenter = () => {
    return (
        <>
            <div className="container-fluid " style={{ marginTop: "90px" }}>
                <div className='d-flex justify-content-between'>


                    <h5 style={{ color: '#064FB8' }}>
                        New for you
                    </h5>
                    <h5 style={{ color: '#064FB8' }}>
                        Mark all as Read
                    </h5>

                </div>
                <div className="card ">
                    <div className="card-body d-flex justify-content-between">

                        <div className='d-flex'>
                            <img src={log} alt='' className='pe-3'></img>
                            <div>
                                <h5 style={{ color: '#064FB8' }}>
                                    Successfull Payment Confirmation
                                </h5>
                                <p>Your payment is Successfull transferred..</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <img src={one} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body d-flex justify-content-between">

                        <div className='d-flex'>
                            <img src={log1} alt='' className='pe-3'></img>
                            <div>
                                <h5 style={{ color: '#064FB8' }}>
                                    Expected Delivery
                                </h5>
                                <p>your delivery date is 28 july, 2023 so Please check up to near hospital..</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <img src={one} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body d-flex justify-content-between">

                        <div className='d-flex'>
                            <img src={log2} alt='' className='pe-3'></img>
                            <div>
                                <h5 style={{ color: '#064FB8' }}>
                                    New Registration have been Successfully
                                </h5>
                                <p>your delivery date is 28 july, 2023 so Please check up to near hospital..</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <img src={one} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body d-flex justify-content-between">

                        <div className='d-flex'>
                            <img src={log3} alt='' className='pe-3'></img>
                            <div>
                                <h5 style={{ color: '#064FB8' }}>
                                    Check your covid test results
                                </h5>
                                <p>52 minutes ago</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <img src={one} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className="card ">
                    <div className="card-body d-flex justify-content-between">

                        <div className='d-flex'>
                            <img src={log3} alt='' className='pe-3'></img>
                            <div>
                                <h5 style={{ color: '#064FB8' }}>
                                    Nearinf Expected delivery dates
                                </h5>
                                <p>24 Dec 2023 | your delivery near soon so Please check-up normal.</p>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <img src={one} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotificationCenter
