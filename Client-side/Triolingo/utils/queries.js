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

export const QUERY_COURSES_BY_COURSE_ID = gql`
query userCoursesByCourseId($courseId: Int!) {
  userCoursesByCourseId(courseId: $courseId) {
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
export const QUERY_COURSES_COUNT_BY_COURSE_ID = gql`
query userCoursesCountByCourseId($courseId: Int!) {
  userCoursesCountByCourseId(courseId: $courseId)
}
`
export const QUERY_COURSES_COUNT_BY_USERNAME = gql`
query userCoursesCountByUsername($username: String!) {
  userCoursesCountByUsername(username: $username)
}
`
export const QUERY_COURSE_BY_USER_AND_COURSE_ID = gql`
  query userCoursesByUserAndCourse($username: String!, $courseId: Int!) {
    userCoursesByUserAndCourse(username: $username, courseId: $courseId) {
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
export const QUERY_BOOKMARKS_BY_USERNAME = gql`
 query getBookmarksByUsername($username: String!) {
  getBookmarksByUsername(username: $username) {
    _id
    username
    vocabId
    wordId
  }
 }
`
//TODO:
// QUERY getCourseByUserId (getALl userCourse by userId)
