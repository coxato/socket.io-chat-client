import React, { useState, useEffect, createContext } from 'react';
import io from 'socket.io-client';
import querySearh from 'query-string';
import {
    SERVER_URL 
} from '../config/config';

// socket instance
let socket;

const ChatContext = createContext();

function ChatContextHOC({ children }) {
    const [username, setUserName] = useState('');
    const [chatRoom, setchatRoom] = useState('');
    const [membersTyping, setMembersTyping] = useState([]);

    // join to chat
    useEffect(() => {
        const { name, room } = querySearh.parse(window.location.search);
        // socket.io server connection
        socket = io(`${SERVER_URL}`);
        setUserName(() => name);
        setchatRoom(() => room);

        socket.emit('join-chat', {name, room}, (err) => {
            if(err) alert(err.error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, []);


    return(
        socket
        ? 
        <ChatContext.Provider value={{ socket, username, chatRoom, membersTyping, setMembersTyping }}>
            {children}
        </ChatContext.Provider>
        :
        null
    )
}

export {
    ChatContext,
    ChatContextHOC
}