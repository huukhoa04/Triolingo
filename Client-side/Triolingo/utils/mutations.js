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
  mutation addCourseToUser($username: String!, $courseId: Int!) {
    addCourseToUser(username: $username, courseId: $courseId) {
      _id
      username
      courseId
    }
  }
`;

export const UPDATE_COURSE_STATS = gql`
  mutation updateCourse($username: String! ,$courseId: Int!, $highestCorrected: Int, $timeLearned: Int, $isCompleted: Boolean, $visible: Boolean) {
    updateCourse(
    username: $username, 
    courseId: $courseId, 
    highestCorrected: $highestCorrected, 
    timeLearned: $timeLearned, 
    isCompleted: $isCompleted, 
    visible: $visible) 
    {
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
export const ADD_BOOKMARK = gql`
  mutation addBookmark($username: String!, $vocabId: Int!, $wordId: Int!) {
    addBookmark(username: $username, vocabId: $vocabId, wordId: $wordId) {
      _id
      username
      vocabId
      wordId
    }
  }
`
export const REMOVE_BOOKMARK = gql`
  mutation removeBookmark($username: String!, $vocabId: Int!, $wordId: Int!) {
    removeBookmark(username: $username, vocabId: $vocabId, wordId: $wordId) {
      _id
      username
      vocabId
      wordId
    }
  }
`
//TODO: 
//MUTATION: addCourseToUser (add userCourse)
//MUTATION: removeCourseFromUser (remove userCourse)
//MUTATION: Stats (lưu trong từng userCourse)