import express from 'express';
import OpenAI from 'openai';

const router = express.Router();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.post('/chat', async (req, res) => {
  try {
    const { message, subject } = req.body;

    const prompt = `You are an expert tutor in ${subject}. 
    Provide a detailed, accurate, and educational response to the following question: ${message}
    If this is a multiple choice question, analyze each option and explain why the correct answer is right 
    and why others are wrong. Include relevant examples and explanations where appropriate.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ message: 'Error processing chat request' });
  }
});

export default router;