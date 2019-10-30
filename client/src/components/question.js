import React, { Component } from 'react';
import { Form, CardDeck, Card } from 'react-bootstrap';

export default class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedAnswers: props.answers.map(answer => false)
        };
    }
    
    render() {      
        return (
            <div>
                <h2>{this.props.text}</h2>
                <CardDeck>
                    {this.props.answers.map(answer => (
                          <Card>
                          <Card.Body>
                            <Card.Title><Form.Check type="checkbox" label={answer.text} /></Card.Title>
                            <Card.Img variant="bottom" src={answer.image} />
                            <Card.Text>
                              {answer.subtext}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    ))}
                </CardDeck>
            </div>
        );
    }
}