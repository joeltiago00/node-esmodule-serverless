import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  buy_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  data: {
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

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
