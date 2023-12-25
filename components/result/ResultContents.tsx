import { TITLES } from "@/constants/result";
import { ResultNumberType } from "@/utils/types";
import Image from "next/image";

const ResultContents = ({
  resultTypeNum,
}: {
  resultTypeNum: ResultNumberType;
}) => {
  return (
    <>
      <div className="text-my-green text-center text-3xl">
        <div>{TITLES[resultTypeNum]}</div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={`/images/result${resultTypeNum}.jpeg`}
          width={300}
          height={300}
          alt={`결과${resultTypeNum}`}
        />
      </div>
    </>
  );
};

export default ResultContents;
