// ===============================================================
//  메시지월 설정 파일 — 이 파일만 고치면 돼요
// ===============================================================

// 1) Firebase 설정
//    Firebase 콘솔 > 프로젝트 설정 > 내 앱 에서 보이는
//    const firebaseConfig = { ... } 의 중괄호 안 내용을 통째로 바꿔 넣으세요.
export const firebaseConfig = {
  apiKey: "여기에-붙여넣기",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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

  lifetimeSeconds: 120, // 메시지가 화면에 머무는 시간(초)
  maxLength: 80,        // 메시지 최대 글자 수
  blockedWords: []      // 보내지 못하게 막을 단어. 예: ["단어1", "단어2"]
};
