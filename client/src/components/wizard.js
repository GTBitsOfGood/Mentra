import React, { Component } from 'react';
import data from '../data.json';
import StepZilla from 'react-stepzilla';
import Question from './question';

export default class Wizard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        /*this.state = {
            accountData: {
                id: String,
                createdAt: String,
                userName: String,
                email: String,
                password: String,
            },
            identityData: {
                fullName: String,
                email: String,
                phoneNumber: String,
                gender: Boolean,
                ethnicity: String,
                address: String,
                age: Number
            },
            experienceData: {
                training: String,
                education: String,
                legalAuthorization: Boolean,
                sponsorship: Boolean,
                resume: String
            },
            disabilityData: {
                employable: Boolean,
                speechAbility: Boolean,
                createdOwnProfile: Boolean,
                diagnosis: Boolean
            },
            trainingData: {
                name: String,
                coach: String,
                receivedEducation: Boolean
            },
            educationData: {
                university: String,
                degree: String,
                graduationYear: Number
            },
            timingData: {
                changingHours: Boolean,
                earlyMorning: Boolean,
                standardHours: Boolean,
                lateNights: Boolean,
                weekends: Boolean,
            },
            spacesData: {
                noisyEnvironment: Boolean,
                brightLights: Boolean,
                openFoodArea: Boolean,
                indoorWork: Boolean,
                outdoorWork: Boolean,
                uniformWork: Boolean
            },
            tasksData: {
                dataEntry: Boolean,
                drivingTasks: Boolean,
                periodStanding: Boolean,
                socialInteraction: Boolean,
                heavyLifting: Boolean,
                workWithAnimals: Boolean
            },
            situationsData: {
                manyTasks: Boolean,
                tightdeadlines: Boolean,
                longWorkPeriods: Boolean,
                workOnTeams: Boolean,
                workAlone: Boolean,
                acceptFeedback: Boolean,
                changeTasks: Boolean,
            },
            flexibilityData: {
                manyTasks: Boolean,
                tightdeadlines: Boolean,
                longWorkPeriods: Boolean,
                workOnTeams: Boolean,
                workAlone: Boolean,
                acceptFeedback: Boolean,
                changeTasks: Boolean
            },
            addressData: {
                country: String,
                stateProvince: String,
                city: String,
                streetAddress: String,
                postalCode: String
            }
        }*/
    }

    updateUserData = (questionID, answers) => {
        console.log("Question: " + questionID + "\nAnswers: " + answers);

    }

    submitForm = () => {
        console.log("I would like to submit the form!");
        //TODO: some GraphQL magic
    }

    render() {
        let steps = data.map((question, index) => (
            {
                name: question.progressText,
                component: <Question key={index} id={question.questionID} text={question.questionText} answers={question.answers} dismountCallback={this.updateUserData}></Question>
            }
        ));
        return (
            <div className='step-progress'>
                <StepZilla steps={steps} prevBtnOnLastStep={false}/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }
}