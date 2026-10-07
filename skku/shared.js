// 세 화면이 같이 쓰는 도구 (고칠 필요 없어요)
import { EVENT } from "./config.js?v=20261007t";

export const COLORS = ["cream", "apricot", "mint", "sky", "lilac"];

// 행사마다 메시지를 따로 담는 곳 (config.js에서 정해요)
export const COL = EVENT.collection || "messages";
export const CFG_DOC = EVENT.configDoc || "wall";
export const LOG_COL = COL + "_edits"; // 수정 이력 (지울 수 없어요)
export const SHOW_MAX = 200;           // 화면에 띄울 수 있는 최대 글자 수 (운영진 작성·수정 포함)
export const NOTICE_COLORS = ["blue", "amber", "cream", "green", "wine"];
export const NOTICE_NAMES = { blue: "삼성 블루", amber: "주황", cream: "크림", green: "초록", wine: "와인" };
export const KINDS = Array.isArray(EVENT.kinds) ? EVENT.kinds.filter((k) => typeof k === "string" && k.trim()) : [];

// '확인 후 띄우기'가 켜져 있는지 (설정 문서가 없으면 config.js 기본값)
export function moderationFrom(snap) {
  const v = snap && snap.exists() ? snap.data().moderation : undefined;
  return v === undefined ? EVENT.defaultModeration === true : v === true;
}

// 화면 꾸밈(예: 병원 테마)을 body에 붙여요
export function applyTheme() {
  if (EVENT.theme) document.body.classList.add("theme-" + EVENT.theme);
}

export function lifetimeLabel() {
  const s = Number(EVENT.lifetimeSeconds) || 120;
  return s % 60 === 0 ? `${s / 60}분` : `${s}초`;
}

export function fill(text) {
  return String(text || "").replaceAll("{시간}", lifetimeLabel());
}

// data-text="키" 가 붙은 요소에 config.js 문구를 넣어요
export function applyText(root = document) {
  root.querySelectorAll("[data-text]").forEach((el) => {
    const v = EVENT[el.dataset.text];
    if (typeof v === "string" && v.trim()) el.textContent = fill(v);
  });
  root.querySelectorAll("[data-placeholder]").forEach((el) => {
    const v = EVENT[el.dataset.placeholder];
    if (typeof v === "string" && v.trim()) el.placeholder = fill(v);
  });
}

// 참여 페이지 주소 (이 폴더의 index.html)
export function participantUrl() {
  return new URL("./", location.href).href;
}

// QR 코드를 캔버스에 그려요. 라이브러리를 못 불러오면 false
export function drawQR(canvas, text, { dark = "#1d2731", light = "#f6efe2", margin = 2, pixels } = {}) {
  if (typeof window.qrcode !== "function") return false;
  const qr = window.qrcode(0, "M");
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount();
  const total = n + margin * 2;
  const target = pixels || Math.round((canvas.clientWidth || 160) * Math.min(2, window.devicePixelRatio || 1));
  const cell = Math.max(1, Math.floor(target / total));
  canvas.width = canvas.height = cell * total;
  const g = canvas.getContext("2d");
  g.fillStyle = light;
  g.fillRect(0, 0, canvas.width, canvas.height);
  g.fillStyle = dark;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (qr.isDark(r, c)) g.fillRect((c + margin) * cell, (r + margin) * cell, cell, cell);
    }
  }
  return true;
}

export function makeToast(el) {
  let timer = null;
  return (text, ms = 3200) => {
    el.hidden = true;
    el.textContent = text;
    void el.offsetWidth;
    el.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(() => { el.hidden = true; }, ms);
  };
}

export function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(Object.assign(new Error("timeout"), { code: "timeout" })), ms))
  ]);
}

export function timeText(ts) {
  if (!ts || typeof ts.toDate !== "function") return "방금";
  const d = ts.toDate();
  return d.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
}

// ---------- 운영진 로그인 ----------
export const OPERATOR_EMAIL = String(EVENT.operatorEmail || "").trim();

export function isOperator(user) {
  return Boolean(user && OPERATOR_EMAIL && user.email && user.email.toLowerCase() === OPERATOR_EMAIL.toLowerCase());
}

export function authErrorText(e) {
  const code = e && e.code;
  return {
    "auth/invalid-credential": "비밀번호가 맞지 않아요. 다시 입력해 주세요.",
    "auth/wrong-password": "비밀번호가 맞지 않아요. 다시 입력해 주세요.",
    "auth/user-not-found": "운영진 계정이 아직 없어요. Firebase 콘솔 > Authentication > 사용자에서 만들어 주세요.",
    "auth/invalid-email": "config.js의 operatorEmail 형식이 올바르지 않아요.",
    "auth/missing-password": "비밀번호를 입력해 주세요.",
    "auth/too-many-requests": "여러 번 틀려서 잠시 막혔어요. 몇 분 뒤에 다시 해 주세요.",
    "auth/network-request-failed": "인터넷 연결을 확인하고 다시 시도해 주세요.",
    "auth/unauthorized-domain": `이 주소(${location.hostname})가 아직 허용되지 않았어요. Firebase 콘솔 > Authentication > 설정 > 승인된 도메인에 추가해 주세요.`,
    "auth/operation-not-allowed": "이 로그인 방법이 꺼져 있어요. Firebase 콘솔 > Authentication > 로그인 방법에서 켜 주세요.",
    "auth/popup-blocked": "팝업이 막혔어요. 주소창 오른쪽에서 팝업을 허용하고 다시 눌러 주세요.",
    "auth/popup-closed-by-user": "로그인 창이 닫혔어요. 다시 눌러 주세요."
  }[code] || "로그인하지 못했어요. 잠시 후 다시 시도해 주세요.";
}

// 종류 순서 번호 (색 구분용, 없으면 -1)
export function kindIndex(kind) {
  return KINDS.indexOf(kind);
}

// config.js에 적힌 로고 파일을 흰 상자에 넣어 보여줘요. 파일이 없으면 상자를 숨겨요
export function applyLogos(root = document) {
  root.querySelectorAll("img[data-logo]").forEach((img) => {
    const box = img.closest(".logo-box") || img;
    const file = String(EVENT[img.dataset.logo] || "").trim();
    box.hidden = true;
    if (!file) return;
    img.alt = String(EVENT[img.dataset.logo + "Alt"] || "");
    img.addEventListener("load", () => { box.hidden = false; }, { once: true });
    img.addEventListener("error", () => { box.hidden = true; }, { once: true });
    img.src = file;
  });
}
