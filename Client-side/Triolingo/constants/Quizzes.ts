import { MultipleChoicesQuiz, QuizType } from "./QuizDefinitions.d";

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const SampleQuizzes = {
    "CharacterLearning": {
        title: "character learning test",
        numberOfQuizzes: 15,
        quizzes: [
            new MultipleChoicesQuiz(1, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'あ'?", shuffleArray(["a", "i", "u", "e"]), "a", "The correct answer is 'a'"),
            new MultipleChoicesQuiz(2, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'い'?", shuffleArray(["a", "i", "u", "e"]), "i", "The correct answer is 'i'"),
            new MultipleChoicesQuiz(3, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'う'?", shuffleArray(["a", "i", "u", "e"]), "u", "The correct answer is 'u'"),
            new MultipleChoicesQuiz(4, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'え'?", shuffleArray(["a", "i", "u", "e"]), "e", "The correct answer is 'e'"),
            new MultipleChoicesQuiz(5, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'お'?", shuffleArray(["a", "i", "u", "o"]), "o", "The correct answer is 'o'"),
            new MultipleChoicesQuiz(6, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'か'?", shuffleArray(["ka", "ki", "ku", "ke"]), "ka", "The correct answer is 'ka'"),
            new MultipleChoicesQuiz(7, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'き'?", shuffleArray(["ka", "ki", "ku", "ke"]), "ki", "The correct answer is 'ki'"),
            new MultipleChoicesQuiz(8, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'く'?", shuffleArray(["ka", "ki", "ku", "ke"]), "ku", "The correct answer is 'ku'"),
            new MultipleChoicesQuiz(9, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'け'?", shuffleArray(["ka", "ki", "ku", "ke"]), "ke", "The correct answer is 'ke'"),
            new MultipleChoicesQuiz(10, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'こ'?", shuffleArray(["ka", "ki", "ku", "ko"]), "ko", "The correct answer is 'ko'"),
            new MultipleChoicesQuiz(11, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'さ'?", shuffleArray(["sa", "shi", "su", "se"]), "sa", "The correct answer is 'sa'"),
            new MultipleChoicesQuiz(12, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'し'?", shuffleArray(["sa", "shi", "su", "se"]), "shi", "The correct answer is 'shi'"),
            new MultipleChoicesQuiz(13, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'す'?", shuffleArray(["sa", "shi", "su", "se"]), "su", "The correct answer is 'su'"),
            new MultipleChoicesQuiz(14, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'せ'?", shuffleArray(["sa", "shi", "su", "se"]), "se", "The correct answer is 'se'"),
            new MultipleChoicesQuiz(15, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'そ'?", shuffleArray(["sa", "shi", "su", "so"]), "so", "The correct answer is 'so'"),
            new MultipleChoicesQuiz(16, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'た'?", shuffleArray(["ta", "chi", "tsu", "te"]), "ta", "The correct answer is 'ta'"),
            new MultipleChoicesQuiz(17, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ち'?", shuffleArray(["ta", "chi", "tsu", "te"]), "chi", "The correct answer is 'chi'"),
            new MultipleChoicesQuiz(18, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'つ'?", shuffleArray(["ta", "chi", "tsu", "te"]), "tsu", "The correct answer is 'tsu'"),
            new MultipleChoicesQuiz(19, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'て'?", shuffleArray(["ta", "chi", "tsu", "te"]), "te", "The correct answer is 'te'"),
            new MultipleChoicesQuiz(20, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'と'?", shuffleArray(["ta", "chi", "tsu", "to"]), "to", "The correct answer is 'to'"),
            new MultipleChoicesQuiz(21, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'な'?", shuffleArray(["na", "ni", "nu", "ne"]), "na", "The correct answer is 'na'"),
            new MultipleChoicesQuiz(22, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'に'?", shuffleArray(["na", "ni", "nu", "ne"]), "ni", "The correct answer is 'ni'"),
            new MultipleChoicesQuiz(23, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ぬ'?", shuffleArray(["na", "ni", "nu", "ne"]), "nu", "The correct answer is 'nu'"),
            new MultipleChoicesQuiz(24, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ね'?", shuffleArray(["na", "ni", "nu", "ne"]), "ne", "The correct answer is 'ne'"),
            new MultipleChoicesQuiz(25, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'の'?", shuffleArray(["na", "ni", "nu", "no"]), "no", "The correct answer is 'no'"),
            new MultipleChoicesQuiz(26, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'は'?", shuffleArray(["ha", "hi", "fu", "he"]), "ha", "The correct answer is 'ha'"),
            new MultipleChoicesQuiz(27, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ひ'?", shuffleArray(["ha", "hi", "fu", "he"]), "hi", "The correct answer is 'hi'"),
            new MultipleChoicesQuiz(28, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ふ'?", shuffleArray(["ha", "hi", "fu", "he"]), "fu", "The correct answer is 'fu'"),
            new MultipleChoicesQuiz(29, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'へ'?", shuffleArray(["ha", "hi", "fu", "he"]), "he", "The correct answer is 'he'"),
            new MultipleChoicesQuiz(30, QuizType.CHARACTERS_LEARNING, "What is the romaji for 'ほ'?", shuffleArray(["ha", "hi", "fu", "ho"]), "ho", "The correct answer is 'ho'")
        ]
    },
    "SentenceCompletion": {
        title: "Sentence completion test",
        numberOfQuizzes: 15,
        quizzes: [
            new MultipleChoicesQuiz(1, QuizType.SENTENCES_COMPLETION, "I like flowers", shuffleArray(["すき", "わたし", "はな", "が", "は", "ほ"]), "わたしははながすき", "The correct answer is 「わたしははながすき」(I like flowers)"),
            new MultipleChoicesQuiz(2, QuizType.SENTENCES_COMPLETION, "I like cats", shuffleArray(["ねこ", "いぬ", "が", "すき", "は", "です"]), "ねこがすきです", "The correct answer is 「ねこがすきです」(I like cats)"),
            new MultipleChoicesQuiz(3, QuizType.SENTENCES_COMPLETION, "I go to school", shuffleArray(["わたし", "は", "がっこう", "に", "いきます", "いえ"]), "わたしはがっこうにいきます", "The correct answer is 「わたしはがっこうにいきます」(I go to school)"),
            new MultipleChoicesQuiz(4, QuizType.SENTENCES_COMPLETION, "I play with friends", shuffleArray(["ともだち", "と", "あそびます", "は", "が", "で"]), "ともだちとあそびます", "The correct answer is 「ともだちとあそびます」(I play with friends)"),
            new MultipleChoicesQuiz(5, QuizType.SENTENCES_COMPLETION, "I read a book", shuffleArray(["わたし", "は", "ほん", "を", "よみます", "が"]), "わたしはほんをよみます", "The correct answer is 「わたしはほんをよみます」(I read a book)"),
            new MultipleChoicesQuiz(6, QuizType.SENTENCES_COMPLETION, "There is a dog", shuffleArray(["いぬ", "が", "います", "ねこ", "は", "に"]), "いぬがいます", "The correct answer is 「いぬがいます」(There is a dog)"),
            new MultipleChoicesQuiz(7, QuizType.SENTENCES_COMPLETION, "I listen to music", shuffleArray(["わたし", "は", "おんがく", "を", "ききます", "が"]), "わたしはおんがくをききます", "The correct answer is 「わたしはおんがくをききます」(I listen to music)"),
            new MultipleChoicesQuiz(8, QuizType.SENTENCES_COMPLETION, "I study Japanese", shuffleArray(["わたし", "は", "にほんご", "を", "べんきょうします", "が"]), "わたしはにほんごをべんきょうします", "The correct answer is 「わたしはにほんごをべんきょうします」(I study Japanese)"),
            new MultipleChoicesQuiz(9, QuizType.SENTENCES_COMPLETION, "I meet my friend", shuffleArray(["わたし", "は", "ともだち", "に", "あいます", "が"]), "わたしはともだちにあいます", "The correct answer is 「わたしはともだちにあいます」(I meet my friend)"),
            new MultipleChoicesQuiz(10, QuizType.SENTENCES_COMPLETION, "I watch a movie", shuffleArray(["わたし", "は", "えいが", "を", "みます", "が"]), "わたしはえいがをみます", "The correct answer is 「わたしはえいがをみます」(I watch a movie)"),
            new MultipleChoicesQuiz(11, QuizType.SENTENCES_COMPLETION, "I eat an apple", shuffleArray(["わたし", "は", "りんご", "を", "たべます", "が"]), "わたしはりんごをたべます", "The correct answer is 「わたしはりんごをたべます」(I eat an apple)"),
            new MultipleChoicesQuiz(12, QuizType.SENTENCES_COMPLETION, "I buy a car", shuffleArray(["わたし", "は", "くるま", "を", "かいます", "が"]), "わたしはくるまをかいます", "The correct answer is 「わたしはくるまをかいます」(I buy a car)"),
            new MultipleChoicesQuiz(13, QuizType.SENTENCES_COMPLETION, "I go to the sea", shuffleArray(["わたし", "は", "うみ", "に", "いきます", "が"]), "わたしはうみにいきます", "The correct answer is 「わたしはうみにいきます」(I go to the sea)"),
            new MultipleChoicesQuiz(14, QuizType.SENTENCES_COMPLETION, "I eat vegetables", shuffleArray(["わたし", "は", "やさい", "を", "たべます", "が"]), "わたしはやさいをたべます", "The correct answer is 「わたしはやさいをたべます」(I eat vegetables)"),
            new MultipleChoicesQuiz(15, QuizType.SENTENCES_COMPLETION, "I buy a book", shuffleArray(["わたし", "は", "ほん", "を", "かいます", "が"]), "わたしはほんをかいます", "The correct answer is 「わたしはほんをかいます」(I buy a book)")
        ]
    },
}