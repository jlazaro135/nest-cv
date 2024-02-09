import OpenAI from 'openai';
export declare const questionUseCase: (openai: OpenAI, messagesThread: OpenAI.Chat.ChatCompletionMessageParam[]) => Promise<import("openai/streaming").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
