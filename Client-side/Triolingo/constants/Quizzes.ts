import { MultipleChoicesQuiz, QuizType } from "./QuizDefinitions";

export const SampleQuizzes = {
    title: "SampleQuizzes",
    numberOfQuizzes: 15,
    quizzes: [
        new MultipleChoicesQuiz(1, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'あ'?", ["a", "i", "u", "e"], "a"),
        new MultipleChoicesQuiz(2, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'い'?", ["a", "i", "u", "e"], "i"),
        new MultipleChoicesQuiz(3, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'う'?", ["a", "i", "u", "e"], "u"),
        new MultipleChoicesQuiz(4, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'え'?", ["a", "i", "u", "e"], "e"),
        new MultipleChoicesQuiz(5, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'お'?", ["a", "i", "u", "o"], "o"),
        new MultipleChoicesQuiz(6, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'か'?", ["ka", "ki", "ku", "ke"], "ka"),
        new MultipleChoicesQuiz(7, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'き'?", ["ka", "ki", "ku", "ke"], "ki"),
        new MultipleChoicesQuiz(8, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'く'?", ["ka", "ki", "ku", "ke"], "ku"),
        new MultipleChoicesQuiz(9, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'け'?", ["ka", "ki", "ku", "ke"], "ke"),
        new MultipleChoicesQuiz(10, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'こ'?", ["ka", "ki", "ku", "ko"], "ko"),
        new MultipleChoicesQuiz(11, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'さ'?", ["sa", "shi", "su", "se"], "sa"),
        new MultipleChoicesQuiz(12, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'し'?", ["sa", "shi", "su", "se"], "shi"),
        new MultipleChoicesQuiz(13, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'す'?", ["sa", "shi", "su", "se"], "su"),
        new MultipleChoicesQuiz(14, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'せ'?", ["sa", "shi", "su", "se"], "se"),
        new MultipleChoicesQuiz(15, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'そ'?", ["sa", "shi", "su", "so"], "so"),
    ]
}