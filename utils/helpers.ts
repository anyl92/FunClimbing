export const checkQuestionNumber = (num: number): num is QuestionNumberType =>
  num < 6;
