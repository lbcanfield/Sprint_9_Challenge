import React from 'react'

export default class Keypad extends React.Component {
    render() {
        return (
            <div id="keypad">
                <button id="left">LEFT</button>
                <button id="up">UP</button>
                <button id="right">RIGHT</button>
                <button id="down">DOWN</button>
                <button id="reset">reset</button>
            </div>
        )
    }
}