const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  answers: [answerSchema], // Array of answers
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Question', questionSchema);
