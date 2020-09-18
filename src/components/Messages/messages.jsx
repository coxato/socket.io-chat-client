import React from 'react';
import Message from '../Message/message';
import ScrollToBottom from 'react-scroll-to-bottom';

import './messages.css';

function Messages({ messages, username }) {
    return(
        <ScrollToBottom className="messages-container">
            {
                messages.map( (message, index) => {
                    return <Message message={message} username={username} key={index} />
                })
            }
        </ScrollToBottom>
    )
}

export default Messages;