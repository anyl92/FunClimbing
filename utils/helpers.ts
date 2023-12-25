import { ResultNumberType, AnswerType, QuestionNumberType } from "./types";

export const scores: ResultNumberType[] = Array(6).fill(0);
export const answerTypes: AnswerType[] = ["A", "B", "C"];

const calcMap: Record<
  QuestionNumberType,
  Partial<Record<AnswerType, ResultNumberType>>
> = {
  0: {
    A: 0,
    B: 1,
    C: 2,
  },
  1: {
    A: 3,
    B: 2,
    C: 1,
  },
  2: {
    A: 4,
    B: 1,
    C: 5,
  },
  3: {
    A: 5,
    B: 4,
    C: 0,
  },
  4: {
    A: 5,
    B: 4,
    C: 0,
  },
  5: {
    B: 3,
    C: 2,
  },
};

export const calcResult = (num: QuestionNumberType, type: AnswerType) => {
  const targetScore = calcMap[num][type];
  if (typeof targetScore === "undefined") {
    throw new Error("Wrong Question Data");
  }
  scores[targetScore]++;
};

export const checkQuestionNumber = (num: number): num is QuestionNumberType =>
  num < 6;
export const checkResultNumber = (num: number): num is ResultNumberType =>
  num < 6;
