import mongoose from 'mongoose';

const courseFileSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  is_visible: {
    type: Boolean,
    required: true,
    default: false,
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

const CourseFile = mongoose.model('CourseFile', courseFileSchema);

export default CourseFile;
