import mongoose from 'mongoose';

const userCourseSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  course_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  created_at: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  updated_at: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

const UserCourse = mongoose.model('UserCourse', userCourseSchema);

export default UserCourse;
