import React from 'react';
// components
import { ChatContextHOC } from '../../contexts/chatContext';
import ChatComponent from './chat';

function Chat() {
    return(
        <ChatContextHOC>
            <ChatComponent />
        </ChatContextHOC>
    )
}

export default Chat;