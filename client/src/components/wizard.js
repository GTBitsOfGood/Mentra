import React, { Component } from 'react';

import { Image } from 'react-bootstrap';

import { Enum } from 'ok-enum';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import data from '../data.json';
import StepZilla from 'react-stepzilla';
import CardQuestion from './cardQuestion';
import CheckQuestion from './checkQuestion';
import InputQuestion from './inputQuestion';
import Login from './login';


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
                userName: String,
                email: String,
                password: String,
            },
            identity: {
                fullName: String,
                email: String,
                phoneNumber: String,
                gender: New Enum([
                    "MALE",
                    "FEMALE",
                    "TRANS_MALE",
                    "TRANS_FEMALE",
                    "GENDERQUEER",
                    "OTHER",
                    "NO_ANSWER"
                ]),
                race: New Enum([
                    "AMERICAN_INDIAN",
                    "ASIAN",
                    "BLACK",
                    "LATINX",
                    "PACIFIC_ISLANDER",
                    "WHITE",
                    "MULTIRACIAL",
                    "NO_ANSWER"
                ]),
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
            flexibility: {
                dailyTasks: Boolean,
                workingHours: Boolean,
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
        const [createUser, { data }] = useMutation(CREATE_USER);
        createUser({
            variables: {
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
                flexibility: this.state.flexibility,
            }
        });
    }

    render() {
        let steps = data.map((question, index) => {
            var component;
            switch (question.questionType) {

                case "Card":
                    component = <CardQuestion key={index} id={question.questionID} text={question.questionText} answers={question.answers} maxSelections={question.maxSelections} dismountCallback={this.updateUserData}></CardQuestion>
                    break;
                case "Check":
                    component = <CheckQuestion key={index} id={question.questionID} text={question.questionText} answers={question.answers} maxSelections={question.maxSelections} dismountCallback={this.updateUserData}></CheckQuestion>
                    break;
                case "Input":
                    component = <InputQuestion key={index} id={question.questionID} inputs={question.inputs} text={question.questionText} dismountCallback={this.updateUserData}></InputQuestion>
                    break;
                case "N/A":
                    component = <div fluid style={{ margin: '3em' }}>
                        <h1>{question.questionText}</h1>
                        <p style={{ margin: '2em' }}>{question.subtext}</p>
                        <Image src={question.image} fluid></Image>
                    </div>
                    break;
                default:
                    break;
            }
            return ({
                name: question.progressText,
                component: component
            })
        });

        // steps.unshift({component: <Login/>});
        return (
            <div className='step-progress'>
                <StepZilla steps={steps} prevBtnOnLastStep={false} />
            </div>
        );
    }
}