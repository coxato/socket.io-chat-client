import React from 'react';
import './input.css';

const InputField = ({ handleChange, handleTyping, sendMessage, message }) => (
    <div className="form" style={{display: 'flex'}}>
        <div className="field-input" style={{width: '100%'}}>
            <input
                type="text"
                placeholder="Type a message..."
                onChange={handleChange}
                onKeyUp={handleTyping}
                value={message}
            />
        </div>
        <button className="sendButton" type="submit" onClick={e => sendMessage(e)}>Send</button>
    </div>
    )
    
export default InputField;


    // con el onSubmit y con etiquetas form, no quiso servir

    // <form className="form" style={{display: 'flex'}} onSubmit={sendMessage}>
    //     <div className="field-input" style={{width: '100%'}}>
    //         <input
    //             type="text"
    //             placeholder="Type a message..."
    //             onChange={handleChange}
    //             onKeyUp={handleTyping}
    //             value={message}
    //         />
    //     </div>
    //     <button className="sendButton" type="submit" onClick={e => sendMessage(e)}>Send</button>
    // </form>