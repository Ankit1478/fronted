'use server';

import { OpenAI } from 'openai';
import Anthropic from '@anthropic-ai/sdk';

import { Section } from '@/components/section';
import { BotMessage } from '@/components/message';

const openai = new OpenAI({
  baseURL: process.env.SPECIFIC_API_BASE,
  apiKey: process.env.SPECIFIC_API_KEY
});

const anthropic = new Anthropic();

const transai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function writer(
  uiStream,
  streamText,
  messages,
  {
    language: lang,
    model,
  } = { language: 'English', model: 'llama' },
) {
  let fullResponse = ''
  const answerSection = (
    <Section title="Story">
      <BotMessage content={streamText.value} />
    </Section>
  )

  let isFirstToolResponse = true

  if (lang == '' || lang == "English") {
    const createMessages = model == 'claude' ?
      anthropic.messages.create({
        model: 'claude-3-5-sonnet-20240620',
        messages: messages.filter((m) => m.role != 'system'),
        system: messages.find((m) => m.role == 'system')?.content,
        stream: true,
        max_tokens: 4096,
      }) :
      openai.chat.completions.create({
        model: 'llama-3-70b-instruct',
        messages,
        stream: true,
      });

    await createMessages
      .then(async result => {
        for await (const chunk of result) {
          if (chunk) {
            if (model == 'claude') {
              if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
                fullResponse += chunk.delta.text;

                streamText.update(fullResponse)
              }
            }
            else {
              fullResponse = chunk.choices[0].message.content

              streamText.update(fullResponse)
            }

            if (isFirstToolResponse) {
              isFirstToolResponse = false
              uiStream.update(null)
              uiStream.append(answerSection)
            }
            else {
              uiStream.update(answerSection)
            }
          }
        }
      })
  }
  else {
    const createMessages = model == 'claude' ?
      anthropic.messages.create({
        model: 'claude-3-5-sonnet-20240620',
        messages: messages.filter((m) => m.role != 'system'),
        system: messages.find((m) => m.role == 'system')?.content,
        max_tokens: 4096,
      }).then((res) => res.content[0].text) :
      openai.chat.completions.create({
        model: 'llama-3-70b-instruct',
        messages,
      }).then((res) => res.choices[0].message.content);

    const story = await createMessages;

    await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20240620',
      messages: [
        { role: 'user', content: `Translate the following English text to ${lang}: "${story}. Do not include any English."` },
      ],
      system: `You are a highly skilled translator with expertise in many languages. Your task is to accurately translate the provided text into the specified target language while preserving the meaning, tone, and nuance of the original text. Please maintain proper grammar, spelling, and punctuation in the translated version. Only include the translated title and story in your response.`,
      stream: true,
      max_tokens: 4096,
    })
      .then(async result => {
        for await (const chunk of result) {
          if (chunk) {
            if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
              fullResponse += chunk.delta.text;

              streamText.update(fullResponse)
            }

            if (isFirstToolResponse) {
              isFirstToolResponse = false
              uiStream.update(null)
              uiStream.append(answerSection)
            }
            else {
              uiStream.update(answerSection)
            }
          }
        }
      })
  }

  return fullResponse
}
