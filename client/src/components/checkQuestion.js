import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class CheckQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answers: props.answers.map(() => false)
        };
    }

    handleCheck = (index, e) => {
        let updatedAnswers = this.state.answers;
        if (updatedAnswers.filter(answer => answer === true).length === this.props.maxSelections) {
            updatedAnswers.fill(false);
        }
        updatedAnswers[index] = !updatedAnswers[index];
        this.setState({
            answers: updatedAnswers
        });
    }

    componentWillUnmount() {
        this.props.dismountCallback(this.props.id, this.state.inputs);
    }

    render() {
        return (
            <div style={{ width: '5 0%', margin: '0 auto' }}>
                <h2 style={{ margin: '2.5rem' }}>{this.props.text}</h2>
                <Form style={{margin:'2em'}}>
                    <Form.Group>
                        {this.props.answers.map((answer) => (
                            <Form.Check
                            type='checkbox'
                            label={answer}
                            id='default-checkbox'
                            onClick={this.handleCheck}
                            style={{
                                margin:'0.75em'
                            }}
                            />
                        ))}
                    </Form.Group>
                </Form>
            </div>
        );
    }
}