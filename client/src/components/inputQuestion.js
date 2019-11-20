import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class InputQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (input, e) => {
        this.setState({
            inputs: {
                ...this.state.inputs,
                [input]: e.target.value
            }
        });
    }

    componentWillUnmount() {
        this.props.dismountCallback(this.props.id, this.state.inputs);
    }

    render() {
        return (
            <div style={{ width: '5 0%', margin: '0 auto' }}>
                <h2 style={{ margin: '2.5rem' }}>{this.props.text}</h2>
                <Form style={{marginBottom:'3em'}}>
                    {this.props.inputs.map((input) => (
                        <Form.Group controlId="input">
                            <Form.Label style={{float: 'left'}}>{input}</Form.Label>
                            <Form.Control placeholder={input} onChange={(e) => this.handleChange(input, e)} />
                        </Form.Group>
                    ))}
                </Form>
            </div>
        );
    }
}