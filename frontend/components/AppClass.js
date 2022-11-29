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
    // console.log(this.getXY())
    return (`Coordinates (${this.getXY()[0]},${this.getXY()[1]})`)
  }

  reset = () => {
    // Use this helper to reset all states to their initial values.
  }

  updateIndex = value => {
    // event.preventDefault();
    const newIndex = this.state.index + value;
    this.setState({ ...this.state, index: value })

  }

  getNextIndex = (direction) => {
    const activeIdx = this.state.index;
    if (direction === 'up' && activeIdx !== 0 && activeIdx !== 1 && activeIdx !== 2) {
      return (this.state.index - 3);
      // setActiveIdx(activeIdx - 3);
    }
    else if (direction === 'left' && activeIdx !== 0 && activeIdx !== 3 && activeIdx !== 6) {
      return (this.state.index - 1);
      // setActiveIdx(activeIdx - 1);
    }
    else if (direction === 'right' && activeIdx !== 2 && activeIdx !== 5 && activeIdx !== 8) {
      return (this.state.index + 1);
      // setActiveIdx(activeIdx + 1);
    }
    else if (direction === 'down' && activeIdx !== 6 && activeIdx !== 7 && activeIdx !== 8) {
      return (this.state.index + 3);
      // setActiveIdx(activeIdx + 3);
    }
    else {
      setMessage(`You can't go ${direction}`);
      return;
    }
  }

  move = value => event => {
    event.preventDefault();
    console.log(this.getNextIndex(value));
    this.updateIndex(this.getNextIndex(value));
    // this.setState({ ...this.state.values, index: this.getNextIndex(value) });
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
    console.log(this.state)
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{this.getXYMessage()}</h3>
          <h3 id="steps">You moved 0 times</h3>
        </div>
        <Grid index={this.state.index} />
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <Keypad move={this.move} />
        <SubmitForm />
      </div>
    )
  }
}
