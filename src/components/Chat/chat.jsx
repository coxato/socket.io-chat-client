import React, { useState, useEffect } from 'react';
import querySearh from 'query-string';
import io from 'socket.io-client';
import {
    SERVER_URL 
} from '../../config/config';
// components
import InfoBar from '../InfoBar/infoBar';
import InputField from '../InputField/inputField';
import Messages from '../Messages/messages';

let socket;
// typing timeout
let typingTimer;


function Chat() {    
    const [username, setUserName]           = useState('');
    const [chatRoom, setchatRoom]           = useState('');
    const [message, setMessage]             = useState('');
    const [messages, setMessages]           = useState([]);
    const [membersTyping, setMembersTyping] = useState([]);
    
    // join to chat
    useEffect(() => {
        // params in url
        const { name, room } = querySearh.parse(window.location.search);
        // socket.io server connection
        socket = io(`${SERVER_URL}`);
        setUserName(() => name);
        setchatRoom(() => room);

        socket.emit('join-chat', {name, room}, (err) => {
            // alert(err.error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, []);


    // listen for socket.io events
    useEffect(() => {
        // message
        socket.on('message', message => {
            setMessages(m => [
                ...m,
                message
            ]);
        })
        // user typing
        socket.on('typing', userTyping => {
            setMembersTyping( members => {
              if(!members.includes(userTyping)) return [...members, userTyping];
              else return members;
            });
        });
        // user stop typing
        socket.on('stop-typing', userStopTyping => {
            setMembersTyping( members => members.filter( m => m !== userStopTyping) );
        });
    }, []);

    
    // componentWillUnmount for typing timer
    useEffect(() => {
        return () => {
            clearTimeout(typingTimer);
        }
    }, []);


    // handle input onchange
    const handleChange = (ev) => setMessage(ev.target.value);
    

    // handle input key up
    const handleTyping = (ev) => {
        ev.preventDefault();
        clearTimeout(typingTimer);
        if(ev.key === 'Enter') { sendMessage(ev); return; }
        
        // typing logic
        let finishTypingInterval = 2000;
        if(ev.target.value){
            socket.emit('typing', username);
            typingTimer = setTimeout( hideMemberTyping, finishTypingInterval);
        }
    }


    // hide the username when user finish typing
    const hideMemberTyping = () => socket.emit('stop-typing', username);


    // send message
    const sendMessage = (ev) => {
        ev.preventDefault();
        // clear timeout and stop say "is typing"
        clearTimeout(typingTimer);

        if(message){
            socket.emit('send-message', message, () => {
                setMessage('');
                hideMemberTyping();
            });
        }
    }


    // ===== render =====
    return (
        <div className="container-full">
            <div className="container-center">
                <InfoBar room={chatRoom} membersTyping={membersTyping} />

                <Messages messages={messages} username={username} />

                <InputField
                    handleChange={handleChange}
                    handleTyping={handleTyping}
                    sendMessage={sendMessage}
                    message={message}
                />
            </div>
        </div>
    )
}

export default Chat;