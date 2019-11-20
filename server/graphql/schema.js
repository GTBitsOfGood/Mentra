const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
      readUser(id: ID!): User!
    }
    type Mutation {
      createUser(user: UserInput!): User!
      updateUser(id: ID!, user: UserInput!): User!
      deleteUser(id: ID!): ID!
      updateWorkPreference(id: ID!, workPreference: WorkPreferenceInput!): User!
    }
    # INPUT TYPES

    input UserInput {
      account: AccountInput!
      identity: IdentityInput
      experience: ExperienceInput
      workPreference: WorkPreferenceInput
      disability: DisabilityInput
    }

    input AccountInput {
      userName: String!
      email: String!
      password: String!
    }

    input IdentityInput {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      ethnicity: Ethnicity
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
      situation: SituationsInput!
      flexibility: FlexibilityInput!
      teamwork: Boolean!
    }

    input DisabilityInput {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }

    input TrainingInput {
      name: String!
      coach: String!
      receivedEducation: Boolean!
    }

    input EducationInput {
      university: String!
      degree: Degree!
      graduationYear: Int
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

    input SituationsInput {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
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
    type User {
      id: ID!
      account: Account!
      identity: Identity
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
      workingSpace: Spaces!
      tasks: Tasks!
      situation: Situations!
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
