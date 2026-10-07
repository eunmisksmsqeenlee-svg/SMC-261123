// Firebase 연결 (고칠 필요 없어요)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { firebaseConfig } from "./config.js?v=20261007r";

export * from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
export const SDK = "https://www.gstatic.com/firebasejs/12.19.0/";

const key = String(firebaseConfig.apiKey || "");
export const configured = key.length > 10 && !key.includes("여기") && Boolean(firebaseConfig.projectId);
export const app = configured ? initializeApp(firebaseConfig) : null;
export const db = configured ? getFirestore(app) : null;
