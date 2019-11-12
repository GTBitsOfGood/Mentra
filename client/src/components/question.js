import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "Are you willing and able to answer questions on your own?"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.text}</h2>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Yes" />
                        <Form.Check type="checkbox" label="No" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}