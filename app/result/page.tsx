"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ResultPage() {
  const router = useRouter();

  const handleAgainClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground">
        <div className="text-my-green text-center text-3xl">
          <div>여러 사람들과</div>
          <div>마감까지 하얗게 불태우는 타입</div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/result1.jpeg"
            width={300}
            height={300}
            alt="결과1"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div
            className="border-2 border-my-green bg-white text-my-green text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
            onClick={handleAgainClick}
          >
            테스트 다시하기
          </div>
          <div className="flex gap-2">
            <div className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex justify-center items-center gap-2">
              <Image
                src="/images/instagram_logo.png"
                width={20}
                height={20}
                alt="instagram_logo"
              />
              <div>스토리 업로드</div>
            </div>
            <div className="bg-my-green text-white text-center w-full h-14 rounded-lg cursor-pointer flex justify-center items-center gap-2">
              <Image
                src="/images/kakaotalk_logo.png"
                width={20}
                height={20}
                alt="kakaotalk_logo"
              />
              <div>공유하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
