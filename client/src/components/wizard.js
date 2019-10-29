import React, { Component } from 'react';
import StepZilla from "react-stepzilla";
import Question from './question';
import Question2 from './question2';
import Question3 from './question 3';
import Question4 from './question 4';
import Question5 from './question 5';
import Question6 from './question 6';

export default class Wizard extends Component {

    constructor(props) {
        super(props);

        this.steps =
        [
            { name: 'Question 1', component: <Question /> },
            { name: 'Question 2', component: <Question2 /> },
            { name: 'Question 3', component: <Question3 /> },
            { name: 'Question 4', component: <Question4 /> },
            { name: 'Question 5', component: <Question5 /> },
            { name: 'Question 5', component: <Question6 /> }
        ]
    }

    render() {
        return (
            <div className='step-progress'>
                <StepZilla steps={this.steps} prevBtnOnLastStep={false}/>
            </div>
        );
    }


}