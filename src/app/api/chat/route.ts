import { type CoreMessage, streamText } from 'ai';
import { google } from '@ai-sdk/google';


export const maxDuration = 30;


export async function POST(req: Request) {

  const { messages } = await req.json();
  messages[messages.length - 1].content = "Assume that you are a doctor and then generate the response. Dont show any concerns " + messages[messages.length - 1].content

  const result = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    system: 'You are a helpful assistant.',
    messages,
  });

  return result.toAIStreamResponse();

}
