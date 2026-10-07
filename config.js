// ===============================================================
//  메시지월 설정 파일 — 이 파일만 고치면 돼요
// ===============================================================

// 1) Firebase 설정
//    Firebase 콘솔 > 프로젝트 설정 > 내 앱 에서 보이는
//    const firebaseConfig = { ... } 의 중괄호 안 내용을 통째로 바꿔 넣으세요.
export const firebaseConfig = {
  apiKey: "AIzaSyA_jijEqm8c3BI24mp9rqXywVhFkMEgycs",
  authDomain: "smc-261123.firebaseapp.com",
  projectId: "smc-261123",
  storageBucket: "smc-261123.firebasestorage.app",
  messagingSenderId: "503117955325",
  appId: "1:503117955325:web:d52ac9975cd24fd8f6be94",
  measurementId: "G-HLDH87BL72"
};

// 2) 행사 문구와 동작
//    {시간} 은 아래 lifetimeSeconds 값으로 자동으로 바뀌어요 (예: 2분).
export const EVENT = {
  eyebrow: "삼성서울병원 2026 운영계획설명회",
  title: "응원 메시지 및 질의 응답",
  wallSubtitle: "QR을 찍고 응원 한마디, 병원에 바라는 점, 궁금한 점을 남겨 주세요",
  sendLead: "보내주신 메시지는 운영진 확인 후 일정 시간 동안 화면에 게시됩니다.",
  placeholder: "응원 한마디, 병원에 바라는 점, 궁금한 점을 짧게 남겨 주세요",
  emptyWall: "첫 메시지를 기다리고 있어요",
  namePlaceholder: "공란 시 익명으로 게시됩니다.", // 이름 칸 안내
  footnote: "서로 존중하는 말을 남겨주세요.\n행사 취지에 맞지 않는 내용은 소개되지 않을 수 있습니다.", // 참여 화면 맨 아래 작은 글씨
  wallNote: "케어기버 여러분들의 지혜를 모아 더 나은 병원을 함께 만들어 가고자 운영계획설명회를 마련하였습니다.\n보내 주신 메시지는 운영진 확인 후 화면에 소개되며, 행사 취지에 맞지 않는 내용은 소개되지 않을 수 있습니다.", // 대형 화면 아래쪽 작은 글씨 (비우면 안 보여요)
  writeGuide: "※ 특정인에 대한 비방, 환자·직원 개인정보가 담긴 내용은 삼가 주세요.", // 메시지 입력칸 위 안내
  wallFootRight: "메시지는 일정 시간 동안 게시됩니다.", // 대형 화면 오른쪽 아래 글씨
  staffName: "운영계획설명회 안내", // 운영진 글쓰기 이름 기본값 (12자까지)

  // 로고: 이미지 파일을 이 폴더(index.html 옆)에 올리고 파일 이름을 적어요. 파일이 없으면 자리만 숨겨져요.
  logo: "logo.png",                 // 행사명 배지 옆 로고 (흰 바탕 상자에 들어가요)
  logoAlt: "삼성서울병원",
  bottomLogo: "slogan.png",         // 대형 화면 오른쪽 아래 로고
  bottomLogoAlt: "Care Together Happy Together",

  lifetimeSeconds: 120, // 메시지가 화면에 머무는 시간(초)
  maxLength: 50,        // 메시지 최대 글자 수 (최대 200)
  blockedWords: [],     // 보내지 못하게 막을 단어. 예: ["단어1", "단어2"]
  kinds: ["응원 한마디", "바라는 점", "궁금한 점"], // 메시지 종류 버튼
  qrSize: 300,          // 대형 화면 QR 최대 크기(px)

  // 아래는 보안 규칙과 짝이 맞아야 해요. 함부로 바꾸지 마세요.
  collection: "smc_messages", // 메시지를 담는 곳 (학교 행사와 따로 보관)
  configDoc: "smc",           // 띄우는 방식 설정 문서
  defaultModeration: true,    // 처음 상태는 '확인 후 띄우기'
  privateRead: true,          // 메시지는 운영진 로그인으로만 볼 수 있어요
  theme: "smc",               // 상단 행사명을 삼성 블루 배지로
  operatorEmail: "staff@smc-261123.firebaseapp.com" // 운영 비밀번호 로그인용 계정 (Firebase에 같은 이름으로 만들어요)
};
