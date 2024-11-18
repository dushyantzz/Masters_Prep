import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true }, // index of correct option
  explanation: { type: String, required: true }
});

const testSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  questions: [questionSchema],
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Test', testSchema);