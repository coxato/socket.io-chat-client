import React from 'react';
import './input.css';

const InputField = ({ handleChange, handleTyping, sendMessage, message }) => (
    <form className="form" style={{display: 'flex'}}>
        <div className="field-input" style={{width: '100%'}}>
            <input
                type="text"
                placeholder="Type a message..."
                onChange={handleChange}
                onKeyUp={handleTyping}
                value={message}
            />
        </div>
        <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default InputField;