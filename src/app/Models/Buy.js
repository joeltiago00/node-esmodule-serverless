import mongoose from 'mongoose';

const buySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  course_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  payment_type: {
    type: string,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  refound_reason: {
    type: String,
  },
  refounded_at: {
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

const Buy = mongoose.model('Buy', buySchema);

export default Buy;
