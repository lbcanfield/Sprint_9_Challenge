import React from 'react';

export default function Keypad(props) {
    const { getNextIndex } = props;
    return (
        <div id="keypad">
            <button id="left" onClick={() => getNextIndex('left')}>LEFT</button>
            <button id="up" onClick={() => getNextIndex('up')}>UP</button>
            <button id="right" onClick={() => getNextIndex('right')}>RIGHT</button>
            <button id="down" onClick={() => getNextIndex('down')}>DOWN</button>
            <button id="reset">reset</button>
        </div>
    )
}