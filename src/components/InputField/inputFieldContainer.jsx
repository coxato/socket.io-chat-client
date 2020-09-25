import React, { useEffect, useContext } from 'react';
import { ChatContext } from '../../contexts/chatContext';
// components
import InputField from './inputField';

// typing timeout
let typingTimer;


function InputFieldContainer({handleChange, sendMessage, message}) {
    
    const { socket, username, setMembersTyping } = useContext(ChatContext);

    // typing events
    useEffect(() => {
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
    }, [socket, setMembersTyping]);


    // componentWillUnmount for typing timer
    useEffect(() => {
        return () => {
            clearTimeout(typingTimer);
        }
    }, []);


    // handle input key up
    const handleTyping = (ev) => {
        ev.preventDefault();
        clearTimeout(typingTimer);
        if(ev.key === 'Enter') { 
            sendMessage(ev);
            return; 
        }
        // typing logic
        let finishTypingInterval = 2000;
        if(ev.target.value){
            socket.emit('typing', username);
            typingTimer = setTimeout( hideMemberTyping, finishTypingInterval);
        }
    }

    // hide the username when user finish typing
    const hideMemberTyping = () => socket.emit('stop-typing', username);

    // ===== render =====
    return(
        <InputField 
            {...{
                handleChange,
                sendMessage,
                message,
                handleTyping
            }}
        />
    )
}

export default InputFieldContainer;