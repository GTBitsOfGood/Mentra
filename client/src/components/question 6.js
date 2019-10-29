import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question6 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "What are you diagnosed with?"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{"Thanks for your time!"}</h2>
            </div>
        );
    }
}