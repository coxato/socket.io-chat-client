import React from 'react';
import './typing.css';

function Typing({ membersTyping }) {
    let commasLength = membersTyping.length - 1;
    
    return(
        <div className="typingMembers-container">
            {
                membersTyping.map( (name, idx) => (
                    <span 
                        key={idx} 
                        className="typing-name"
                    >
                        {name} is typing { commasLength-- > 0 ? ',' : '' }
                    </span>
                ))
            }
        </div>
    )
}

export default Typing;