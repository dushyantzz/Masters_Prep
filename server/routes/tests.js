import express from 'express';
import Test from '../models/Test.js';
import TestResult from '../models/TestResult.js';

const router = express.Router();

// Get all tests
router.get('/', async (req, res) => {
  try {
    const { subject, difficulty } = req.query;
    const query = {};
    if (subject) query.subject = subject;
    if (difficulty) query.difficulty = difficulty;
    
    const tests = await Test.find(query).select('-questions.correctAnswer');
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tests' });
  }
});

// Get specific test
router.get('/:testId', async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId)
      .select('-questions.correctAnswer');
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching test' });
  }
});

// Submit test result
router.post('/:testId/submit', async (req, res) => {
  try {
    const { userId, answers, timeSpent } = req.body;
    const test = await Test.findById(req.params.testId);
    
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }

    // Calculate score
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === test.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    const score = (correctAnswers / test.questions.length) * 100;

    // Save result
    const result = new TestResult({
      user: userId,
      testId: test._id,
      score,
      totalQuestions: test.questions.length,
      correctAnswers,
      timeSpent,
      subject: test.subject
    });

    await result.save();
    res.json({ score, correctAnswers, totalQuestions: test.questions.length });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting test' });
  }
});

export default router;