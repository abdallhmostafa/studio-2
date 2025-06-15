// This file uses server-side code.
'use server';

/**
 * @fileOverview A translation AI agent.
 *
 * - translateContent - A function that handles the translation process.
 * - TranslateContentInput - The input type for the translateContent function.
 * - TranslateContentOutput - The return type for the translateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TranslateContentInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.string().describe('The target language to translate to.'),
});
export type TranslateContentInput = z.infer<typeof TranslateContentInputSchema>;

const TranslateContentOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateContentOutput = z.infer<typeof TranslateContentOutputSchema>;

export async function translateContent(input: TranslateContentInput): Promise<TranslateContentOutput> {
  return translateContentFlow(input);
}

const translateContentPrompt = ai.definePrompt({
  name: 'translateContentPrompt',
  input: {
    schema: TranslateContentInputSchema,
  },
  output: {
    schema: TranslateContentOutputSchema,
  },
  prompt: `Translate the following text to {{targetLanguage}}:\n\n{{text}}`,
});

const translateContentFlow = ai.defineFlow(
  {
    name: 'translateContentFlow',
    inputSchema: TranslateContentInputSchema,
    outputSchema: TranslateContentOutputSchema,
  },
  async input => {
    const {output} = await translateContentPrompt(input);
    return output!;
  }
);
