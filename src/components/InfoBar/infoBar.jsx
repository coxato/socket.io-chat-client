import React from 'react';
import Typing from '../Typing/typing';
import './infoBar.css';

function InfoBar({ room, membersTyping }) {
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