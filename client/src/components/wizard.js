import React, { Component } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import data from '../data.json';
import StepZilla from 'react-stepzilla';
import Question from './question';


const CREATE_USER = gql`
  # define our mutation in terms of the schema mutation
  mutation createUser($user: UserInput!) {
    # from the returned user, get its ID
    createUser(user: $user) {
        user {
            id
        }
    }
  }
`;

export default class Wizard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            account: {
                createdAt: String,
                userName: String,
                email: String,
                password: String,
            },
            identity: {
                fullName: String,
                email: String,
                phoneNumber: String,
                gender: Boolean,
                ethnicity: String,
                address: String,
                age: Number
            },
            experience: {
                legalAuthorization: Boolean,
                sponsorship: Boolean,
                resume: String
            },
            disability: { 
                employable: Boolean,
                speechAbility: Boolean,
                createdOwnProfile: Boolean,
                diagnosis: Boolean //DONE
            },
            training: {
                name: String,
                coach: String,
                receivedEducation: Boolean
            },
            education: {
                university: String,
                degree: String,
                graduationYear: Number
            },
            timing: { //DONE
                changingHours: Boolean,
                earlyMorning: Boolean,
                standardHours: Boolean,
                lateNights: Boolean,
                weekends: Boolean,
            },
            spaces: { //DONE
                noisyEnvironment: Boolean,
                brightLights: Boolean,
                openFoodArea: Boolean,
                indoorWork: Boolean,
                outdoorWork: Boolean,
                uniformWork: Boolean
            },
            tasks: {
                dataEntry: Boolean,
                drivingTasks: Boolean,
                periodStanding: Boolean,
                socialInteraction: Boolean,
                heavyLifting: Boolean,
                workWithAnimals: Boolean
            },
            situation: {
                manyTasks: Boolean,
                tightdeadlines: Boolean,
                longWorkPeriods: Boolean,
                workOnTeams: Boolean,
                workAlone: Boolean,
                acceptFeedback: Boolean,
                changeTasks: Boolean,
            },
            address: {
                country: String,
                stateProvince: String,
                city: String,
                streetAddress: String,
                postalCode: String
            }
        }
    }

    updateUserData = (questionID, answers) => {
        console.log("Question: " + questionID + "\nAnswers: " + answers);


        switch (questionID) {
            case "JobApplication": // how does this map to the graphql schema?
                this.setState({
                    ...this.state,
                    disabilityData: {

                    }
                });
                break;
            case "OpportunityType":
                this.setState({
                    ...this.state,
                    
                });
                break;
            case "NewActivityResponse":
                this.setState({
                    ...this.state,

                });
                break;
            case "TravelResponse":
                this.setState({
                    ...this.state,

                });
                break;
            case "DisabilityDiagnosis":
                this.setState({
                    ...this.state,
                    disabilityData: {
                        ...this.state.disabilityData,
                        diagnosis: answers
                    }
                });
                break;
            case "VerbalQuestionResponse":
                this.setState({
                    ...this.state,

                });
                break;
            case "IndependentApp":
                this.setState({
                    ...this.state,

                });
                break;
            // TODO: Fix this question that's not really a question
            case "NonQuestion":
                this.setState({
                    ...this.state,
    
                });
                break;
            case "WorkAvailability":
                this.setState({
                    ...this.state,
                    timingData: answers,
                });
                break;
            case "NegativeWorkScenarios":
                this.setState({
                    ...this.state,
                    spaces: {
                        ...this.state.spaces,
                        answers
                    }
                });
                break;
            case "SuccessfulWorkScenarios":
                this.setState({
                    ...this.state,
                    spaces: {
                        ...this.state.spaces,
                        answers
                    }
                });
                break; 
            default:
                break;
        }
    }


    submitForm = () => {
        console.log("I would like to submit the form!");

        const [createUser, { data }] = useMutation(CREATE_USER);
        createUser({variables: {
            account: this.state.account,
            identity: this.state.identity,
            experience: {
                ...this.state.experience,
                training: [
                    this.state.training
                ],
                education: [
                    this.state.education
                ],
            },
            workPreference: {
                timing: this.state.timing,
                workingSpace: this.state.spaces,
                tasks: this.state.tasks,
                situation: this.state.situation,
            },
            disability: this.state.disability,
        }});
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