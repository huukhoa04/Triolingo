// This file stores all of the GraphQL mutation requests.
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_EXPERIENCE = gql`
  mutation updateExperience($experience: Int!) {
    updateExperience(experience: $experience) {
      _id
      username
      experience
    }
  }
`;

export const ADD_COURSE_TO_USER = gql`
  mutation addCourseToUser($username: String!, $courseId: Number!) {
    addCourseToUser(username: $username, courseId: $courseId) {
      _id
      username
      courseId
      total
    }
  }
`;

export const UPDATE_COURSE_STATS = gql`
  mutation updateCourse($courseId: Number!, $highestCorrected: Number, $timeLearned: Number, $visible: Boolean) {
    updateCourse(courseId: $courseId, highestCorrected: $highestCorrected, timeLearned: $timeLearned, visible: $visible) {
      _id
      username
      courseId
      highestCorrected
      timeLearned
      isCompleted
      visible
    }
  }
`;

//TODO: 
//MUTATION: addCourseToUser (add userCourse)
//MUTATION: removeCourseFromUser (remove userCourse)
//MUTATION: Stats (lưu trong từng userCourse)