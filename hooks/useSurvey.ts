import { useRouter } from "next/navigation";
import { useState } from "react";

import { calcResult, checkQuestionNumber, scores } from "../utils/helpers";
import { AnswerType, QuestionNumberType } from "../utils/types";

const useSurvey = () => {
  const router = useRouter();
  const [curNum, setCurNum] = useState<QuestionNumberType>(0);

  const handleAnswerClick = (type: AnswerType) => {
    calcResult(curNum, type);
    if (curNum === 5) {
      const max = scores.reduce((acc, cur) => (cur > acc ? cur : acc), 0);
      localStorage.setItem("climbingType", scores.indexOf(max).toString());

      router.push("/result");
      return;
    }
    const nextQuestionNumber = curNum + 1;
    if (!checkQuestionNumber(nextQuestionNumber)) {
      throw new Error("Out of range");
    }
    setCurNum(nextQuestionNumber);
  };

  return { curNum, handleAnswerClick };
};

export default useSurvey;
