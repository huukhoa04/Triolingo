// This file stores all of the GraphQL query requests.
import { gql } from '@apollo/client';

// Because we aren't passing any variables to it, we can simply name the query, and GraphQL will handle the rest.
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      createdAt
      experience
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      createdAt
      experience
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      createdAt
      experience
    }
  }
`;

export const QUERY_COURSES = gql`
  {
    userCourses {
      _id
      username
      courseId
      dateJoined
      highestCorrected
      total
      timeLearned
      isCompleted
      visible
    }
  }
`;

export const QUERY_COURSES_BY_USER = gql`
  query userCoursesByUsername($username: String!) {
    userCoursesByUsername(username: $username) {
      _id
      username
      courseId
      dateJoined
      highestCorrected
      total
      timeLearned
      isCompleted
      visible
    }
  }
`
//TODO:
// QUERY getCourseByUserId (getALl userCourse by userId)
