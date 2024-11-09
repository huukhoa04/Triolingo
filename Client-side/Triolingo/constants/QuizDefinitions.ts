export interface Quiz{
    id: number;
    question: string;
    checkAnswer(arg: any): any;
}
export enum QuizType{
    CHARACTERS_LEARNING,
}

export class MultipleChoicesQuiz implements Quiz{
    id: number;
    question: string;
    type: QuizType;
    options: string[];
    answer: string;
    constructor(id : number, type: QuizType, question: string, options: string[], answer: string){
        this.id = id;
        this.type = type;
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
    checkAnswer(selectedOption: string): boolean {
        return this.answer === selectedOption;
    }
}
