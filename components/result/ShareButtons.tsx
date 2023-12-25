import Image from "next/image";

const ShareButtons = () => {
  return (
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
  );
};

export default ShareButtons;
