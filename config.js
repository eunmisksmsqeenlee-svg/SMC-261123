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
  sendLead: "보낸 메시지는 앞 화면에 {시간} 동안 떠 있어요.",
  placeholder: "한 해 동안 애쓴 동료에게 한마디, 병원에 바라는 점이나 궁금한 점을 남겨 주세요",
  emptyWall: "첫 메시지를 기다리고 있어요",
  footnote: "메시지는 설명회 화면에 공개돼요. 서로 존중하는 말로 남겨 주세요.",

  lifetimeSeconds: 120, // 메시지가 화면에 머무는 시간(초)
  maxLength: 100,       // 메시지 최대 글자 수 (최대 200)
  blockedWords: [],     // 보내지 못하게 막을 단어. 예: ["단어1", "단어2"]
  kinds: ["응원 한마디", "바라는 점", "궁금한 점"], // 메시지 종류 버튼
  qrSize: 300,          // 대형 화면 QR 최대 크기(px)

  // 아래는 보안 규칙과 짝이 맞아야 해요. 함부로 바꾸지 마세요.
  collection: "smc_messages", // 메시지를 담는 곳 (학교 행사와 따로 보관)
  configDoc: "smc",           // 띄우는 방식 설정 문서
  defaultModeration: true,    // 처음 상태는 '확인 후 띄우기'
  privateRead: true,          // 메시지는 운영진 로그인으로만 볼 수 있어요
  theme: "smc"                // 상단 행사명을 삼성 블루 배지로
};
