import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
  },
  last_name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
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

const User = mongoose.model('User', userSchema);

export default User;
