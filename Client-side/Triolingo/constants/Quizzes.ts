import { MultipleChoicesQuiz, QuizType } from "./QuizDefinitions";

export const SampleQuizzes = {
    title: "SampleQuizzes",
    numberOfQuizzes: 15,
    quizzes: [
        new MultipleChoicesQuiz(1, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'あ'?", ["a", "i", "u", "e"], "a", "The correct answer is 'a'"),
        new MultipleChoicesQuiz(2, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'い'?", ["a", "i", "u", "e"], "i", "The correct answer is 'i'"),
        new MultipleChoicesQuiz(3, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'う'?", ["a", "i", "u", "e"], "u", "The correct answer is 'u'"),
        new MultipleChoicesQuiz(4, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'え'?", ["a", "i", "u", "e"], "e", "The correct answer is 'e'"),
        new MultipleChoicesQuiz(5, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'お'?", ["a", "i", "u", "o"], "o", "The correct answer is 'o'"),
        new MultipleChoicesQuiz(6, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'か'?", ["ka", "ki", "ku", "ke"], "ka", "The correct answer is 'ka'"),
        new MultipleChoicesQuiz(7, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'き'?", ["ka", "ki", "ku", "ke"], "ki", "The correct answer is 'ki'"),
        new MultipleChoicesQuiz(8, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'く'?", ["ka", "ki", "ku", "ke"], "ku", "The correct answer is 'ku'"),
        new MultipleChoicesQuiz(9, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'け'?", ["ka", "ki", "ku", "ke"], "ke", "The correct answer is 'ke'"),
        new MultipleChoicesQuiz(10, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'こ'?", ["ka", "ki", "ku", "ko"], "ko", "The correct answer is 'ko'"),
        new MultipleChoicesQuiz(11, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'さ'?", ["sa", "shi", "su", "se"], "sa", "The correct answer is 'sa'"),
        new MultipleChoicesQuiz(12, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'し'?", ["sa", "shi", "su", "se"], "shi", "The correct answer is 'shi'"),
        new MultipleChoicesQuiz(13, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'す'?", ["sa", "shi", "su", "se"], "su", "The correct answer is 'su'"),
        new MultipleChoicesQuiz(14, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'せ'?", ["sa", "shi", "su", "se"], "se", "The correct answer is 'se'"),
        new MultipleChoicesQuiz(15, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'そ'?", ["sa", "shi", "su", "so"], "so", "The correct answer is 'so'"),
        new MultipleChoicesQuiz(16, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'た'?", ["ta", "chi", "tsu", "te"], "ta", "The correct answer is 'ta'"),
        new MultipleChoicesQuiz(17, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ち'?", ["ta", "chi", "tsu", "te"], "chi", "The correct answer is 'chi'"),
        new MultipleChoicesQuiz(18, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'つ'?", ["ta", "chi", "tsu", "te"], "tsu", "The correct answer is 'tsu'"),
        new MultipleChoicesQuiz(19, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'て'?", ["ta", "chi", "tsu", "te"], "te", "The correct answer is 'te'"),
        new MultipleChoicesQuiz(20, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'と'?", ["ta", "chi", "tsu", "to"], "to", "The correct answer is 'to'"),
        new MultipleChoicesQuiz(21, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'な'?", ["na", "ni", "nu", "ne"], "na", "The correct answer is 'na'"),
        new MultipleChoicesQuiz(22, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'に'?", ["na", "ni", "nu", "ne"], "ni", "The correct answer is 'ni'"),
        new MultipleChoicesQuiz(23, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ぬ'?", ["na", "ni", "nu", "ne"], "nu", "The correct answer is 'nu'"),
        new MultipleChoicesQuiz(24, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ね'?", ["na", "ni", "nu", "ne"], "ne", "The correct answer is 'ne'"),
        new MultipleChoicesQuiz(25, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'の'?", ["na", "ni", "nu", "no"], "no", "The correct answer is 'no'"),
        new MultipleChoicesQuiz(26, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'は'?", ["ha", "hi", "fu", "he"], "ha", "The correct answer is 'ha'"),
        new MultipleChoicesQuiz(27, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ひ'?", ["ha", "hi", "fu", "he"], "hi", "The correct answer is 'hi'"),
        new MultipleChoicesQuiz(28, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ふ'?", ["ha", "hi", "fu", "he"], "fu", "The correct answer is 'fu'"),
        new MultipleChoicesQuiz(29, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'へ'?", ["ha", "hi", "fu", "he"], "he", "The correct answer is 'he'"),
        new MultipleChoicesQuiz(30, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ほ'?", ["ha", "hi", "fu", "ho"], "ho", "The correct answer is 'ho'")
    ]
}