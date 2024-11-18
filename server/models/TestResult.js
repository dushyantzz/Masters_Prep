import mongoose from 'mongoose';

const testResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  timeSpent: { type: Number, required: true }, // in minutes
  subject: { type: String, required: true },
  completedAt: { type: Date, default: Date.now }
});

export default mongoose.model('TestResult', testResultSchema);