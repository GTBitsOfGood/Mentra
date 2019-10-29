import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "What types of opportunities are you open to?"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.text}</h2>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Short term (less than 6 months)" />
                        <Form.Check type="checkbox" label="Long term (more than 6 months)" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}