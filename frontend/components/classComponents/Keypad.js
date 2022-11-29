import React from 'react'

export default class Keypad extends React.Component {
    render() {
        return (
            <div id="keypad">
                <button id="left" onClick={this.props.move('left')}>"LEFT</button>
                <button id="up" onClick={this.props.move('up')}>"UP</button>
                <button id="right" onClick={this.props.move('right')}>"RIGHT</button>
                <button id="down" onClick={this.props.move('down')}>"DOWN</button>
                <button id="reset" onClick={this.props.move('up')}>"reset</button>
            </div>
        )
    }
}