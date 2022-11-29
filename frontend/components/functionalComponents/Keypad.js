import React from 'react';

export default function Keypad(props) {
    const { getNextIndex, reset } = props;
    return (
        <div id="keypad">
            <button id="left" onClick={() => getNextIndex('left')}>LEFT</button>
            <button id="up" onClick={() => getNextIndex('up')}>UP</button>
            <button id="right" onClick={() => getNextIndex('right')}>RIGHT</button>
            <button id="down" onClick={() => getNextIndex('down')}>DOWN</button>
            <button id="reset" onClick={reset}>reset</button>
        </div>
    )
}