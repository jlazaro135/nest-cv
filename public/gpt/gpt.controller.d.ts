import { GptService } from './gpt.service';
import type { Response } from 'express';
import OpenAI from 'openai';
export declare class GptController {
    private readonly gptService;
    constructor(gptService: GptService);
    prosConsDiscusser(messagesThread: OpenAI.Chat.ChatCompletionMessageParam[], res: Response): Promise<void>;
}
