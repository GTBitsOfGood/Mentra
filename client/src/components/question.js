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
        const cardStyle = {
            maxWidth: '15rem',
            minWidth: '15rem',
            flex: '1',
            fontSize: '0.8rem',
            marginBottom: '2rem'
        }

        const cardTitleStyle = {
            fontSize: '1rem', 
            fontWeight: 'bold', 
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        }
        return (
            <div style={{width:'80%', margin:'0 auto'}}>
                <h2 style={{margin:'2.5rem'}}>{this.props.text}</h2>
                <CardDeck style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    {this.props.answers.map(answer => (
                          <Card style={cardStyle}>
                          <Card.Body>
                            <Card.Title style={cardTitleStyle}><Form.Check type="checkbox" label={answer.text} /></Card.Title>
                            <Card.Img variant="bottom" src={answer.image} style={{marginTop:'2rem', marginBottom: '2rem'}}/>
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