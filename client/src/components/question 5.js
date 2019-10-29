import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Question5 extends Component {

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
                <h2>{this.state.text}</h2>
                <Form>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Autism" />
                        <Form.Check type="checkbox" label="Asperger's" />
                        <Form.Check type="checkbox" label="Learning disability" />
                        <Form.Check type="checkbox" label="ADD/ADHD" />
                        <Form.Check type="checkbox" label="Other" />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}