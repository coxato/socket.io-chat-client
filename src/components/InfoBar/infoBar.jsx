import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/chatContext';
// components
import Typing from '../Typing/typing';
import './infoBar.css';

function InfoBar({ room }) {
    const { membersTyping } = useContext(ChatContext);

    return (
        <div className="infoBar-container">
            <div className="infoBar-top">
                <div className="leftInnerContainer">
                    <h3>{room}</h3>
                </div>
                <div className="rightInnerContainer">
                    <a href="/">X</a>
                </div>
            </div>
            <div className="infoBar-bottom">
                <Typing membersTyping={membersTyping} />
            </div>
        </div>
    )
}

export default InfoBar;