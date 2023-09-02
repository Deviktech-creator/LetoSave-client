import React from 'react'
import Form from 'react-bootstrap/Form';


const SuportAnChart = () => {
    return (
        <>
            <div className='helo'  >
                <Form className="support-form" style={{ margin: "0 auto", position: 'fixed', bottom: '2rem'}}>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Typing"
                            aria-label="Type your message"
                        />

                    </div>
                </Form>
            </div>
        </>
    )
}

export default SuportAnChart
