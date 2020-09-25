import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../contexts/chatContext';
// components
import InfoBar from '../InfoBar/infoBar';
import InputFieldContainer from '../InputField/inputFieldContainer';
import Messages from '../Messages/messages';

let sendTimes = 1;

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const { socket, username, chatRoom } = useContext(ChatContext);

    // listen for socket.io events
    useEffect(() => {
        // message
        socket.on('message', message => {
            setMessages(m => [
                ...m,
                message
            ]);
        })
    }, [socket]);

    // handle input onchange
    const handleChange = (ev) => setMessage(ev.target.value);
    
    // send message
    const sendMessage = (ev) => {
        ev.preventDefault();
        console.log("sendMessage", sendTimes);
        sendTimes++;

        if(message){
            setMessage('');
            socket.emit('stop-typing', username);
            socket.emit('send-message', message, () => {});
        }
    }

    // ===== render =====
    return (
        <div className="container-full">
            <div className="container-center">
                <InfoBar room={chatRoom} />

                <Messages messages={messages} username={username} />

                <InputFieldContainer
                    handleChange={handleChange}
                    sendMessage={sendMessage}
                    message={message}
                />
            </div>
        </div>
    )
}

export default Chat;