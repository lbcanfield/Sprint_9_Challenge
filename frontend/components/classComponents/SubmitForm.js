import React from 'react';
import axios from 'axios';

export default class SubmitForm extends React.Component {
    constructor() {
        super();
        this.state = {
            winningMsg: ''
        }
    }

