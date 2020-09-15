import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.css';

function Join() {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="container-full">
            <div className="container-center">
                <div className="card">
                    <h1 className="title">Join to a chat room</h1>
                    <div className="field">
                        <label htmlFor="name">name</label>
                        <div className="field-input">
                            <input type="text" name="name" onChange={e => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="room">room</label>
                        <div className="field-input">
                            <input type="text" name="room" onChange={e => setRoom(e.target.value)} />
                        </div>
                    </div>
                    <Link
                        type='submit'
                        onClick={e => (!name || !room) ? e.preventDefault() : null}
                        to={`/chat?name=${name}&room=${room}`} 
                        className="button button__information"
                    >
                        Join!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join;