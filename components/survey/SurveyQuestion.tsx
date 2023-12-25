import { QUESTIONS } from "@/constants/survey";
import { QuestionNumberType } from "@/utils/types";

const SurveyQuestion = ({ curNum }: { curNum: QuestionNumberType }) => {
  return (
    <div className="text-my-green text-center text-3xl">
      <div>{QUESTIONS[curNum]}</div>
    </div>
  );
};

export default SurveyQuestion;
