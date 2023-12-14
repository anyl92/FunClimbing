"use client";
import { useRouter } from "next/navigation";

export default async function Notes() {
  const router = useRouter();

  const handleAnswerClick = () => {};

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground">
        <div className="text-my-green text-center text-3xl">1번질문</div>
        <div className="flex flex-col gap-6">
          <div
            className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex justify-center items-center"
            onClick={handleAnswerClick}
          >
            1번답변
          </div>
          <div
            className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex justify-center items-center"
            onClick={handleAnswerClick}
          >
            2번답변
          </div>
        </div>
      </div>
    </div>
  );
}
