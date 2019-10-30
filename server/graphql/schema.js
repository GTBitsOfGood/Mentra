const { gql } = require('apollo-server');
const {
  DateTimeDefinition,
  PhoneNumberDefinition,
  PostalCodeDefinition,
} = require('graphql-scalars');

const userTypes = gql`
    # TOP LEVEL AGGREGATES
    type accountInfo {
      createdAt: String!
      userName: String!
      password: String!
    }
    type identifyingInfo {
      fullName: String!
      email: String!
      phoneNumber: PhoneNumber
      gender: Gender
      ethnicity: Ethnicity
      race: Race
      address: String
      age: Int
    }
    type experienceInfo {
      training: [vocationalTrainingInfo!]!
      education: [educationalInfo!]!
      legalAuthorization: Boolean
      sponsorship: Boolean
      resume: String
    }
    type workPreferenceInfo {
      timing: timingInfo!
      workingSpace: spaceInfo!
      tasks: tasksInfo!
      situation: situationInfo!
      flexibility: flexibilityInfo!
      teamwork: Boolean!
    }
    type disabilityInfo {
      employable: Boolean!
      speechAbility: Boolean!
      createdOwnProfile: Boolean!
      diagnosis: Boolean!
    }


    # SECOND LEVEL AGGREGATES
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
      postalCode: PostalCode
    }


    # ENUMS
    enum gender {
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
  }`;

module.exports = {
   DateTimeDefinition,
   PhoneNumberDefinition,
   PostalCodeDefinition,
   userTypes
}
