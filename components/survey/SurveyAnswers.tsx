import { ANSWERS } from "@/constants/survey";
import { answerTypes } from "@/utils/helpers";
import { AnswerType, QuestionNumberType } from "@/utils/types";

const SurveyAnswers = ({
  curNum,
  handleAnswerClick,
}: {
  curNum: QuestionNumberType;
  handleAnswerClick: (type: AnswerType) => void;
}) => {
  return (
    <div className="flex flex-col gap-6">
      {answerTypes.map((item) => (
        <div
          key={item}
          className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
          onClick={() => handleAnswerClick(item)}
        >
          <div>{ANSWERS[curNum][item]}</div>
        </div>
      ))}
    </div>
  );
};

export default SurveyAnswers;
