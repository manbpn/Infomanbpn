/* ======================================================================
   KONFIGURASI FIREBASE
   ----------------------------------------------------------------------
   Ganti SELURUH nilai di bawah ini dengan milik proyek Firebase Anda
   sendiri. Cara mendapatkannya ada di PANDUAN-SETUP.md (Langkah 2).
   Nilai-nilai ini AMAN untuk terlihat publik di kode — bukan kata sandi.
   Keamanan sesungguhnya diatur oleh firestore.rules & storage.rules.
   ====================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAShNj-dMxBzbX6OvuJ3VSpH06VgTX8T5o",
  authDomain: "ruang-infografis.firebaseapp.com",
  projectId: "ruang-infografis",
  storageBucket: "ruang-infografis.firebasestorage.app",
  messagingSenderId: "954054428904",
  appId: "1:954054428904:web:308b9cae152103629b615d",
  measurementId: "G-F34EWV1776"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
