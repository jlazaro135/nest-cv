import { Body, Controller, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { GptService } from './gpt.service';

import type { Response } from 'express';
import OpenAI from 'openai';


@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('send-question')
  @UsePipes(new ValidationPipe({ transform: true }))
  async prosConsDiscusser(
    @Body() messagesThread: OpenAI.Chat.ChatCompletionMessageParam[],
    @Res() res: Response,
  ) {
    const stream = await this.gptService.sendQuestion(messagesThread);

    res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK);

    for await (const chunk of stream) {
      const piece = chunk.choices[0].delta.content || '';
      res.write(piece);
    }

    res.end();
  }
}
