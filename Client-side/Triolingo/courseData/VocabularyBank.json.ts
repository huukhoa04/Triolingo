export interface Word {
    id: number;
    word: string;
    meaning: string;
    example: string;
    exampleMeaning?: string;
    audio: string;
    image: string;
    yomikata: string;
    romaji: string;
}
export interface Vocabulary {
    id: number;
    title: string;
    desc: string;
    words: Word[];
}

export class VocabularyClass implements Vocabulary {
    constructor(
        public id: number,
        public title: string,
        public desc: string,
        public words: Word[]
    ) {}
}

export const VocabularyBank: Vocabulary[] = [
    new VocabularyClass(1, "Greeting", "Basic Vocabulary about Greeting", [
        {
            id: 1,
            word: "こんにちは",
            meaning: "Hello",
            example: "こんにちは、私はジョンです。",
            exampleMeaning: "Hello, I am John.",
            audio: "こんにちは",
            image: "こんにちは",
            yomikata: "こんにちは",
            romaji: "konnichiwa"
        },
        {
            id: 2,
            word: "おはよう",
            meaning: "Good morning",
            example: "おはよう、今日はいい天気ですね。",
            exampleMeaning: "Good morning, it's nice weather today.",
            audio: "おはよう",
            image: "おはよう",
            yomikata: "おはよう",
            romaji: "ohayou"
        },
        {
            id: 3,
            word: "こんばんは",
            meaning: "Good evening",
            example: "こんばんは、今日は遅くまで働きました。",
            exampleMeaning: "Good evening, I worked late today.",
            audio: "こんばんは",
            image: "こんばんは",
            yomikata: "こんばんは",
            romaji: "konbanwa"
        },
        {
            id: 4,
            word: "さようなら",
            meaning: "Goodbye",
            example: "さようなら、また会いましょう。",
            exampleMeaning: "Goodbye, let's meet again.",
            audio: "さようなら",
            image: "さようなら",
            yomikata: "さようなら",
            romaji: "sayounara"
        },
        {
            id: 5,
            word: "ありがとう",
            meaning: "Thank you",
            example: "ありがとう、助けてくれてありがとう。",
            exampleMeaning: "Thank you, thank you for helping me.",
            audio: "ありがとう",
            image: "ありがとう",
            yomikata: "ありがとう",
            romaji: "arigatou"
        },
        {
            id: 6,
            word: "すみません",
            meaning: "Excuse me",
            example: "すみません、ちょっと聞いてもいいですか。",
            exampleMeaning: "Excuse me, can I ask you something?",
            audio: "すみません",
            image: "すみません",
            yomikata: "すみません",
            romaji: "sumimasen"
        },
        {
            id: 7,
            word: "ごめんなさい",
            meaning: "I'm sorry",
            example: "ごめんなさい、遅れてしまいました。",
            exampleMeaning: "I'm sorry, I am late.",
            audio: "ごめんなさい",
            image: "ごめんなさい",
            yomikata: "ごめんなさい",
            romaji: "gomennasai"
        },
        {
            id: 8,
            word: "はい",
            meaning: "Yes",
            example: "はい、分かりました。",
            exampleMeaning: "Yes, I understand.",
            audio: "はい",
            image: "はい",
            yomikata: "はい",
            romaji: "hai"
        },
    ]),
    new VocabularyClass(2, "Education", "Education themed vocabulary", [
        {
            id: 1,
            word: "学校",
            meaning: "School",
            example: "私は学校に行きます。",
            exampleMeaning: "I go to school.",
            audio: "学校",
            image: "学校",
            yomikata: "がっこう",
            romaji: "gakkou"
        },
        {
            id: 2,
            word: "先生",
            meaning: "Teacher",
            example: "先生は教室にいます。",
            exampleMeaning: "The teacher is in the classroom.",
            audio: "先生",
            image: "先生",
            yomikata: "せんせい",
            romaji: "sensei"
        },
        {
            id: 3,
            word: "学生",
            meaning: "Student",
            example: "学生は勉強しています。",
            exampleMeaning: "The student is studying.",
            audio: "学生",
            image: "学生",
            yomikata: "がくせい",
            romaji: "gakusei"
        },
        {
            id: 4,
            word: "教室",
            meaning: "Classroom",
            example: "教室は広いです。",
            exampleMeaning: "The classroom is spacious.",
            audio: "教室",
            image: "教室",
            yomikata: "きょうしつ",
            romaji: "kyoushitsu"
        },
        {
            id: 5,
            word: "本",
            meaning: "Book",
            example: "私は本を読みます。",
            exampleMeaning: "I read a book.",
            audio: "本",
            image: "本",
            yomikata: "ほん",
            romaji: "hon"
        },
        {
            id: 6,
            word: "鉛筆",
            meaning: "Pencil",
            example: "鉛筆で書きます。",
            exampleMeaning: "I write with a pencil.",
            audio: "鉛筆",
            image: "鉛筆",
            yomikata: "えんぴつ",
            romaji: "enpitsu"
        },
        {
            id: 7,
            word: "ノート",
            meaning: "Notebook",
            example: "ノートにメモを取ります。",
            exampleMeaning: "I take notes in a notebook.",
            audio: "ノート",
            image: "ノート",
            yomikata: "ノート",
            romaji: "nooto"
        },
        {
            id: 8,
            word: "試験",
            meaning: "Exam",
            example: "試験は難しいです。",
            exampleMeaning: "The exam is difficult.",
            audio: "試験",
            image: "試験",
            yomikata: "しけん",
            romaji: "shiken"
        },
    ]),
    new VocabularyClass(3, "Family", "Vocabulary about family", [
        {
            id: 1,
            word: "家族",
            meaning: "Family",
            example: "私の家族は5人です。",
            exampleMeaning: "My family has five members.",
            audio: "家族",
            image: "家族",
            yomikata: "かぞく",
            romaji: "kazoku"
        },
        {
            id: 2,
            word: "父",
            meaning: "Father",
            example: "父は仕事に行きます。",
            exampleMeaning: "My father goes to work.",
            audio: "父",
            image: "父",
            yomikata: "ちち",
            romaji: "chichi"
        },
        {
            id: 3,
            word: "母",
            meaning: "Mother",
            example: "母は料理をします。",
            exampleMeaning: "My mother cooks.",
            audio: "母",
            image: "母",
            yomikata: "はは",
            romaji: "haha"
        },
        {
            id: 4,
            word: "兄",
            meaning: "Elder brother",
            example: "兄は大学生です。",
            exampleMeaning: "My elder brother is a university student.",
            audio: "兄",
            image: "兄",
            yomikata: "あに",
            romaji: "ani"
        },
        {
            id: 5,
            word: "姉",
            meaning: "Elder sister",
            example: "姉は病院で働いています。",
            exampleMeaning: "My elder sister works at a hospital.",
            audio: "姉",
            image: "姉",
            yomikata: "あね",
            romaji: "ane"
        },
        {
            id: 6,
            word: "弟",
            meaning: "Younger brother",
            example: "弟は小学生です。",
            exampleMeaning: "My younger brother is an elementary school student.",
            audio: "弟",
            image: "弟",
            yomikata: "おとうと",
            romaji: "otouto"
        },
        {
            id: 7,
            word: "妹",
            meaning: "Younger sister",
            example: "妹は高校生です。",
            exampleMeaning: "My younger sister is a high school student.",
            audio: "妹",
            image: "妹",
            yomikata: "いもうと",
            romaji: "imouto"
        },
        {
            id: 8,
            word: "子供",
            meaning: "Child",
            example: "子供は公園で遊んでいます。",
            exampleMeaning: "The child is playing in the park.",
            audio: "子供",
            image: "子供",
            yomikata: "こども",
            romaji: "kodomo"
        },
    ]),
]