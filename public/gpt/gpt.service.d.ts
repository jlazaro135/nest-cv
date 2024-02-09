import OpenAI from 'openai';
export declare class GptService {
    private openai;
    sendQuestion(messageThreadsDto: OpenAI.Chat.ChatCompletionMessageParam[]): Promise<import("openai/streaming").Stream<OpenAI.Chat.Completions.ChatCompletionChunk>>;
}
