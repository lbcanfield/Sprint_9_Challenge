import React from 'react'

import Keypad from './classComponents/Keypad';
import SubmitForm from './classComponents/SubmitForm';
import Grid from './classComponents/Grid';

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

const initialState = {
  message: '',
  email: '',
  index: 4,
  steps: 0,
}

const gridAddr = [
  [1, 1], [2, 1], [3, 1],
  //  0       1       2
  [1, 2], [2, 2], [3, 2],
  //  3       4       5
  [1, 3], [2, 3], [3, 3]
  //  6       7       8
];

export default class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      // values: initialState
      message: '',
      email: '',
      index: 4,
      steps: 0,
    }
  }
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.

  getXY = () => {
    const idx = this.state.index;
    return (gridAddr[idx])
  }

  getXYMessage = () => {
    return (`Coordinates (${this.getXY()[0]},${this.getXY()[1]})`)
  }

  reset = value => {
    this.setState({ ...this.state, index: 4, steps: 0, message: '', email: '' });
  }

  updateIndex = value => {
    this.setState({ ...this.state, index: value, steps: (this.state.steps + 1), message: '' });
  }

  stepsMsg() {
    if (this.state.steps === 1) {
      return (`You moved ${this.state.steps} time`)
    }
    else {
      return (`You moved ${this.state.steps} times`)
    }
  }

  updateMsg(value) {
    event.preventDefault();
    this.setState({ ...this.state, message: value });
  }



  getNextIndex = direction => event => {
    event.preventDefault();
    const activeIdx = this.state.index;
    if (direction === 'up' && activeIdx !== 0 && activeIdx !== 1 && activeIdx !== 2) {
      this.updateIndex(this.state.index - 3);
    }
    else if (direction === 'left' && activeIdx !== 0 && activeIdx !== 3 && activeIdx !== 6) {
      this.updateIndex(this.state.index - 1);
    }
    else if (direction === 'right' && activeIdx !== 2 && activeIdx !== 5 && activeIdx !== 8) {
      this.updateIndex(this.state.index + 1);
    }
    else if (direction === 'down' && activeIdx !== 6 && activeIdx !== 7 && activeIdx !== 8) {
      this.updateIndex(this.state.index + 3);
    }
    else {
      this.updateMsg(`You can't go ${direction}`);
    }

  }

  move = value => event => {
    event.preventDefault();
    if (this.updateIndex(this.getNextIndex(value))) {
      return;
    }

  }

  onChange = (evt) => {
    // You will need this to update the value of the input.
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }

  render() {
    console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{this.getXYMessage()}</h3>
          <h3 id="steps">{this.stepsMsg()}</h3>
        </div>
        <Grid index={this.state.index} />
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <Keypad reset={this.reset} getNextIndex={this.getNextIndex} />
        <SubmitForm />
      </div>
    )
  }
}
