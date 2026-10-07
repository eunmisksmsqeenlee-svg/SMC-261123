// 세 화면이 같이 쓰는 도구 (고칠 필요 없어요)
import { EVENT } from "./config.js";

export const COLORS = ["cream", "apricot", "mint", "sky", "lilac"];

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
