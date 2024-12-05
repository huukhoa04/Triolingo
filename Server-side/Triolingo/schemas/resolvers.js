import User from "../models/user.js";
import { AuthenticationError } from 'apollo-server-express';
import { signToken } from '../utils/auth.js';
import UserCourse from "../models/userCourse.js";

const resolvers = {
  Query: {
    // get logged in user
    me: async (parent, args, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    // get all users
    users: async () => {
      return (
        User.find()
          // omit mongoose-specific __v property and user's password information
          .select('-__v -password')
      );
    },

    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select('-__v -password');
    },

    userCourses: async () => {
      return (
        UserCourse.find()
          // omit mongoose-specific __v property
          .select('-__v')
      )
    },
    userCoursesByUsername: async (parent, { username }) => {
      return UserCourse.find({ username }).select('-__v');
    },
    userCoursesByCourseId: async (parent, { courseId }) => {
      return UserCourse.find({ courseId }).select('-__v');
    },
    userCoursesCountByCourseId: async (parent, { courseId }) => {
      return UserCourse.countDocuments({ courseId: courseId });
    },
    userCoursesCountByUsername: async (parent, { username }) => {
      return UserCourse.countDocuments({ username: username });
    },
    userCoursesByUserAndCourse: async (parent, { username, courseId }) => {
      return UserCourse.findOne({ username: username, courseId: courseId }).select('-__v');
    },


  },
  Mutation: {
    // add a user to the database
    addUser: async (parent, args) => {
      const user = await User.create(args); // create a new user from args
      const token = signToken(user); // sign a token for the new user
      return { token, user }; // return the token and the user
    },

    // login a user
    login: async (parent, { email, password }) => {
      // find a user by email
      const user = await User.findOne({ email });

      // if user doesn't exist, display error message
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // check if password is correct
      const correctPw = await user.isCorrectPassword(password);

      // if password is incorrect, display error message
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // create token
      const token = signToken(user);
      // return token and user
      return { token, user };
    },

    // update a user's experience
    updateExperience: async (parent, { experience }, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        // find user by id and update experience
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { experience } },
          { new: true }
        );

        // return updated user
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addCourseToUser: async (parent, args, context) => {
      if (context.user) {
        const check = await UserCourse.findOne({ username: args.username, courseId: args.courseId });
        if (check) {
          if(check.visible === false) {
            console.log('deleted');
            const updatedCourse = await UserCourse.findOneAndUpdate(
              { username: args.username, courseId: args.courseId },
              { $set: { visible: true } },
              { new: true }
            );
            return updatedCourse;
          }
          else {
            console.log('visible');
            return false;
          }
        }
        else {
          const userCourse = await UserCourse.create(args);
          return userCourse;
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateCourse: async (parent, args, context) => {
      if (context.user) {
        const updatedCourse = await UserCourse.findOneAndUpdate(
          { username: args.username, courseId: args.courseId },
          { $set: args },
          { new: true }
        );
        return updatedCourse;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

  },
};

export default resolvers;

/* GraphQL resolver trong ứng dụng Node.js sử dụng thư viện Apollo Server Express.
 Nó giúp xử lý các truy vấn (queries) và đột biến (mutations) 
 đối với cơ sở dữ liệu người dùng (User)*/

 //me: lấy thông tin người dùng đang đăng nhập
 //users: Lấy danh sách tất cả người dùng trong hệ thống
 //user: Lấy thông tin của một người dùng cụ thể dựa trên tên đăng nhập
 //add: Tạo mới một người dùng và trả về token đăng nhập kèm thông tin người dùng.
 //login: xử lí đăng nhập và trả token kèm thông tin người dùng
 //updateExperience: Cập nhật điểm kinh nghiệm (experience) của người dùng