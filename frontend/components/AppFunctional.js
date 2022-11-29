import React, { useState, useEffect } from 'react'
import axios from 'axios';

//Component Imports
import Grid from './functionalComponents/Grid';
import SubmitForm from './functionalComponents/SubmitForm';
import Keypad from './functionalComponents/Keypad';
import Message from './functionalComponents/Message';

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
  const [email, setEmail] = useState(initialValues.initialEmail);
  const [xCoord, setXCoord] = useState(2);
  const [yCoord, setyCoord] = useState(2);
  const [winMsg, setWinMsg] = useState('');

  function stepsMsg() {
    if (steps === 1) {
      return (`You moved ${steps} time`)
    }
    else {
      return (`You moved ${steps} times`)
    }
  }

  function getXY() {
    const xyCoords = [
      [1, 1], [2, 1], [3, 1],
      //  0       1       2
      [1, 2], [2, 2], [3, 2],
      //  3       4       5
      [1, 3], [2, 3], [3, 3]
      //  6       7       8
    ];
    return (`(${xyCoords[activeIdx][0]},${xyCoords[activeIdx][1]})`);
  }

  function getXYMessage() {
    return ('Coordinates ' + getXY())
  }

  function reset() {
    // Use this helper to reset all states to their initial values.
    setActiveIdx(initialValues.initialIndex);
    setMessage(initialValues.initialMessage);
    setSteps(initialValues.initialSteps);
    setEmail(initialValues.initialEmail);
    setXCoord(2);
    setyCoord(2);
    setWinMsg('');
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



  function onSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      "x": xCoord,
      "y": yCoord,
      "steps": steps,
      "email": email
    }
    console.log(newPlayer);
    axios.post('http://localhost:9000/api/result', newPlayer)
      .then(response => {
        // console.log(response)
        setWinMsg(response.data.message);
      })
      .catch(error => {
        setWinMsg(error.response.data.message);
      })
    setEmail(initialValues.initialEmail);
  }


  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">{stepsMsg()}</h3>
      </div>
      <Grid activeIdx={activeIdx} />
      <Message message={message} />
      <Keypad getNextIndex={getNextIndex} reset={reset} />
      <SubmitForm

        onSubmit={onSubmit}
        winMsg={winMsg}
        setEmail={setEmail}
        email={email}
      />
    </div>
  )
}
