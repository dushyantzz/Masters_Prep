export const testData = [
  {
    title: "History - Ancient Civilizations",
    subject: "History",
    description: "Test your knowledge of ancient civilizations and their impact on modern society",
    duration: 60,
    difficulty: "Medium",
    questions: [
      {
        question: "Which ancient civilization built the pyramids of Giza?",
        options: ["Mesopotamians", "Egyptians", "Greeks", "Romans"],
        correctAnswer: 1,
        explanation: "The pyramids of Giza were built by the ancient Egyptians during the Old Kingdom period."
      },
      // More questions would be added here
    ]
  },
  {
    title: "Advanced Mathematics - Calculus",
    subject: "Mathematics",
    description: "Complex calculus problems for advanced mathematics students",
    duration: 90,
    difficulty: "Hard",
    questions: [
      {
        question: "What is the derivative of ln(x)?",
        options: ["1/x", "x", "ex", "1"],
        correctAnswer: 0,
        explanation: "The derivative of ln(x) is 1/x because the natural logarithm and 1/x are inverse functions."
      }
    ]
  }
];

export const initializeTests = async (Test) => {
  try {
    const count = await Test.countDocuments();
    if (count === 0) {
      await Test.insertMany(testData);
      console.log('Test data initialized');
    }
  } catch (error) {
    console.error('Error initializing test data:', error);
  }
};