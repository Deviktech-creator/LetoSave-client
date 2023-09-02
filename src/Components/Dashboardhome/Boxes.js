import React from 'react';

const Boxes = () => {
    const boxes = [
        { number: 512, heading: 'Expectant Mothers', color: 'bg-danger' },
        { number: "UGX 1,256,234", heading: 'Expected Revenue', color: 'bg-success' },
        { number: "UGX 352,000", heading: 'Total Deposits', color: 'bg-primary' },
        { number: 25, heading: 'Total Delivery', color: 'bg-warning' },
    ];

    return (
        <>
            <div className="container-fluid " style={{ marginTop: "80px" }}>
                <div className="row">
                    {boxes.map((box, index) => (
                        <div key={index} className="col-12 col-md-3">
                            <div className={`box ${box.color} text-white text-center mb-4 pt-4 pb-4 rounded`}>
                                <div className="number-for-boxes mb-3" style={{ fontSize: '33px', fontWeight: "bolder" }}>{box.number}</div>
                                <div className="heading-for-boxes" style={{ fontSize: '17px', fontWeight: "600" }}>{box.heading}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Boxes;
