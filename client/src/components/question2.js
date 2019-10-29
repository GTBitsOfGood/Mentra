import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "When applying for a job,"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.text}</h2>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" label="I know how to complete a job application by myself" />
                        <Form.Check type="radio" label="I do not know how to complete a job application by myself" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}