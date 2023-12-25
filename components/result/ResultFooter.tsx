import ShareButtons from "./ShareButtons";

const ResultFooter = () => {
  const handleAgainClick = () => {
    location.href = "/home";
  };

  return (
    <div className="flex flex-col gap-6">
      <div
        className="border-2 border-my-green bg-white text-my-green text-center w-full h-14 rounded-lg cursor-pointer flex flex-col justify-center items-center"
        onClick={handleAgainClick}
      >
        테스트 다시하기
      </div>
      <ShareButtons />
    </div>
  );
};

export default ResultFooter;
