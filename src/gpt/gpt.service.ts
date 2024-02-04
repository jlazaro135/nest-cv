import { Injectable } from '@nestjs/common';
import { questionUseCase } from 'src/use-cases/question.user-case';

import OpenAI from 'openai';

@Injectable()
export class GptService {

  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

  async sendQuestion(
    messageThreadsDto: OpenAI.Chat.ChatCompletionMessageParam[],
  ) {
    return await questionUseCase(this.openai, messageThreadsDto);
  }

}
