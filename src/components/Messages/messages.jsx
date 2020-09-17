import React from 'react';
import Message from '../Message/message';
import ScrollToBottom from 'react-scroll-to-bottom';

function Messages({ messages, username }) {
    return(
        <div className="messages-container">
            <ScrollToBottom>
                {
                    messages.map( (message, index) => {
                        return <Message message={message} username={username} key={index} />
                    })
                }
            </ScrollToBottom>
        </div>
    )
}

export default Messages;