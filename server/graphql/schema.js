const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
      readUser(id: ID!): User!
    }
    type Mutation {
      createUser(user: UserInput!): User!
      updateUser(id: ID!, user: UserInput!): User!
      deleteUser(id: ID!): ID!
      updateWorkPreference(id: ID!, workPreference: workPreferenceInput!): User!
    }
    # INPUT TYPES

    input UserInput {
      id: ID!
      account: AccountInput!
      identity: IdentityInput
      experience: ExperienceInput
      workPreference: WorkPreferenceInput
      disability: DisabilityInput
    }

    input IdentityInput {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: GenderInput
      ethnicity: EthnicityInput
      race: RaceInput
      address: AddressInput
      age: Int
    }

    input ExperienceInput {
      training: [TraningInput!]!
      education: [Educationinput!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }

    input WorkPreferenceInput {
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

    input educationInput {
      university: String!
      degree: Degree!
      graduationYear: Int
    }

    type vocationalTrainingInput {
      name: String!
      coach: String!
      receivedEducation: Boolean!
    }

    type EducationInput {
      university: String!
      degree: Degree!
      graduationYear: Int
    }

    type TimingInput {
      changingHours: Boolean!
      earlyMorning: Boolean!
      standardHours: Boolean!
      lateNights: Boolean!
      weekends: Boolean!
    }

    type SpacesInput {
      noisyEnvironment: Boolean!
      brightLights: Boolean!
      openFoodArea: Boolean!
      indoorWork: Boolean!
      outdoorWork: Boolean!
      uniformWork: Boolean!
    }

    type TasksInput {
      dataEntry: Boolean!
      drivingTasks: Boolean!
      periodStanding: Boolean!
      socialInteraction: Boolean!
      heavyLifting: Boolean!
      workWithAnimals: Boolean!
    }

    type SituationsInput {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }

    type FlexibilityInput {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }

    type AddressInput {
      country: String!
      stateProvince: String!
      city: String!
      streetAddress: String!
      postalCode: String!
    }

    # TOP LEVEL AGGREGATES
    type User {
      id: ID!
      account: Account!
      identifying: Identity
      experience: Experience
      workPreference: WorkPreference
      disability: Disability
    }
    # 2nd LEVEL AGGREGATES
    type Account {
      createdAt: String!
      userName: String!
      email: String!
      password: String!
    }
    type Identity {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      ethnicity: Ethnicity
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
    type vocationalTraining {
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

    type Spaces {
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

    type Situations {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }

    type Flexibility {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
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
      # not sure what types we want to include
    }
    enum Ethnicity {
      AMERICAN_INDIAN
      ASIAN
      AFRICAN_AMERICAN
      LATINX
      PACIFIC_ISLANDER
      WHITE
      MULTIRACIAL
    }
    enum Degree {
      ASSOCIATE
      BACHELOR
      MASTER
      DOCTOR
    }
  `;

module.exports = {
  typeDefs
}
