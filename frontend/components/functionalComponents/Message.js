import React from 'react';

export default function Messsage(props) {
    const { message } = props;
    return (
        <div className="info">
            <h3 id="message">{message}</h3>
        </div>
    )
}