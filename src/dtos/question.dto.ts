import { IsString } from "class-validator";

export class QuestionDto {

    @IsString()
    readonly prompt: string;

}