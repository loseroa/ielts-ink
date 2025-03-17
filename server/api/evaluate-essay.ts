import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { essay } = body;

    if (!essay) {
      throw createError({
        statusCode: 400,
        message: 'Essay text is required',
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `Please evaluate this IELTS essay and provide feedback in the following format:
            {
                overallScore,
                detailedScores
                feedback,
                suggestions
            }

    Essay:
    ${essay}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // remove ```json{}``` from the response
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    const jsonText = text.slice(jsonStart, jsonEnd + 1);

    console.log("API response: " + jsonText);
    return {
      evaluation: jsonText,
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Error evaluating essay',
    });
  }
});
