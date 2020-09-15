import React from 'react';
import './infoBar.css';

function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/">X</a>
            </div>
        </div>
    )
}

export default InfoBar;