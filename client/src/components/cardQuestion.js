import React, { Component } from 'react';
import { CardDeck, Card } from 'react-bootstrap';

export default class CardQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            answers: props.answers.map(() => false)
        };
    }

    handleCheck = (index) => {
        let updatedAnswers = this.state.answers;
        updatedAnswers[index] = !updatedAnswers[index];
        this.setState({
            answers: updatedAnswers
        });
    }

    componentWillUnmount() { 
        this.props.dismountCallback(this.props.id, this.state.answers); 
    }

    render() {
        const cardStyle = {
            maxWidth: '15rem',
            minWidth: '15rem',
            flex: '1',
            fontSize: '0.8rem',
            marginBottom: '2rem',
            cursor: 'pointer',
            borderWidth: '0.1rem',
            borderRadius: '0.5rem'
        }

        const cardTitleStyle = {
            fontSize: '1rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
        }
        return (
            <div style={{width:'80%', margin:'0 auto'}}>
                <h2 style={{margin:'2.5rem'}}>{this.props.text}</h2>
                <CardDeck style={{display:'flex', flexDirection:'row', justifyContent: 'center'}}>
                    {this.props.answers.map((answer, index) => (
                          <Card border={this.state.answers[index] ? 'primary' : 'none'} tag="a" onClick={() => this.handleCheck(index)} style={cardStyle} key={index}>
                          <Card.Body>
                            <Card.Title style={cardTitleStyle}>{answer.text}</Card.Title>
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