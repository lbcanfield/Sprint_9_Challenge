import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            winningMsg: ''
        }
    }

    onChange = (evt) => {
        // You will need this to update the value of the input.
        event.preventDefault();
        this.setState({ ...this.state, email: evt.target.value })
    }

    onSubmit = (event) => {
        // Use a POST request to send a payload to the server.
        event.preventDefault();
        const newPlayer = {
            'x': this.props.getXY()[0],
            'y': this.props.getXY()[1],
            'steps': this.props.steps,
            'email': this.state.email
        }
        console.log(newPlayer);
        axios.post('http://localhost:9000/api/result', newPlayer)
            .then(response => {
                // console.log(response)
                this.setState({ ...this.state, winningMsg: (response.data.message) });
            })
            .catch(error => {
                this.setState({ ...this.state, winningMsg: (error.response.data.message) });
            })
            .finally(
                this.setState({ ...this.state, email: '' }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} value={this.email} id="email" type="email" placeholder="type email"></input>
                    <input id="submit" type="submit"></input>
                </form>
                <div>{this.state.winningMsg}</div>
            </div>
        )
    }
}