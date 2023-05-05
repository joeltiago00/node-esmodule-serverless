import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  owner_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: Array,
    required: true,
  },
  rating: {
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

const Course = mongoose.model('Course', courseSchema);

export default Course;
