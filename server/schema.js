const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
      readCandidate(id: ID!): Candidate!
    }

    type Mutation {
      signupCandidate(candidate: CandidateInput!): Candidate!
      removeCandidate(id: ID!): ID!
      }
    # INPUT TYPES

    input CandidateInput {
      account: AccountInput!
      identity: IdentityInput
      experience: ExperienceInput
      workPreference: WorkPreferenceInput
      disability: DisabilityInput
      flexibility: FlexibilityInput
    }

    input AccountInput {
      userName: String!,
      email: String!,
      password: String!
    }

    input IdentityInput {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      race: Race
      address: AddressInput
      age: Int
    }

    input ExperienceInput {
      training: [TrainingInput!]!
      education: [EducationInput!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }

    input WorkPreferenceInput {
      didOwnApplication: Boolean!
      timing: TimingInput!
      workingSpace: SpacesInput!
      tasks: TasksInput!
      situation: SituationInput!
      flexibility: FlexibilityInput!
      teamwork: Boolean!
    }

    input DisabilityInput {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }

    input EducationInput {
      university: String!
      degree: Degree!
      graduationYear: Int!
    }

    input TrainingInput {
      name: String!
      coach: String!
      receivedEducation: Boolean!
    }

    input TimingInput {
      changingHours: Boolean!
      earlyMorning: Boolean!
      standardHours: Boolean!
      lateNights: Boolean!
      weekends: Boolean!
    }

    input SpacesInput {
      noisyEnvironment: Boolean!
      brightLights: Boolean!
      openFoodArea: Boolean!
      indoorWork: Boolean!
      outdoorWork: Boolean!
      uniformWork: Boolean!
    }

    input TasksInput {
      dataEntry: Boolean!
      drivingTasks: Boolean!
      periodStanding: Boolean!
      socialInteraction: Boolean!
      heavyLifting: Boolean!
      workWithAnimals: Boolean!
    }

    input SituationInput {
      manyTasks: Boolean!
      tightDeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }

    input FlexibilityInput {
      dailyTasks: Boolean!
      workingHours: Boolean!
    }

    input AddressInput {
      country: String!
      stateProvince: String!
      city: String!
      streetAddress: String!
      postalCode: String!
    }

    # TOP LEVEL AGGREGATES
    type Candidate {
      id: ID!
      account: Account!
      identity: Identity
      experience: Experience
      workPreference: WorkPreference
      disability: Disability
    }
    # stub to validate the use of the UserData union
    # will fill later
    type Recruiter {
      id: ID!
      account: Account!
    }

    # 2nd LEVEL AGGREGATES
    type Account {
      userID: ID!
      userName: String!
      email: String!
      type: AccountType!
      data: UserData!
    }
    type Identity {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      race: Race
      address: Address
      age: Int
    }
    type Experience {
      training: [Training!]!
      education: [Education!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }
    type WorkPreference {
      didOwnApplication: Boolean!
      timing: Timing!
      workingSpace: Space!
      tasks: Tasks!
      situation: Situation!
      flexibility: Flexibility!
      teamwork: Boolean!
    }
    type Disability {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }


    # 3rd LEVEL AGGREGATES
    type Training {
      name: String!
      coach: String!
      receivedEducation: Boolean!
    }

    type Education {
      university: String!
      degree: Degree!
      graduationYear: Int
    }

    type Timing {
      changingHours: Boolean!
      earlyMorning: Boolean!
      standardHours: Boolean!
      lateNights: Boolean!
      weekends: Boolean!
    }

    type Space {
      noisyEnvironment: Boolean!
      brightLights: Boolean!
      openFoodArea: Boolean!
      indoorWork: Boolean!
      outdoorWork: Boolean!
      uniformWork: Boolean!
    }

    type Tasks {
      dataEntry: Boolean!
      drivingTasks: Boolean!
      periodStanding: Boolean!
      socialInteraction: Boolean!
      heavyLifting: Boolean!
      workWithAnimals: Boolean!
    }

    type Situation {
      manyTasks: Boolean!
      tightDeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }

    type Flexibility {
      dailyTasks: Boolean,
      workingHours: Boolean,
    }


    # MISC AGGREGATES
    type Address {
      country: String!
      stateProvince: String!
      city: String!
      streetAddress: String!
      postalCode: String!
    }

    # ENUMS
    enum Gender {
      FEMALE
      MALE
      TRANS_MALE
      TRANS_FEMALE
      GENDERQUEER
      OTHER
      NO_ANSWER
      # not sure what types we want to include
    }

    enum Race {
      AMERICAN_INDIAN
      ASIAN
      BLACK
      LATINX
      PACIFIC_ISLANDER
      WHITE
      MULTIRACIAL
      NO_ANSWER
    }

    enum Degree {
      ASSOCIATE
      BACHELOR
      MASTER
      DOCTOR
    }

    enum AccountType {
      CANDIDATE
      RECRUITER
    }

    union UserData = Candidate | Recruiter
  `;

module.exports = {
  typeDefs
}