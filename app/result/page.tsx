"use client";
import { useEffect, useState } from "react";
import { ResultNumberType } from "@/utils/types";
import { checkResultNumber } from "@/utils/helpers";
import ResultContents from "@/components/result/ResultContents";
import ResultFooter from "@/components/result/ResultFooter";

export default function ResultPage() {
  const [resultTypeNum, setResultTypeNum] = useState<ResultNumberType>(0);
  useEffect(() => {
    const type = localStorage.getItem("climbingType");
    if (!type) return;

    const typeNumber = parseInt(type);
    if (!checkResultNumber(typeNumber)) {
      throw new Error("Out of range");
    }
    setResultTypeNum(typeNumber);
  }, [resultTypeNum]);

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 overflow-hidden">
      <div className="animate-in flex-1 flex flex-col w-full justify-evenly gap-2 text-foreground">
        <ResultContents resultTypeNum={resultTypeNum} />
        <ResultFooter />
      </div>
    </div>
  );
}
