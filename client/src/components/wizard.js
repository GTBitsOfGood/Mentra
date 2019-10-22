import React, { Component } from 'react';
import StepZilla from "react-stepzilla";
import Question from './question';

export default class Wizard extends Component {

    constructor(props) {
        super(props);

        this.steps =
        [
            { name: 'Question 1', component: <Question /> },
            { name: 'Question 2', component: <Question /> },
            { name: 'Question 3', component: <Question /> },
            { name: 'Question 4', component: <Question /> },
            { name: 'Question 5', component: <Question /> }
        ]
    }

    render() {
        return (
            <div className='step-progress'>
                <StepZilla steps={this.steps} />
            </div>
        );
    }


}