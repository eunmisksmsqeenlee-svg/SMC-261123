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
  eyebrow: "SKKU 정보통신대학원",
  title: "올해의 한마디",
  wallSubtitle: "QR을 찍고 메시지를 보내면 이 화면에 떠올라요",
  sendLead: "보낸 메시지는 앞 화면에 {시간} 동안 떠 있어요.",
  placeholder: "한 해 동안 고마웠던 사람에게, 하고 싶은 말을 남겨주세요",
  emptyWall: "첫 메시지를 기다리고 있어요",
  footnote: "메시지는 행사 화면에 공개돼요. 서로 기분 좋은 말만 남겨 주세요.",
  staffName: "운영진",  // 운영진 글쓰기 이름 기본값 (12자까지)
  logo: "",             // 행사명 옆 로고 이미지 파일 이름 (예: "logo.png", 비우면 안 보여요)
  bottomLogo: "",       // 대형 화면 오른쪽 아래 로고 이미지 파일 이름

  lifetimeSeconds: 120, // 메시지가 화면에 머무는 시간(초)
  maxLength: 80,        // 메시지 최대 글자 수 (최대 200)
  blockedWords: [],     // 보내지 못하게 막을 단어. 예: ["단어1", "단어2"]
  kinds: [],            // 메시지 종류 버튼. 예: ["응원 한마디", "궁금한 점"] (비우면 안 보여요)
  qrSize: 170,          // 대형 화면 QR 최대 크기(px)

  // 아래는 보안 규칙과 짝이 맞아야 해요. 함부로 바꾸지 마세요.
  collection: "messages",   // 메시지를 담는 곳
  configDoc: "wall",        // 띄우는 방식 설정 문서
  defaultModeration: false, // 처음 상태가 '확인 후 띄우기'인지
  privateRead: false,       // true면 메시지를 운영진 로그인으로만 볼 수 있어요
  theme: "",                // 화면 꾸밈 (병원 버전은 "smc")
  operatorEmail: "staff@smc-261123.firebaseapp.com" // 운영 비밀번호 로그인용 계정 (Firebase에 같은 이름으로 만들어요)
};
