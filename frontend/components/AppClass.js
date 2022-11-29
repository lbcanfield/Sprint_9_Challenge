import React from 'react'
import ReactDOM from 'react-dom';

import Grid from './classComponents/Grid';


const values = {
  activeIdx: 4,
  xCoord: 2,
  yCoord: 2,
  steps: 0,
  message: '',
  email: ''

}

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      value: values
    }
  }
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  stepsMsg() {
    if (this.state.value.steps === 1) {
      return (`You moved ${this.state.value.steps} time`)
    }
    else {
      return (`You moved ${this.state.value.steps} times`)
    }
  }


  getXY = () => {
    const xyCoords = [
      [1, 1], [2, 1], [3, 1],
      //  0       1       2
      [1, 2], [2, 2], [3, 2],
      //  3       4       5
      [1, 3], [2, 3], [3, 3]
      //  6       7       8
    ];
    return (`(${xyCoords[this.state.value.activeIdx][0]},${xyCoords[this.state.value.activeIdx][1]})`)
  }

  getXYMessage = () => {
    return ('Coordinates ' + this.getXY())
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  move = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  onChange = (evt) => {
    // You will need this to update the value of the input.
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }
  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{this.getXYMessage()}</h3>
          <h3 id="steps">{this.stepsMsg()}</h3>
        </div>

        <Grid />


        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
