"use client";
import { useRouter } from "next/navigation";

export default async function SurveyPage() {
  const router = useRouter();

  const handleAnswerClick = () => {
    router.push("/result");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground">
        <div className="text-my-green text-center text-3xl">
          내 클라이밍 일정은?
        </div>
        <div className="flex flex-col gap-6">
          <div
            className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
            onClick={handleAnswerClick}
          >
            <div>이미 계획은 완벽하다.</div>
            <div>오늘 저녁은 친구들과, 주말에는 크루원들과 오픈런!</div>
          </div>
          <div
            className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
            onClick={handleAnswerClick}
          >
            누가 어디에 간다고 하면 즉흥적으로 따라간다.
          </div>
          <div
            className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
            onClick={handleAnswerClick}
          >
            <div>어제는 XX의 다이노 문제 풀었으니까,</div>
            <div>내일은 YY 뉴셋 정복해볼까?</div>
          </div>
        </div>
      </div>
    </div>
  );
}
