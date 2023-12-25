"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleStartClick = () => {
    router.push("/survey");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground">
        <div className="text-my-green text-center text-3xl">
          클라이머 성향 테스트
        </div>
        <div
          className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex justify-center items-center"
          onClick={handleStartClick}
        >
          테스트 시작하기
        </div>
      </div>
    </div>
  );
}
