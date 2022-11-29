import React from 'react';

export default function SubmitForm(props) {
    const { onSubmit, winMsg, setEmail, email } = props;

    function onChange(event) {

        // You will need this to update the value of the input.
        setEmail(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                <input onChange={onChange} value={email} name='email' id="email" type="email" placeholder="type email"></input>
                <input id="submit" type="submit"></input>
            </form>
            <div>{winMsg}</div>

        </div>
    )
}