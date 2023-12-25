"use client";
import SurveyQuestion from "@/components/survey/SurveyQuestion";
import useSurvey from "../../hooks/useSurvey";
import SurveyAnswers from "@/components/survey/SurveyAnswers";

export default function SurveyPage() {
  const { curNum, handleAnswerClick } = useSurvey();

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div
        key={curNum}
        className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground"
      >
        <SurveyQuestion curNum={curNum} />
        <SurveyAnswers curNum={curNum} handleAnswerClick={handleAnswerClick} />
      </div>
    </div>
  );
}
