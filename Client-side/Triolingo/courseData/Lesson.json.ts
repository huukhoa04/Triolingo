
import { LessonQuizBank } from "./QuizBank.json";
import { CourseLangType } from "@/interface/CourseLangType.d";

export const Lesson = {
    lesson1: {
        id: 1,
        title: "Basic Japanese",
        description: "This lesson will teach you the basic Japanese characters and how to pronounce them.",
        numberOfQuizzes: 30,
        quizzes: LessonQuizBank["lesson1"].quizzes.sort(() => 0.5 - Math.random()).slice(0, 30),
        lang: CourseLangType.JAPANESE,
    },
    lesson2: {
        id: 2,
        title: "Travelling",
        description: "This lesson will teach you the basic Japanese phrases for travelling.",
        numberOfQuizzes: 30,
        quizzes: LessonQuizBank["lesson2"].quizzes.sort(() => 0.5 - Math.random()).slice(0, 30),
        lang: CourseLangType.JAPANESE,
    },
    lesson3: {
        id: 3,
        title: "Food and drink",
        description: "This lesson will teach you the basic Japanese phrases for ordering food and drink.",
        numberOfQuizzes: 30,
        quizzes: LessonQuizBank["lesson3"].quizzes.sort(() => 0.5 - Math.random()).slice(0, 30),
        lang: CourseLangType.JAPANESE,
    }
}

export const LessonHandler = {
    getLesson: (id: number) => {
        return Object.values(Lesson).find(lesson => lesson.id === id);
    }
}