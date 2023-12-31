import { AnswerType } from "@/utils/types";

export const QUESTIONS: string[] = [
  "나의 클라이밍 일정은?",
  "어 .. 클라이밍 갈 생각 없었는데 ... 갑자기 가고 싶다!",
  "오늘은 클라이밍 가는 날!",
  "클라이밍장에 갔더니 아는 얼굴들이 많이 보인다",
  "이 문제 너무 풀고 싶은데 ... 안 풀리네!",
  "클라이밍이 끝난 후에 나는?",
];

export const ANSWERS: Record<AnswerType, string>[] = [
  {
    A: "이미 계획은 완벽하다. 오늘 저녁엔 친구들이랑, 주말 아침에는 크루원들이랑 오픈런!",
    B: "누가 어디엔 간다고 하면 즉흥적으로 따라간다.",
    C: "어제는 XX의 다이노 문제 풀었으니까 내일은 YY 뉴셋 정복해볼까?",
  },
  {
    A: "계획에 없었는데 … 장비도 없는데 … 참아야겠다.",
    B: "이런 나를 위해 대여화가 있는 게 아니겠어? 바로 가즈아!",
    C: "혼자 가면 심심하니까 같이 갈 사람 찾아봐야겠다.",
  },
  {
    A: "인스타그램에서 문제 하나하나를 꼼꼼히 보며 무브까지 미리 예습한다.",
    B: "인스타그램에서 이거 재밌어 보이는데? 싶은 문제들을 픽해놓는다.",
    C: "도착해서 재미있어 보이는 문제를 풀고싶은 만큼 푼다.",
  },
  {
    A: "헉 너무 반가워 여기서도 같이 풀고 저기서도 같이 푼다.",
    B: "인사만 하고 존버 문제 앞에 죽치고 앉아 있는다.",
    C: "끝나고 같이 치맥하자고 얘기해본다.",
  },
  {
    A: "에잇.. 다른 문제 풀어야겠다.",
    B: "뭐가 문제인가.. 내 무브 돌려보고 인스타도 찾아본다.",
    C: "이 문제 푼 고수 찾아요!! 자문을 구한다.",
  },
  {
    A: "영상을 정리해서 인스타그램에 올린다.",
    B: "인스타그램에 올리기도 하지만 귀찮으면 올리지 않기도 한다.",
    C: "카메라는 거들 뿐 아 오늘 운동 뿌듯하다.",
  },
];
