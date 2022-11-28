import React, { useState } from 'react'

//Component Imports
import Grid from './Grid';
import SubmitForm from './SubmitForm';

// Suggested initial states
const initialValues = {
  initialMessage: '',
  initialEmail: '',
  initialSteps: 0,
  initialIndex: 4    // the index the "B" is at
}

export default function AppFunctional(props) {
  // Area to be used for individual slices of state
  const [activeIdx, setActiveIdx] = useState(initialValues.initialIndex);

  function getXY() {
    const xyCoords = [[1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [1, 3], [2, 3], [3, 3]];
    return (`(${xyCoords[activeIdx][0]}, ${xyCoords[activeIdx][1]})`);
  }

  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return ('Coordinates ' + getXY())
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
  }

  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }

  function onChange(evt) {
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
  }
  console.log(getXY())
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved 0 times</h3>
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
      <SubmitForm />
    </div>
  )
}
