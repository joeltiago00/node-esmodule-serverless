import mongoose from 'mongoose';

const userCourseWatchSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  course_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  course_file_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  pause_in: {
    type: Number,
  },
  finished_at: {
    type: Date,
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

const UserCourseWatch = mongoose.model(
  'UserCourseWatch',
  userCourseWatchSchema
);

export default UserCourseWatch;
