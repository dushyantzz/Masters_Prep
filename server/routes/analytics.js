import express from 'express';
import TestResult from '../models/TestResult.js';

const router = express.Router();

router.get('/performance/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    // Get overall performance
    const results = await TestResult.find({ user: userId })
      .sort('-completedAt')
      .populate('testId', 'subject title');

    // Calculate subject-wise performance
    const subjectPerformance = {};
    results.forEach(result => {
      if (!subjectPerformance[result.subject]) {
        subjectPerformance[result.subject] = {
          totalScore: 0,
          count: 0,
          scores: []
        };
      }
      subjectPerformance[result.subject].totalScore += result.score;
      subjectPerformance[result.subject].count += 1;
      subjectPerformance[result.subject].scores.push(result.score);
    });

    // Calculate averages and prepare response
    const analytics = {
      overall: {
        totalTests: results.length,
        averageScore: results.reduce((acc, curr) => acc + curr.score, 0) / results.length,
        timeSpent: results.reduce((acc, curr) => acc + curr.timeSpent, 0)
      },
      subjectWise: Object.entries(subjectPerformance).map(([subject, data]) => ({
        subject,
        averageScore: data.totalScore / data.count,
        testsCount: data.count,
        scoreProgress: data.scores
      })),
      recentTests: results.slice(0, 5).map(result => ({
        id: result._id,
        subject: result.subject,
        score: result.score,
        date: result.completedAt,
        title: result.testId.title
      }))
    };

    res.json(analytics);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching analytics' });
  }
});

export default router;