import React, { Component } from 'react';
import data from '../data.json';
import StepZilla from 'react-stepzilla';
import Question from './question';

export default class Wizard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            steps: data.map(question => (
                {
                    name: question.progressText,
                    component: <Question text={question.questionText} answers={question.answers}></Question>
                }
            ))
        }
    }
    render() {
        return (
            <div className='step-progress'>
                <StepZilla steps={this.state.steps} prevBtnOnLastStep={false}/>
            </div>
        );
    }


}