// import the gql tagged template function
import { gql } from 'apollo-server-express';

// create our typeDefs
// all type definitions need to specify the type of data that is returning.
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    experience: Int
  }

  type UserCourse {
    _id: ID
    username: String
    courseId: Int
    dateJoined: String
    highestCorrected: Int
    total: Int
    timeLearned: Int
    isCompleted: Boolean
    visible: Boolean
  }

  type Bookmark {
    _id: ID
    username: String
    vocabId: Int
    wordId: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    userCourses: [UserCourse]
    userCoursesByUsername(username: String!): [UserCourse]
    userCoursesByCourseId(courseId: Int!): [UserCourse]
    userCoursesCountByCourseId(courseId: Int!): Int
    userCoursesCountByUsername(username: String!): Int
    userCoursesByUserAndCourse(username: String!, courseId: Int!): UserCourse
    getBookmarksByUsername(username: String!): [Bookmark]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateExperience(experience: Int!): User
    addCourseToUser(username: String!, courseId: Int!): UserCourse
    updateCourse(
    username: String!, 
    courseId: Int!, 
    highestCorrected: Int, 
    timeLearned: Int, 
    isCompleted: Boolean, 
    visible: Boolean): UserCourse
    addBookmark(username: String!, vocabId: Int!, wordId: Int!): Bookmark
    removeBookmark(username: String!, vocabId: Int!, wordId: Int!): Bookmark
  }
`;

export default typeDefs;