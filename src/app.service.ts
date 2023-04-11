import { Injectable } from '@nestjs/common';
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');
dotenv.config();

@Injectable()
export class AppService {
  async callOpenApi(data: { text: string }) {
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      let temp_data = JSON.stringify(data.text);
      let finalData = temp_data.replace(/[/\])}[{(]/g, '');

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: finalData,
        temperature: 0.05,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      return response.data.choices[0].text;
    } catch (err) {
      console.log('errrr', err);
    }
  }
}
