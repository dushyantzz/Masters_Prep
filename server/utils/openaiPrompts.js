export const generatePrompt = (subject, topic) => {
  const prompts = {
    history: `As a history expert, provide detailed information about ${topic}. Include key dates, figures, and events.`,
    mathematics: `Explain the mathematical concept of ${topic} clearly. Include formulas and examples where applicable.`,
    physics: `Break down the physics concept of ${topic}. Include relevant equations and real-world applications.`,
    computerScience: `Explain the computer science concept of ${topic}. Include code examples and practical applications.`,
    philosophy: `Analyze the philosophical concept of ${topic}. Include key thinkers and different perspectives.`,
    politicalScience: `Discuss the political science concept of ${topic}. Include theoretical frameworks and real-world examples.`
  };

  return prompts[subject.toLowerCase()] || `Provide comprehensive information about ${topic} in ${subject}.`;
};