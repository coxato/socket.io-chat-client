import React from 'react';
import './input.css';

const InputField = ({ setMessage, sendMessage, message }) => (
    <form className="form" style={{display: 'flex'}}>
        <div className="field-input" style={{width: '100%'}}>
            <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
        </div>
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default InputField;