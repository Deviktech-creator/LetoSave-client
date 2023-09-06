import React from 'react'
import Form from 'react-bootstrap/Form';


const SuportAnChart = () => {
    return (
        <>
            <div className='helo' style={{margin: '50px 0 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '87vh'}}>
                <div></div>
                <Form className="support-form">
                    <div style={{maxHeight: '430px', overflow: 'auto', margin: '10px'}}>
                    <div className="message-bubble sender-message">
                    hello ai 
                    </div>
                    <div className="message-bubble receiver-message">
                    hello hospital hello how are you
                    </div>
                    </div>
                    <div className="chat-input" style={{margin: 'auto 0 10px 0'}}>
                        <input
                            type="text"
                            placeholder="Typing"
                            aria-label="Type your message"
                            style={{padding: '10px 15px'}}
                        />

                    </div>
                </Form>
            </div>
        </>
    )
}

export default SuportAnChart
