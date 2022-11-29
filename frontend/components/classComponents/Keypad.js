import React from 'react'

export default class Keypad extends React.Component {
    render() {
        return (
            <div id="keypad">
                <button id="left" onClick={this.props.getNextIndex('left')}>"LEFT</button>
                <button id="up" onClick={this.props.getNextIndex('up')}>"UP</button>
                <button id="right" onClick={this.props.getNextIndex('right')}>"RIGHT</button>
                <button id="down" onClick={this.props.getNextIndex('down')}>"DOWN</button>
                <button id="reset" onClick={this.props.reset}>"reset</button>
            </div>
        )
    }
}