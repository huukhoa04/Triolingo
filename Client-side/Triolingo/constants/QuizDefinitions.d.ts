export interface Quiz{
    id: number;
    question: string;
    // audio: string;
    explaination: string;
    checkAnswer(arg: any): any;
}
export enum QuizType{
    CHARACTERS_LEARNING,
    SENTENCES_COMPLETION,
}

export class MultipleChoicesQuiz implements Quiz{
    id: number;
    question: string;
    type: QuizType;
    options: string[];
    answer: string;
    explaination: string;
    // audio: string;
    constructor(id : number, type: QuizType, question: string, options: string[], answer: string, explaination: string){
        this.id = id;
        this.type = type;
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.explaination = explaination;
        // this.audio = audio;
    }
    checkAnswer(selectedOption: string): boolean {
        return this.answer === selectedOption;
    }
}
