import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
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
                <h2 style={{ margin: '2.5rem' }}>Login</h2>
                <Form>
                    <Form.Group controlId="input">
                        <Form.Label style={{ float: 'left' }}>Username</Form.Label>
                        <Form.Control placeholder="Username" onChange={(e) => this.handleChange("username", e)} />
                    </Form.Group>
                    <Form.Group controlId="input">
                        <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                        <Form.Control placeholder="Password" onChange={(e) => this.handleChange("password", e)} />
                    </Form.Group>
                </Form>
                <Button style={{marginBottom:"2em"}} type="submit">Submit form</Button>
            </div>
        );
    }
}