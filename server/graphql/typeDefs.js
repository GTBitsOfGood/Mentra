const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
      userInfo(fullName: String!): UserInfo!
    }
    type Mutation {
      createUser(userInfo: UserInfoInput!): UserInfo!
      updateUser(userInfo: UserInfoInput!): UserInfo!
    }
    # INPUT TYPES

    input UserInfoInput {
      accountInfo: AccountInfoInput!
      identifyingInfo: IdentifyingInfoInput
      experienceInfo: ExperienceInfoInput
      workPreferenceInfo: WorkPreferenceInfoInput
      disabilityInfo: DisabilityInfoInput
    }

    input IdentifyingInfoInput {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      ethnicity: Ethnicity
      race: Race
      address: Address
      age: Int
    }

    input ExperienceInfoInput {
      training: [vocationalTrainingInfo!]!
      education: [educationalInfo!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }

    input WorkPreferenceInfoInput {
      timing: timingInfo!
      workingSpace: spaceInfo!
      tasks: tasksInfo!
      situation: situationInfo!
      flexibility: flexibilityInfo!
      teamwork: Boolean!
    }

    input DisabilityInfoInput {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }

    # TOP LEVEL AGGREGATES
    type UserInfo {
      id: ID!
      accountInfo: AccountInfo!
      identifyingInfo: identifyingInfo
      experienceInfo: ExperienceInfo
      workPreferenceInfo: WorkPreferenceInfo
      disabilityInfo: DisabilityInfo
    }
    # 2nd LEVEL AGGREGATES
    type AccountInfo {
      createdAt: String!
      userName: String!
      password: String!
    }
    type IdentifyingInfo {
      fullName: String!
      email: String!
      phoneNumber: String
      gender: Gender
      ethnicity: Ethnicity
      race: Race
      address: Address
      age: Int
    }
    type ExperienceInfo {
      training: [vocationalTrainingInfo!]!
      education: [educationalInfo!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }
    type WorkPreferenceInfo {
      timing: timingInfo!
      workingSpace: spaceInfo!
      tasks: tasksInfo!
      situation: situationInfo!
      flexibility: flexibilityInfo!
      teamwork: Boolean!
    }
    type DisabilityInfo {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }


    # 3rd LEVEL AGGREGATES
    type vocationalTrainingInfo {
      name: String!
      coach: String!
      receivedEducation: Boolean!
    }
    type educationalInfo {
      university: String!
      degree: Degree!
      graduationYear: Int
    }
    type timingInfo {
      changingHours: Boolean!
      earlyMorning: Boolean!
      standardHours: Boolean!
      lateNights: Boolean!
      weekends: Boolean!
    }
    type spaceInfo {
      noisyEnvironment: Boolean!
      brightLights: Boolean!
      openFoodArea: Boolean!
      indoorWork: Boolean!
      outdoorWork: Boolean!
      uniformWork: Boolean!
    }
    type tasksInfo {
      dataEntry: Boolean!
      drivingTasks: Boolean!
      periodStanding: Boolean!
      socialInteraction: Boolean!
      heavyLifting: Boolean!
      workWithAnimals: Boolean!
    }
    type situationInfo {
      manyTasks: Boolean!
      tightdeadlines: Boolean!
      longWorkPeriods: Boolean!
      workOnTeams: Boolean!
      workAlone: Boolean!
      acceptFeedback: Boolean!
      changeTasks: Boolean!
    }
    type flexibilityInfo {
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
      LATINX
      NOT_LATINX
    }
    enum Race {
      AMERICAN_INDIAN
      ASIAN
      AFRICAN_AMERICAN
      PACIFIC_ISLANDER
      WHITE
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
