import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';

export default class InputQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputs: props.inputs.map(input => String.empty)
        };
    }

    handleCheck = (index) => {
        let updatedInputs = this.state.inputs;
        updatedInputs[index] = !updatedInputs[index];
        this.setState({
            inputs: updatedInputs
        });
    }

    componentWillUnmount() { 
        this.props.dismountCallback(this.props.id, this.state.inputs); 
    }

    render() { 
        return (
            <div style={{width:'80%', margin:'0 auto'}}>
                <h2 style={{margin:'2.5rem'}}>{this.props.text}</h2>
                <CardDeck style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    {this.props.inputs.map((input, index) => (
                        <input>{input}</input>
                    ))}
                </CardDeck>
            </div>
        );
    }
}