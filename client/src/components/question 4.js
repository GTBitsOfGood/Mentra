import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question4 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "When faced with new activities,"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.text}</h2>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="radio" label="I struggle since it's not what I'm used to" />
                        <Form.Check type="radio" label="I'm excited to try new things" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}