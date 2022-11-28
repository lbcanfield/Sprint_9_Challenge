import React, { useState } from 'react'

//Component Imports
import Grid from './functionalComponents/Grid';
import SubmitForm from './functionalComponents/SubmitForm';
import Keypad from './functionalComponents/Keypad';

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
  const [message, setMessage] = useState(initialValues.initialMessage);
  const [steps, setSteps] = useState(initialValues.initialSteps);

  function getXY() {
    const xyCoords = [
      [1, 1], [2, 1], [3, 1],
      //  0       1       2
      [1, 2], [2, 2], [3, 2],
      //  3       4       5
      [1, 3], [2, 3], [3, 3]
      //  6       7       8
    ];
    return (`(${xyCoords[activeIdx][0]}, ${xyCoords[activeIdx][1]})`);
  }

  function getXYMessage() {
    return ('Coordinates ' + getXY())
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
  }

  function getNextIndex(direction) {
    if (direction === 'up' && activeIdx !== 0 && activeIdx !== 1 && activeIdx !== 2) {
      setActiveIdx(activeIdx - 3);
    }
    else if (direction === 'left' && activeIdx !== 0 && activeIdx !== 3 && activeIdx !== 6) {
      setActiveIdx(activeIdx - 1);
    }
    else if (direction === 'right' && activeIdx !== 2 && activeIdx !== 5 && activeIdx !== 8) {
      setActiveIdx(activeIdx + 1);
    }
    else if (direction === 'down' && activeIdx !== 6 && activeIdx !== 7 && activeIdx !== 8) {
      setActiveIdx(activeIdx + 3);
    }
    else {
      setMessage(`You can't go ${direction}`);
      return;
    }
    move();
  }

  function move(evt) {
    setSteps(steps + 1);
    setMessage(initialValues.initialMessage);

  }

  function onChange(evt) {
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
  }
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <Grid activeIdx={activeIdx} />
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <Keypad getNextIndex={getNextIndex} />
      <SubmitForm />
    </div>
  )
}
