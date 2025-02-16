// import { createOpenAI } from '@ai-sdk/openai';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { env } from 'app/config/env';

// const openai = createOpenAI({
//   // custom settings, e.g.
//   compatibility: 'strict', // strict mode, enable when using the OpenAI API
//   apiKey: env.OPENAI_API_KEY,
// });


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const runtime = 'edge'


export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o-mini'),
    messages,
  });

  return result.toDataStreamResponse({
    getErrorMessage: error => {
      if (error == null) {
        return 'unknown error';
      }

      if (typeof error === 'string') {
        return error;
      }

      if (error instanceof Error) {
        return error.message;
      }

      return JSON.stringify(error);
    },
  });
}