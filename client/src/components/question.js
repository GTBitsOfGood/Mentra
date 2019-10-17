import React, { Component } from 'react';

export default class Question extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "Are you willing and able to answer questions on your own?"
        };
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}